// server/api/instagram.get.ts

interface InstagramPost {
  src: string
  caption: string
  date: string
  likes: number
  link: string
}

const MOCK_POSTS: InstagramPost[] = [
  { src: '/images/polaroid1.jpg',  caption: 'Un mariage tout en douceur, des émotions plein les yeux ✨', date: '14 jan.', likes: 243, link: '#' },
  { src: '/images/polaroid2.jpg',  caption: 'Séance glow up — retrouver confiance en soi 🌸', date: '8 jan.', likes: 189, link: '#' },
  { src: '/images/polaroid3.jpg',  caption: 'Portrait entrepreneur — votre image, votre force 💼', date: '2 jan.', likes: 134, link: '#' },
  { src: '/images/polaroid4.jpg',  caption: 'Séance couple dans la lumière de fin d\'après-midi 🌅', date: '28 déc.', likes: 201, link: '#' },
  { src: '/images/polaroid5.jpg',  caption: 'La lumière dorée de décembre 🍂', date: '20 déc.', likes: 156, link: '#' },
  { src: '/images/polaroid6.jpg',  caption: 'Un moment de vie capturé, une éternité préservée 💛', date: '15 déc.', likes: 178, link: '#' },
  { src: '/images/polaroid7.jpg',  caption: 'L\'émotion en image — c\'est ce que je cherche 📷', date: '10 déc.', likes: 142, link: '#' },
  { src: '/images/polaroid8.jpg',  caption: 'Shooting en extérieur — la nature comme décor 🌿', date: '5 déc.', likes: 167, link: '#' },
  { src: '/images/polaroid9.jpg',  caption: 'Portrait féminin — la lumière naturelle, toujours 🤍', date: '28 nov.', likes: 198, link: '#' },
  { src: '/images/polaroid10.jpg', caption: 'Séance famille — des souvenirs pour la vie 👨‍👩‍👧', date: '22 nov.', likes: 221, link: '#' },
  { src: '/images/polaroid11.jpg', caption: 'Mariage d\'automne — dorés, comme les feuilles 🍁', date: '15 nov.', likes: 287, link: '#' },
]

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
  } catch {
    return ''
  }
}

// Retourne toujours un string — jamais undefined
function pick(re: RegExp, text: string): string {
  const m = re.exec(text)
  if (!m) return ''
  const g = m[1]
  return typeof g === 'string' ? g : ''
}

// Décode les entités HTML dans les URLs RSS (&amp; → &, etc.)
function decodeHTML(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function extractImage(item: string): string {
  const patterns: RegExp[] = [
    /enclosure[^>]+url="([^"]+)"/,
    /media:content[^>]+url="([^"]+)"/,
    /<img[^>]+src="([^"]+)"/,
  ]
  for (const re of patterns) {
    const val = pick(re, item)
    if (val) return val
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

function parseRSS(xml: string): InstagramPost[] {
  const posts: InstagramPost[] = []
  const itemRe = /<item>([\s\S]*?)<\/item>/g
  let m = itemRe.exec(xml)

  while (m !== null) {
    // m[1] peut être undefined selon tsconfig — on force string
    const g1 = m[1]
    const item: string = typeof g1 === 'string' ? g1 : ''

    if (item) {
      const titleRaw: string = pick(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/, item)
      const linkRaw: string  = pick(/<link>([\s\S]*?)<\/link>/, item)
      const dateRaw: string  = pick(/<pubDate>([\s\S]*?)<\/pubDate>/, item)

      const caption: string = titleRaw ? stripHTML(titleRaw) : ''
      const src: string     = extractImage(item)
      const link: string    = linkRaw.trim() || '#'
      const date: string    = dateRaw ? formatDate(dateRaw.trim()) : ''

      if (src && caption) {
        // Décode les entités HTML puis proxy l'image Instagram
        const cleanSrc: string = decodeHTML(src)
        const proxied: string = `/api/proxy-image?url=${encodeURIComponent(cleanSrc)}`
        posts.push({ src: proxied, caption, date, likes: 0, link })
      }
    }

    m = itemRe.exec(xml)
  }

  return posts.slice(0, 12)
}

export default defineEventHandler(async (): Promise<InstagramPost[]> => {
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
    return posts.length ? posts : MOCK_POSTS
  } catch (err) {
    console.error('[instagram] Erreur RSS :', err)
    return MOCK_POSTS
  }
})