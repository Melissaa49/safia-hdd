<script setup lang="ts">
const STORAGE_KEY = 'safia-cookie-consent'
const showBanner = ref(false)

function loadAnalytics() {
  if (!import.meta.client || document.getElementById('ga4-script')) return
  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-V1H3NE8D5X'
  document.head.appendChild(script)
  ;(window as any).dataLayer = (window as any).dataLayer || []
  const gtag = (...args: any[]) => (window as any).dataLayer.push(args)
  ;(window as any).gtag = gtag
  gtag('js', new Date())
  gtag('config', 'G-V1H3NE8D5X', { anonymize_ip: true })
}

function choose(value: 'accepted' | 'refused') {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: Date.now() }))
  showBanner.value = false
  if (value === 'accepted') loadAnalytics()
}

function openPreferences() {
  showBanner.value = true
}

onMounted(() => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return void (showBanner.value = true)
  try {
    const saved = JSON.parse(raw)
    const sixMonths = 1000 * 60 * 60 * 24 * 183
    if (!saved?.value || Date.now() - saved.at > sixMonths) {
      localStorage.removeItem(STORAGE_KEY)
      showBanner.value = true
    } else if (saved.value === 'accepted') loadAnalytics()
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    showBanner.value = true
  }
  window.addEventListener('safia:cookie-preferences', openPreferences)
})

onBeforeUnmount(() => {
  window.removeEventListener('safia:cookie-preferences', openPreferences)
})
</script>

<template>
  <Transition name="cookie">
    <aside v-if="showBanner" class="cookie-card" role="dialog" aria-modal="false" aria-labelledby="cookie-title">
      <div class="cookie-card__mark" aria-hidden="true">S</div>
      <div class="cookie-card__content">
        <p class="cookie-card__eyebrow">Votre expérience</p>
        <h2 id="cookie-title">Un peu de mesure, jamais sans votre accord.</h2>
        <p>Avec votre permission, Google Analytics nous aide à comprendre quelles pages sont consultées et à améliorer le site. Vous pouvez accepter, refuser ou changer d’avis à tout moment.</p>
        <NuxtLink to="/cookies" class="cookie-card__link">En savoir plus sur les cookies</NuxtLink>
      </div>
      <div class="cookie-card__actions">
        <button type="button" class="cookie-card__button" @click="choose('refused')">Refuser</button>
        <button type="button" class="cookie-card__button" @click="choose('accepted')">Accepter</button>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.cookie-card{position:fixed;z-index:1000;left:50%;bottom:22px;transform:translateX(-50%);width:min(920px,calc(100% - 32px));display:grid;grid-template-columns:58px 1fr auto;gap:18px;align-items:center;padding:18px 20px;background:rgba(249,246,241,.97);border:1px solid rgba(52,43,38,.14);box-shadow:0 18px 55px rgba(35,29,25,.16);backdrop-filter:blur(14px);color:#332b27}
.cookie-card__mark{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#332b27;color:#fff;font-family:"Playfair Display",serif;font-size:25px;font-style:italic}
.cookie-card__eyebrow{margin:0 0 3px;text-transform:uppercase;letter-spacing:.16em;font-size:10px;opacity:.58}
h2{margin:0 0 5px;font-family:"Playfair Display",serif;font-size:18px;font-weight:400}p{margin:0;font-size:12.5px;line-height:1.55;color:#665b55}.cookie-card__link{display:inline-block;margin-top:5px;color:inherit;font-size:11px;text-underline-offset:3px}
.cookie-card__actions{display:flex;gap:8px}.cookie-card__button{min-width:96px;padding:11px 16px;border:1px solid #4b403a;border-radius:999px;background:transparent;color:#332b27;font:500 12px Inter,sans-serif;cursor:pointer}.cookie-card__button:hover,.cookie-card__button:focus-visible{background:#332b27;color:#fff;outline:none}
.cookie-enter-active,.cookie-leave-active{transition:.25s ease}.cookie-enter-from,.cookie-leave-to{opacity:0;transform:translate(-50%,12px)}
@media(max-width:720px){.cookie-card{bottom:12px;grid-template-columns:42px 1fr;padding:15px;gap:11px}.cookie-card__mark{width:40px;height:40px;font-size:20px}.cookie-card__actions{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr}.cookie-card__button{width:100%}h2{font-size:16px}}
</style>
