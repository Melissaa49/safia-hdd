export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/formation-photo-mouscron' || !to.hash) return

  const articleByAnchor: Record<string, string> = {
    '#balance-des-blancs': '/conseils-photo/balance-des-blancs',
    '#vitesse': '/conseils-photo/vitesse-obturation',
    '#exposition': '/conseils-photo/triangle-exposition',
    '#flou': '/conseils-photo/flou-photo',
    '#cadrage': '/conseils-photo/cadrage-composition',
    '#flash': '/conseils-photo/flash-photo'
  }

  const articleUrl = articleByAnchor[to.hash]
  if (articleUrl) return navigateTo(articleUrl, { redirectCode: 301 })
})
