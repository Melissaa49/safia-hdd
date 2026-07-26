// server/api/proxy-image.get.ts
// Proxy les images Instagram qui bloquent le hotlinking direct (403)

const ALLOWED = ['instagram.com', 'cdninstagram.com', 'fbcdn.net', 'rss.app', 'rssproxy.migor.org']

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const rawUrl = query.url

  if (!rawUrl || typeof rawUrl !== 'string') {
    setResponseStatus(event, 400)
    return 'URL manquante'
  }

  let parsed: URL
  try { parsed = new URL(rawUrl) } catch {
    setResponseStatus(event, 400)
    return 'URL invalide'
  }

  const allowed = ALLOWED.some(d => parsed.hostname.endsWith(d))
  if (!allowed) {
    setResponseStatus(event, 403)
    return 'Domaine non autorisé'
  }

  try {
    const res = await fetch(rawUrl, {
      headers: {
        'Referer':    'https://www.instagram.com/',
        'Origin':     'https://www.instagram.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept':     'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      },
    })

    if (!res.ok) {
      setResponseStatus(event, res.status)
      return `Erreur ${res.status}`
    }

    setResponseHeader(event, 'Content-Type', res.headers.get('content-type') ?? 'image/jpeg')
    setResponseHeader(event, 'Cache-Control', 'public, max-age=7200')
    setResponseHeader(event, 'Access-Control-Allow-Origin', '*')

    return sendStream(event, res.body as ReadableStream)
  } catch (err) {
    console.error('[proxy-image]', err)
    setResponseStatus(event, 500)
    return 'Erreur proxy'
  }
})