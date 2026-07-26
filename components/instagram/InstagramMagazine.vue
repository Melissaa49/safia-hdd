<script setup lang="ts">
import SafiaMagazinePage from './SafiaMagazinePage.vue'
import type { SpreadPage } from './SafiaMagazinePage.vue'

interface Post {
  src: string
  caption: string
  date: string
  likes: number
  link: string
}

// ── Posts statiques affichés immédiatement ─────────────────────────────
const STATIC_POSTS: Post[] = [
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

const posts = ref<Post[]>(STATIC_POSTS)

onMounted(async () => {
  try {
    const data = await $fetch<Post[]>('/api/instagram')
    if (Array.isArray(data) && data.length > 0) posts.value = data
  } catch { /* garde les posts statiques */ }
})

// ── Construction des spreads : 1 publication par page ─────────────────
function buildSpreads(p: Post[]): { left: SpreadPage; right: SpreadPage }[] {
  if (p.length === 0) return []
  const result: { left: SpreadPage; right: SpreadPage }[] = []

  // Spread 0 : couverture + 1er post
  result.push({ left: { type: 'cover' }, right: { type: 'large', post: p[0] } })

  // Spreads suivants : 2 posts par spread (gauche + droite)
  let i = 1
  while (i < p.length) {
    const a = p[i]
    const b = i + 1 < p.length ? p[i + 1] : undefined
    if (!a) break
    result.push({
      left:  { type: 'large', post: a },
      right: b ? { type: 'large', post: b } : { type: 'back' },
    })
    i += b ? 2 : 1
  }

  // Page de fin si pas déjà 'back'
  const last = result[result.length - 1]
  if (last && last.right.type !== 'back') {
    last.right = { type: 'back' }
  }
  return result
}

const spreads = computed(() => buildSpreads(posts.value))

// ── Toutes les pages à plat (pour le mode page unique mobile) ──────────
const allPages = computed<SpreadPage[]>(() =>
  spreads.value.flatMap(s => [s.left, s.right])
)

// ── State ──────────────────────────────────────────────────────────────
const spread      = ref(0)
const animState   = ref<{ dir: 'next' | 'prev'; from: number; to: number; active: boolean } | null>(null)
const mobilePage  = ref(0)  // index dans allPages pour le mode mobile
const bookScale   = ref(1)  // facteur d'échelle du livre
const isMobile    = ref(false) // < 480px → page unique, pas de flip

watch(posts, () => { spread.value = 0; animState.value = null; mobilePage.value = 0 })

// ── Calcul de l'échelle responsive ────────────────────────────────────
const BOOK_W = 680
const BOOK_H = 460

function computeScale() {
  const avail = Math.min(window.innerWidth - 32, BOOK_W) // 16px padding × 2
  bookScale.value = Math.round((avail / BOOK_W) * 1000) / 1000
  isMobile.value = window.innerWidth < 640
}

// ── Pages à afficher selon l'état d'animation ──────────────────────────
const FB: SpreadPage = { type: 'cover' }
const BB: SpreadPage = { type: 'back' }

const bgLeft = computed<SpreadPage>(() => {
  const s = spreads.value; if (!s.length) return FB
  if (!animState.value) return s[spread.value]?.left ?? FB
  return animState.value.dir === 'next' ? (s[animState.value.from]?.left ?? FB) : (s[animState.value.to]?.left ?? FB)
})
const bgRight = computed<SpreadPage>(() => {
  const s = spreads.value; if (!s.length) return BB
  if (!animState.value) return s[spread.value]?.right ?? BB
  return animState.value.dir === 'next' ? (s[animState.value.to]?.right ?? BB) : (s[animState.value.from]?.right ?? BB)
})
const flipFront = computed<SpreadPage | null>(() => {
  const s = spreads.value; if (!animState.value || !s.length) return null
  const sp = s[animState.value.from]
  return animState.value.dir === 'next' ? (sp?.right ?? null) : (sp?.left ?? null)
})
const flipBack = computed<SpreadPage | null>(() => {
  const s = spreads.value; if (!animState.value || !s.length) return null
  const sp = s[animState.value.to]
  return animState.value.dir === 'next' ? (sp?.left ?? null) : (sp?.right ?? null)
})
const flipOnRight   = computed(() => animState.value?.dir === 'next')
const flipTransform = computed(() => {
  if (!animState.value?.active) return 'rotateY(0deg)'
  return animState.value.dir === 'next' ? 'rotateY(-180deg)' : 'rotateY(180deg)'
})
const flipOrigin = computed(() => flipOnRight.value ? 'left center' : 'right center')

// ── Styles du livre scalable ───────────────────────────────────────────
const bookWrapStyle = computed(() => ({
  height: `${Math.round(BOOK_H * bookScale.value)}px`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
}))
const bookStyle = computed(() => ({
  width: `${BOOK_W}px`,
  height: `${BOOK_H}px`,
  transform: `scale(${bookScale.value})`,
  transformOrigin: 'top center',
  flexShrink: '0',
}))

// ── Navigation double page ─────────────────────────────────────────────
function goNext() {
  if (animState.value || spread.value >= spreads.value.length - 1) return
  const from = spread.value, to = from + 1
  animState.value = { dir: 'next', from, to, active: false }
  nextTick(() => requestAnimationFrame(() => requestAnimationFrame(() => {
    if (animState.value) animState.value.active = true
    setTimeout(() => { spread.value = to; animState.value = null }, 800)
  })))
}
function goPrev() {
  if (animState.value || spread.value <= 0) return
  const from = spread.value, to = from - 1
  animState.value = { dir: 'prev', from, to, active: false }
  nextTick(() => requestAnimationFrame(() => requestAnimationFrame(() => {
    if (animState.value) animState.value.active = true
    setTimeout(() => { spread.value = to; animState.value = null }, 800)
  })))
}

// ── Navigation page unique (mobile) ───────────────────────────────────
const currentMobilePage = computed<SpreadPage>(() => allPages.value[mobilePage.value] ?? FB)
function mobileNext() { if (mobilePage.value < allPages.value.length - 1) mobilePage.value++ }
function mobilePrev() { if (mobilePage.value > 0) mobilePage.value-- }

function onKeydown(e: KeyboardEvent) {
  if (isMobile.value) {
    if (e.key === 'ArrowRight') mobileNext()
    if (e.key === 'ArrowLeft')  mobilePrev()
  } else {
    if (e.key === 'ArrowRight') goNext()
    if (e.key === 'ArrowLeft')  goPrev()
  }
}

onMounted(() => {
  computeScale()
  window.addEventListener('resize',  computeScale)
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('resize',  computeScale)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <section class="igm" aria-label="Dernières publications Instagram">

    <!-- ── En-tête ──────────────────────────────── -->
    <header class="igm__header">
      <svg width="22" height="56" viewBox="0 0 22 56" fill="none" class="igm__floral" aria-hidden="true">
        <path d="M11 56 C11 40 5 32 7 20 C9 10 6 2 11 0" stroke="#c4a898" stroke-width="0.9" fill="none"/>
        <circle cx="6"  cy="20" r="1.1" stroke="#c4a898" stroke-width="0.7" fill="none"/>
        <circle cx="12" cy="30" r="0.9" stroke="#c4a898" stroke-width="0.7" fill="none"/>
        <circle cx="6"  cy="38" r="1"   stroke="#c4a898" stroke-width="0.7" fill="none"/>
      </svg>
      <div class="igm__header-text">
        <span class="igm__eyebrow">Sur Instagram</span>
        <h2 class="igm__title">Dernières <em class="igm__script">publications</em></h2>
      </div>
      <svg width="22" height="56" viewBox="0 0 22 56" fill="none" class="igm__floral igm__floral--flip" aria-hidden="true">
        <path d="M11 56 C11 40 5 32 7 20 C9 10 6 2 11 0" stroke="#c4a898" stroke-width="0.9" fill="none"/>
        <circle cx="6"  cy="20" r="1.1" stroke="#c4a898" stroke-width="0.7" fill="none"/>
        <circle cx="12" cy="30" r="0.9" stroke="#c4a898" stroke-width="0.7" fill="none"/>
        <circle cx="6"  cy="38" r="1"   stroke="#c4a898" stroke-width="0.7" fill="none"/>
      </svg>
    </header>

    <!-- ── Magazine double page (> 480px) ─────────── -->
    <div v-if="!isMobile" class="igm__book-outer">
      <div :style="bookWrapStyle">
        <div class="igm__book" :style="bookStyle">
          <div class="igm__slot igm__slot--left">  <SafiaMagazinePage :page="bgLeft" /></div>
          <div class="igm__slot igm__slot--right"> <SafiaMagazinePage :page="bgRight" /></div>
          <div class="igm__spine" aria-hidden="true"></div>

          <template v-if="animState && flipFront && flipBack">
            <div class="igm__flip-wrap" :class="flipOnRight ? 'igm__flip-wrap--right' : 'igm__flip-wrap--left'">
              <div class="igm__flip-leaf" :style="{ transform: flipTransform, transformOrigin: flipOrigin }">
                <div class="igm__flip-face igm__flip-face--front"><SafiaMagazinePage :page="flipFront" /></div>
                <div class="igm__flip-face igm__flip-face--back"> <SafiaMagazinePage :page="flipBack" /></div>
              </div>
            </div>
          </template>

          <button v-if="spread > 0 && !animState"
            class="igm__click-zone igm__click-zone--left" @click="goPrev" aria-label="Page précédente" />
          <button v-if="spread < spreads.length - 1 && !animState"
            class="igm__click-zone igm__click-zone--right" @click="goNext" aria-label="Page suivante" />
        </div>
      </div>

      <nav class="igm__nav" aria-label="Navigation magazine">
        <button class="igm__nav-btn" :disabled="spread === 0 || !!animState" @click="goPrev">← Précédent</button>
        <div class="igm__dots">
          <span v-for="(_, i) in spreads" :key="i" class="igm__dot" :class="{ 'igm__dot--active': i === spread }" />
        </div>
        <button class="igm__nav-btn" :class="{ 'igm__nav-btn--active': spread < spreads.length - 1 && !animState }"
          :disabled="spread === spreads.length - 1 || !!animState" @click="goNext">Suivant →</button>
      </nav>
      <p class="igm__hint">Cliquez sur les pages ou utilisez ← →</p>
    </div>

    <!-- ── Magazine page unique (< 480px) ──────────── -->
    <div v-else class="igm__single">
      <div class="igm__single-page">
        <SafiaMagazinePage :page="currentMobilePage" />
      </div>
      <nav class="igm__single-nav">
        <button class="igm__nav-btn" :disabled="mobilePage === 0" @click="mobilePrev">←</button>
        <span class="igm__single-counter">{{ mobilePage + 1 }} / {{ allPages.length }}</span>
        <button class="igm__nav-btn igm__nav-btn--active" :disabled="mobilePage >= allPages.length - 1" @click="mobileNext">→</button>
      </nav>
    </div>

    <!-- ── Lien Instagram ─────────────────────────── -->
    <div class="igm__ig-link">
      <a href="https://www.instagram.com/safia.moments.de.vie" target="_blank" rel="noopener noreferrer" class="igm__ig-btn">
        <svg viewBox="0 0 24 24" fill="none" width="15" height="15" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.3"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
        </svg>
        Me suivre sur Instagram
      </a>
    </div>

  </section>
</template>

<style scoped>
.igm { padding: 5rem 1rem; background: var(--approche-cream, #e8d0be); }

.igm__header { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 2.5rem; }
.igm__header-text { text-align: center; display: flex; flex-direction: column; gap: 0.35rem; }
.igm__floral { opacity: 0.55; flex-shrink: 0; }
.igm__floral--flip { transform: scaleX(-1); }
.igm__eyebrow { font-size: 0.58rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--accent-dark, #a8897a); }
.igm__title { font-family: var(--font-display, 'Playfair Display', serif); font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 700; text-transform: uppercase; color: var(--text, #1a1612); line-height: 1; letter-spacing: 0.04em; }
.igm__script { font-family: var(--font-script, 'Great Vibes', cursive); font-size: 1.3em; text-transform: none; font-weight: 400; font-style: normal; color: var(--accent-dark, #a8897a); letter-spacing: 0; }

/* ── Livre double page ──────────────────────────── */
.igm__book-outer { display: flex; flex-direction: column; align-items: center; }

.igm__book {
  position: relative;
  box-shadow:
    0 2px 4px rgba(30,22,18,.08),
    0 8px 24px rgba(30,22,18,.14),
    0 32px 64px rgba(30,22,18,.22),
    0 64px 100px rgba(30,22,18,.1);
  border-radius: 1px;
  /* Légère bordure autour du livre */
  outline: 1px solid rgba(184, 152, 128, 0.18);
}

.igm__slot { position: absolute; top: 0; width: 50%; height: 100%; overflow: hidden; }
.igm__slot--left { left: 0; }
.igm__slot--right { left: 50%; }

.igm__spine { position: absolute; left: calc(50% - 1px); top: 0; width: 2px; height: 100%; background: linear-gradient(to right, #b89880, #e8c9ae, #b89880); z-index: 20; pointer-events: none; }

.igm__flip-wrap { position: absolute; top: 0; width: 50%; height: 100%; perspective: 2000px; z-index: 10; }
.igm__flip-wrap--right { left: 50%; }
.igm__flip-wrap--left  { left: 0; }
.igm__flip-leaf { width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.78s cubic-bezier(0.645, 0.045, 0.355, 1); }
.igm__flip-face { position: absolute; inset: 0; backface-visibility: hidden; overflow: hidden; }
.igm__flip-face--back { transform: rotateY(180deg); }

.igm__click-zone { position: absolute; top: 0; width: 40%; height: 100%; background: transparent; border: none; z-index: 5; }
.igm__click-zone--left  { left: 0; cursor: w-resize; }
.igm__click-zone--right { right: 0; cursor: e-resize; }

/* ── Navigation ─────────────────────────────────── */
.igm__nav { display: flex; align-items: center; gap: 16px; margin-top: 20px; flex-wrap: wrap; justify-content: center; }
.igm__nav-btn { background: none; border: 1px solid var(--accent, #c4a898); color: var(--accent-dark, #a8897a); padding: 8px 18px; font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; font-family: var(--font-body, 'Inter', sans-serif); transition: background 0.2s, color 0.2s; }
.igm__nav-btn:hover:not(:disabled) { background: var(--accent-dark, #a8897a); color: var(--white, #fff); }
.igm__nav-btn:disabled { border-color: #ccc; color: #bbb; cursor: default; }
.igm__nav-btn--active { background: var(--accent, #c4a898); color: var(--white, #fff); }
.igm__nav-btn--active:hover:not(:disabled) { background: var(--accent-dark, #a8897a); }

.igm__dots { display: flex; gap: 7px; flex-wrap: wrap; justify-content: center; }
.igm__dot { width: 6px; height: 6px; border-radius: 50%; background: #cbb8ac; transition: background 0.3s; }
.igm__dot--active { background: var(--accent-dark, #a8897a); }
.igm__hint { margin-top: 8px; font-size: 0.55rem; color: var(--text-light, #6b5c52); letter-spacing: 0.1em; opacity: 0.7; }

/* ── Mode page unique (mobile < 480px) ────────────── */
.igm__single { display: flex; flex-direction: column; align-items: center; gap: 16px; }

.igm__single-page {
  width: min(360px, calc(100vw - 2rem));
  height: calc(min(360px, calc(100vw - 2rem)) * 1.35);
  box-shadow:
    0 2px 4px rgba(30,22,18,.08),
    0 8px 20px rgba(30,22,18,.16),
    0 24px 48px rgba(30,22,18,.2);
  overflow: hidden;
  border-radius: 1px;
  outline: 1px solid rgba(184, 152, 128, 0.15);
}

.igm__single-nav { display: flex; align-items: center; gap: 16px; }
.igm__single-counter { font-size: 0.62rem; color: var(--text-light, #6b5c52); letter-spacing: 0.1em; min-width: 50px; text-align: center; }

/* ── Lien Instagram ─────────────────────────────── */
.igm__ig-link { display: flex; justify-content: center; margin-top: 2rem; }
.igm__ig-btn { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; padding: 0.85rem 1.6rem; border: 1px solid var(--accent-dark, #a8897a); color: var(--text, #1a1612); font-family: var(--font-body, 'Inter', sans-serif); transition: background 0.2s, color 0.2s; }
.igm__ig-btn:hover { background: var(--accent-dark, #a8897a); color: var(--white, #fff); }

@media (max-width: 600px) { .igm { padding: 3rem 1rem; } .igm__floral { display: none; } }
</style>