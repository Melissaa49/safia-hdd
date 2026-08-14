// server/api/instagram.get.ts
// Récupère les publications Instagram via RSS.app, sans API Meta.
// Si le flux RSS ne répond pas, retourne simplement [] au lieu d'afficher
// de fausses publications.

import { defineCachedEventHandler } from 'nitropack/runtime'

interface InstagramPost {
  src: string
  caption: string
  date: string
  likes: number
  link: string
}

function decodeHTML(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function stripCdata(value: string): string {
  return value
    .replace(/^\s*<!\[CDATA\[/, '')
    .replace(/\]\]>\s*$/, '')
}

function stripHTML(value: string): string {
  return decodeHTML(stripCdata(value))
    .replace(/<br\s*\/?\s*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function safeMatch(re: RegExp, value: string): string {
  const match = re.exec(value)

  if (!match || typeof match[1] !== 'string') {
    return ''
  }

  return match[1]
}

function formatDate(value: string): string {
  if (!value) return ''

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
  })
}

function extractImage(block: string): string {
  const patterns: RegExp[] = [
    /<media:content[^>]+url=["']([^"']+)["'][^>]*>/i,
    /<media:thumbnail[^>]+url=["']([^"']+)["'][^>]*>/i,
    /<enclosure[^>]+url=["']([^"']+)["'][^>]*>/i,
    /<img[^>]+src=["']([^"']+)["'][^>]*>/i,
  ]

  for (const pattern of patterns) {
    const image = safeMatch(pattern, block)

    if (image) {
      return decodeHTML(image.trim())
    }
  }

  return ''
}

function extractCaption(block: string): string {
  const candidates = [
    safeMatch(/<title[^>]*>([\s\S]*?)<\/title>/i, block),
    safeMatch(/<description[^>]*>([\s\S]*?)<\/description>/i, block),
    safeMatch(
      /<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i,
      block,
    ),
    safeMatch(/<content[^>]*>([\s\S]*?)<\/content>/i, block),
    safeMatch(/<summary[^>]*>([\s\S]*?)<\/summary>/i, block),
  ]

  for (const candidate of candidates) {
    const caption = stripHTML(candidate)

    if (caption) {
      return caption
    }
  }

  return 'Publication Instagram'
}

function extractLink(block: string): string {
  const rssLink = stripCdata(
    safeMatch(/<link[^>]*>([\s\S]*?)<\/link>/i, block),
  ).trim()

  if (rssLink) {
    return decodeHTML(rssLink)
  }

  const atomAlternate = safeMatch(
    /<link[^>]+rel=["']alternate["'][^>]+href=["']([^"']+)["'][^>]*>/i,
    block,
  )

  if (atomAlternate) {
    return decodeHTML(atomAlternate.trim())
  }

  const atomHref = safeMatch(
    /<link[^>]+href=["']([^"']+)["'][^>]*>/i,
    block,
  )

  if (atomHref) {
    return decodeHTML(atomHref.trim())
  }

  return 'https://www.instagram.com/safiamomentsdevie/'
}

function extractDate(block: string): string {
  return (
    stripCdata(
      safeMatch(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i, block),
    ).trim() ||
    stripCdata(
      safeMatch(/<published[^>]*>([\s\S]*?)<\/published>/i, block),
    ).trim() ||
    stripCdata(
      safeMatch(/<updated[^>]*>([\s\S]*?)<\/updated>/i, block),
    ).trim()
  )
}

function parseFeed(xml: string): InstagramPost[] {
  const posts: InstagramPost[] = []
  const blocks: string[] = []

  const patterns = [
    /<item\b[^>]*>([\s\S]*?)<\/item>/gi,
    /<entry\b[^>]*>([\s\S]*?)<\/entry>/gi,
  ]

  for (const pattern of patterns) {
    let match: RegExpExecArray | null

    while ((match = pattern.exec(xml)) !== null) {
      if (typeof match[1] === 'string') {
        blocks.push(match[1])
      }
    }
  }

  for (const block of blocks) {
    const imageUrl = extractImage(block)

    if (!imageUrl) {
      continue
    }

    posts.push({
      src: `/api/proxy-image?url=${encodeURIComponent(imageUrl)}`,
      caption: extractCaption(block),
      date: formatDate(extractDate(block)),
      likes: 0,
      link: extractLink(block),
    })

    if (posts.length >= 12) {
      break
    }
  }

  return posts
}

export default defineCachedEventHandler(
  async (): Promise<InstagramPost[]> => {
    const rssUrl = process.env.INSTAGRAM_RSS_URL?.trim()

    if (!rssUrl) {
      console.error(
        '[instagram] Variable INSTAGRAM_RSS_URL absente',
      )

      return []
    }

    try {
      const xml = await $fetch<string>(rssUrl, {
        headers: {
          Accept:
            'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
          'User-Agent': 'Mozilla/5.0 SafiaMomentsDeVie/1.0',
        },
        retry: 1,
        timeout: 10000,
      })

      if (typeof xml !== 'string' || !xml.trim()) {
        console.error('[instagram] Le flux RSS est vide')

        return []
      }

      const posts = parseFeed(xml)

      if (!posts.length) {
        console.error(
          '[instagram] Flux reçu mais aucune publication exploitable trouvée',
        )

        return []
      }

      console.info(
        `[instagram] ${posts.length} publication(s) chargée(s) depuis le RSS`,
      )

      return posts
    } catch (error) {
      console.error(
        '[instagram] Impossible de charger le flux RSS',
        error,
      )

      return []
    }
  },
  {
    maxAge: 60 * 15,
    staleMaxAge: 60 * 120,
    name: 'instagram-feed',
  },
)