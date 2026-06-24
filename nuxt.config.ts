export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Safia HDD — Photographe de mariage',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Great+Vibes&family=Inter:wght@300;400;500&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})