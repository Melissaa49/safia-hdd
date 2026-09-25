<script setup lang="ts">
useSeoMeta({
  title: 'Politique de cookies — Safia Moments de Vie',
  description: 'Informations sur les cookies et la mesure d’audience utilisés sur le site Safia Moments de Vie.'
})
function manageCookies() {
  if (import.meta.client) window.dispatchEvent(new Event('safia:cookie-preferences'))
}
</script>

<template>
  <main class="cookies-page">
    <header class="cookies-hero">
      <p class="kicker">Transparence & confidentialité</p>
      <h1>Politique de cookies</h1>
      <p class="intro">Quelques informations simples pour comprendre ce qui peut être mesuré lorsque vous visitez Safia Moments de Vie, et garder le contrôle sur votre choix.</p>
    </header>
    <section class="cookies-content">
      <article>
        <span>01</span><div><h2>À quoi servent les cookies ?</h2><p>Certains traceurs permettent de mesurer la fréquentation du site et de comprendre, de manière globale, les pages qui intéressent le plus les visiteurs. Cette mesure nous aide à améliorer le contenu et l’expérience de navigation.</p></div>
      </article>
      <article>
        <span>02</span><div><h2>Google Analytics</h2><p>Le site utilise Google Analytics 4 (GA4), un service de mesure d’audience proposé par Google. Sur ce site, la balise de mesure n’est chargée qu’après votre accord via le bandeau de consentement.</p></div>
      </article>
      <article>
        <span>03</span><div><h2>Votre choix</h2><p>Vous pouvez accepter ou refuser la mesure d’audience avec la même facilité. Votre choix est mémorisé afin de ne pas vous solliciter à chaque visite et peut être modifié à tout moment.</p><button type="button" @click="manageCookies">Modifier mes préférences</button></div>
      </article>
      <article>
        <span>04</span><div><h2>Cookies nécessaires</h2><p>Le site peut conserver des informations strictement nécessaires à son fonctionnement, notamment votre choix concernant les cookies. Ce choix ne sert pas à vous suivre à des fins publicitaires.</p></div>
      </article>
      <article>
        <span>05</span><div><h2>En savoir plus</h2><p>Pour toute question concernant le site ou vos données, vous pouvez utiliser la page Contact. Cette politique pourra évoluer si les outils utilisés sur le site changent.</p></div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.cookies-page{min-height:80vh;background:#f8f5f0;color:#332b27;padding:150px 24px 100px}.cookies-hero,.cookies-content{width:min(900px,100%);margin:0 auto}.cookies-hero{padding-bottom:55px;border-bottom:1px solid rgba(51,43,39,.16)}.kicker{text-transform:uppercase;letter-spacing:.2em;font-size:11px;opacity:.6}.cookies-hero h1{font-family:"Playfair Display",serif;font-size:clamp(42px,7vw,76px);font-weight:400;margin:10px 0 18px}.intro{max-width:650px;font-size:16px;line-height:1.8;color:#6c6059}.cookies-content article{display:grid;grid-template-columns:54px 1fr;gap:22px;padding:34px 0;border-bottom:1px solid rgba(51,43,39,.12)}article>span{font-family:"Playfair Display",serif;font-style:italic;font-size:16px;opacity:.45}h2{font-family:"Playfair Display",serif;font-size:25px;font-weight:400;margin:0 0 10px}.cookies-content p{margin:0;max-width:720px;line-height:1.8;color:#6c6059}.cookies-content button{margin-top:18px;border:1px solid #433832;background:transparent;border-radius:999px;padding:12px 20px;color:#332b27;cursor:pointer}.cookies-content button:hover{background:#332b27;color:white}@media(max-width:600px){.cookies-page{padding:120px 20px 70px}.cookies-content article{grid-template-columns:36px 1fr;gap:10px}.cookies-hero h1{font-size:44px}}
</style>
