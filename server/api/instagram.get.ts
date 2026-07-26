// server/api/instagram.get.ts
// Récupère les publications Instagram via RSS (rss.app) — sans accès Meta API
// Cache serveur 30 min pour limiter les appels RSS

import { defineCachedEventHandler } from 'nitropack/runtime'

interface InstagramPost {
  src: string
  caption: string
  date: string
  likes: number
  link: string
}

const MOCK_POSTS: InstagramPost[] = [
  { src: '/images/polaroid1.jpg',  caption: 'Un mariage tout en douceur, des émotions plein les yeux ✨', date: '14 jan.', likes: 0, link: '#' },
  { src: '/images/polaroid2.jpg',  caption: 'Séance glow up — retrouver confiance en soi 🌸', date: '8 jan.', likes: 0, link: '#' },
  { src: '/images/polaroid3.jpg',  caption: 'Portrait entrepreneur — votre image, votre force 💼', date: '2 jan.', likes: 0, link: '#' },
  { src: '/images/polaroid4.jpg',  caption: 'Séance couple dans la lumière de fin d\'après-midi 🌅', date: '28 déc.', likes: 0, link: '#' },
  { src: '/images/polaroid5.jpg',  caption: 'La lumière dorée de décembre 🍂', date: '20 déc.', likes: 0, link: '#' },
  { src: '/images/polaroid6.jpg',  caption: 'Un moment de vie capturé, une éternité préservée 💛', date: '15 déc.', likes: 0, link: '#' },
  { src: '/images/polaroid7.jpg',  caption: 'L\'émotion en image — c\'est ce que je cherche 📷', date: '10 déc.', likes: 0, link: '#' },
  { src: '/images/polaroid8.jpg',  caption: 'Shooting en extérieur — la nature comme décor 🌿', date: '5 déc.', likes: 0, link: '#' },
  { src: '/images/polaroid9.jpg',  caption: 'Portrait féminin — la lumière naturelle, toujours 🤍', date: '28 nov.', likes: 0, link: '#' },
  { src: '/images/polaroid10.jpg', caption: 'Séance famille — des souvenirs pour la vie 👨‍👩‍👧', date: '22 nov.', likes: 0, link: '#' },
  { src: '/images/polaroid11.jpg', caption: 'Mariage d\'automne — dorés, comme les feuilles 🍁', date: '15 nov.', likes: 0, link: '#' },
]

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  } catch {
    return ''
  }
}

function extractImage(item: string): string {
  const patterns: RegExp[] = [
    /enclosure[^>]+url="([^"]+)"/,
    /media:content[^>]+url="([^"]+)"/,
    /<img[^>]+src="([^"]+)"/,
  ]
  for (const re of patterns) {
    const m = re.exec(item)
    if (m?.[1]) return m[1]
  }
  return ''
}

function stripHTML(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim()
}

function decodeHTML(str: string): string {
  return str
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
}

function safeMatch(re: RegExp, str: string): string {
  const m = re.exec(str)
  if (!m) return ''
  const g = m[1]
  return typeof g === 'string' ? g : ''
}

function parseRSS(xml: string): InstagramPost[] {
  const posts: InstagramPost[] = []
  const itemRe = /<item>([\s\S]*?)<\/item>/g
  let m = itemRe.exec(xml)

  while (m !== null) {
    const g1 = m[1]
    const item: string = typeof g1 === 'string' ? g1 : ''

    if (item) {
      const titleRaw: string = safeMatch(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/, item)
      const linkRaw: string  = safeMatch(/<link>([\s\S]*?)<\/link>/, item)
      const dateRaw: string  = safeMatch(/<pubDate>([\s\S]*?)<\/pubDate>/, item)

      const caption: string = titleRaw ? stripHTML(titleRaw) : ''
      const rawSrc: string  = extractImage(item)
      // Décode les entités HTML (&amp; → &) avant de proxifier
      const cleanSrc: string = decodeHTML(rawSrc)
      const src: string     = cleanSrc ? `/api/proxy-image?url=${encodeURIComponent(cleanSrc)}` : ''
      const link: string    = linkRaw.trim() || '#'
      const date: string    = dateRaw ? formatDate(dateRaw.trim()) : ''

      if (src && caption) {
        posts.push({ src, caption, date, likes: 0, link })
      }
    }

    m = itemRe.exec(xml)
  }

  return posts.slice(0, 12)
}

// ── Handler avec cache serveur ─────────────────────────────────────────
// maxAge: 1800s = 30 min → limite les appels RSS
// staleMaxAge: 7200s = 2h → garde l'ancien résultat si le RSS est indisponible
export default defineCachedEventHandler(
  async (): Promise<InstagramPost[]> => {
    const rssUrl = process.env.INSTAGRAM_RSS_URL

    if (!rssUrl) {
      console.info('[instagram] Pas de INSTAGRAM_RSS_URL — posts de démo')
      return MOCK_POSTS
    }

    try {
      const xml = await $fetch<string>(rssUrl, {
        headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
      })
      const posts = parseRSS(xml)
      if (!posts.length) {
        console.warn('[instagram] Flux RSS vide — fallback démo')
        return MOCK_POSTS
      }
      console.info(`[instagram] ${posts.length} publications chargées depuis RSS`)
      return posts
    } catch (err) {
      console.error('[instagram] Erreur RSS :', err)
      return MOCK_POSTS
    }
  },
  {
    maxAge: 60 * 30,       // cache 30 minutes
    staleMaxAge: 60 * 120, // garde l'ancien résultat 2h en cas d'erreur
    name: 'instagram-feed',
  }
)