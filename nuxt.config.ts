export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2026-06-24',
  modules: ['@nuxtjs/sitemap'],
  app: {
    head: {
      title: 'Safia HDD — Photographe de mariage à Mouscron',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Safia HDD Photographe' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Great+Vibes&family=Inter:wght@300;400;500&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Privé : accessible uniquement côté serveur (jamais exposé au client)
    resendApiKey: process.env.RESEND_API_KEY,
    contactToEmail: process.env.CONTACT_TO_EMAIL || 'safiamomentsdevie@gmail.com',
    contactFromEmail: process.env.CONTACT_FROM_EMAIL,
  },
  sitemap: {
    urls: [
      '/',
      '/portfolio',
      '/a-propos',
      '/formation',
      '/tarif',
      '/contact',
      '/photographe-mariage-mouscron',
      '/formation-photo-mouscron',
      '/shooting-photo-glow-up-mouscron',
    ]
  },
})