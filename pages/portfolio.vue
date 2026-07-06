<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio — Safia HDD Photographe',
  description: 'Découvrez mes reportages de mariages, couples, familles, grossesses et portraits.',
})

const featured = '/images/galery/mariage.jpg'

const mariagePhotos = [
  { src: '/images/galery/mariage1.jpg', tall: true },
  { src: '/images/galery/mariage2.jpg', tall: false },
  { src: '/images/galery/mariage3.JPG', tall: false },
  { src: '/images/galery/mariage4.JPG', tall: true },
  { src: '/images/galery/mariage5.JPG', tall: false },
  { src: '/images/galery/mariage6.jpg', tall: false },
  { src: '/images/galery/mariage6.JPG', tall: true },
  { src: '/images/galery/mariage7.jpg', tall: false },
  { src: '/images/galery/mariage8.jpg', tall: false },
  { src: '/images/galery/mariage9.jpg', tall: true },
  { src: '/images/galery/mariage10.jpg', tall: false },
  { src: '/images/galery/mariage11.jpg', tall: false },
  { src: '/images/galery/mariage12.jpg', tall: false },
]

const entrepreneurPhotos = [
  { src: '/images/galery/entrepreneur.jpg', tall: true },
  { src: '/images/galery/entrepreneur2.jpg', tall: false },
  { src: '/images/galery/entrepreneur3.jpg', tall: false },
  { src: '/images/galery/entrepreneur4.jpg', tall: true },
  { src: '/images/galery/entrepreneur5.jpg', tall: false },
  { src: '/images/galery/entrepreneur6.jpg', tall: false },
  { src: '/images/galery/entrepreneur7.jpg', tall: false },
  { src: '/images/galery/entrepreneur8.jpg', tall: true },
  { src: '/images/galery/entrepreneur9.jpg', tall: false },
  { src: '/images/galery/entrepreneur10.jpg', tall: false },
  { src: '/images/galery/entrepreneur12.jpg', tall: false },
  { src: '/images/galery/entrepreneur13.jpg', tall: false },
  { src: '/images/galery/entrepreneur14.jpg', tall: false },
  { src: '/images/galery/entrepreneur15.jpg', tall: true },
  { src: '/images/galery/entrepreneur16.jpg', tall: false },
]

// ══════════════════════════════════════
// LIGHTBOX
// ══════════════════════════════════════
type Photo = { src: string; tall: boolean }

const lightboxOpen = ref(false)
const currentGallery = ref<Photo[]>([])
const currentIndex = ref(0)

function openLightbox(gallery: Photo[], index: number) {
  currentGallery.value = gallery
  currentIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % currentGallery.value.length
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + currentGallery.value.length) % currentGallery.value.length
}

function onKeydown(e: KeyboardEvent) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

watch(lightboxOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <div class="portfolio">

    <!-- HERO -->
    <section class="pf-hero">
      <div class="pf-hero__content">
        <span class="pf-hero__eyebrow">Mes réalisations</span>
        <h1 class="pf-hero__title">Portfolio</h1>
        <p class="pf-hero__subtitle">Chaque image, une histoire à part entière.</p>
      </div>
    </section>

    <!-- À LA UNE -->
    <section class="pf-featured">
      <div class="pf-featured__arch">
        <img :src="featured" alt="Photo à la une - mariage" />
      </div>

      <div class="pf-featured__text">
        <span class="pf-featured__eyebrow">À la une</span>
        <h2 class="pf-featured__title">Mariages</h2>
        <p class="pf-featured__desc">
          Des instants volés, des regards complices,
          des émotions que les mots ne suffisent pas à décrire.
        </p>
        <NuxtLink to="/contact" class="pf-featured__btn">
          Réserver une séance →
        </NuxtLink>
      </div>
    </section>

    <!-- GALERIE MARIAGES -->
    <section class="pf-gallery">

      <div class="pf-gallery__header">
        <svg class="pf-gallery__floral" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
        <h2 class="pf-gallery__title">Mariages</h2>
        <svg class="pf-gallery__floral pf-gallery__floral--flip" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
      </div>

      <div class="pf-gallery__grid">
        <div
          v-for="(photo, i) in mariagePhotos"
          :key="'mariage-' + i"
          class="pf-item"
          :class="{ 'pf-item--tall': photo.tall }"
          @click="openLightbox(mariagePhotos, i)"
        >
          <img :src="photo.src" alt="Photographie de mariage" loading="lazy" />
        </div>
      </div>

    </section>

    <!-- GALERIE ENTREPRENEURS -->
    <section class="pf-gallery pf-gallery--alt">

      <div class="pf-gallery__header">
        <svg class="pf-gallery__floral" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
        <h2 class="pf-gallery__title">Portraits & Entrepreneurs</h2>
        <svg class="pf-gallery__floral pf-gallery__floral--flip" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
      </div>

      <div class="pf-gallery__grid">
        <div
          v-for="(photo, i) in entrepreneurPhotos"
          :key="'entrepreneur-' + i"
          class="pf-item"
          :class="{ 'pf-item--tall': photo.tall }"
          @click="openLightbox(entrepreneurPhotos, i)"
        >
          <img :src="photo.src" alt="Portrait professionnel entrepreneur" loading="lazy" />
        </div>
      </div>

    </section>

    <!-- CTA -->
    <section class="pf-cta">
      <p class="pf-cta__eyebrow">Votre histoire mérite d'être racontée</p>
      <h2 class="pf-cta__title">Réservons votre date</h2>
      <p class="pf-cta__subtitle">Vos instants. Votre histoire.</p>
      <NuxtLink to="/contact" class="pf-cta__btn">Me contacter →</NuxtLink>
    </section>

  </div>

  <!-- LIGHTBOX -->
  <Teleport to="body">
    <Transition name="lb-fade">
      <div v-if="lightboxOpen" class="lb-overlay" @click.self="closeLightbox">

        <button class="lb-close" @click="closeLightbox" aria-label="Fermer">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
        </button>

        <button
          v-if="currentGallery.length > 1"
          class="lb-nav lb-nav--prev"
          @click.stop="prevImage"
          aria-label="Image précédente"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 2L4 9L11 16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="lb-stage">
          <Transition name="lb-image" mode="out-in">
            <img
              :key="currentIndex"
              :src="currentGallery[currentIndex]?.src"
              class="lb-img"
              alt="Photographie en grand format"
            />
          </Transition>
          <p v-if="currentGallery.length > 1" class="lb-counter">
            {{ currentIndex + 1 }} / {{ currentGallery.length }}
          </p>
        </div>

        <button
          v-if="currentGallery.length > 1"
          class="lb-nav lb-nav--next"
          @click.stop="nextImage"
          aria-label="Image suivante"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 2L14 9L7 16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.pf-hero {
  min-height: 42vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 9rem 2rem 4rem;
  background-image: url('/images/bg-hero.png');
  background-size: cover;
  background-position: center;
}

.pf-hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.pf-hero__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--text-light);
}

.pf-hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  line-height: 1;
}

.pf-hero__subtitle {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  color: var(--accent-dark);
}

/* ══════════════════════════════════════
   À LA UNE
══════════════════════════════════════ */
.pf-featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
  padding: 1rem 1.5rem;
  background: var(--cream);
}

.pf-featured__arch {
  width: 100%;
  max-width: 460px;
  aspect-ratio: 3/4;
  border-radius: 50% 50% 0 0 / 18% 18% 0 0;
  overflow: hidden;
  justify-self: end;
}

.pf-featured__arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pf-featured__text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.pf-featured__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent-dark);
}

.pf-featured__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  line-height: 1;
}

.pf-featured__desc {
  font-size: 0.87rem;
  color: var(--text-light);
  line-height: 1.8;
  max-width: 32ch;
}

.pf-featured__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.85rem 1.6rem;
  background: var(--accent);
  color: var(--white);
  width: fit-content;
  font-family: var(--font-body);
  transition: background 0.2s;
  margin-top: 0.4rem;
}

.pf-featured__btn:hover { background: var(--accent-dark); }

/* ══════════════════════════════════════
   GALERIE
══════════════════════════════════════ */
.pf-gallery {
  padding: 5rem 3rem;
  background: var(--cream);
}

.pf-gallery--alt {
  background: var(--approche-cream);
}

.pf-gallery__header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.pf-gallery__title {
  font-family: var(--font-display);
  font-size: 0.72rem;
  letter-spacing: 0.38em;
  text-transform: uppercase;
  color: var(--text);
  font-weight: 400;
  white-space: nowrap;
}

.pf-gallery__floral {
  opacity: 0.55;
  flex-shrink: 0;
}

.pf-gallery__floral--flip {
  transform: scaleX(-1);
}

/* Grille */
.pf-gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  grid-auto-rows: 280px;
}

.pf-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.pf-item--tall {
  grid-row: span 2;
}

.pf-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}

.pf-item:hover img {
  transform: scale(1.04);
}

/* ══════════════════════════════════════
   CTA
══════════════════════════════════════ */
.pf-cta {
  background: var(--approche-cream);
  padding: 6rem 3rem;
  text-align: center;
}

.pf-cta__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 1rem;
}

.pf-cta__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  line-height: 1;
  margin-bottom: 0.75rem;
}

.pf-cta__subtitle {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  color: var(--accent-dark);
  margin-bottom: 2rem;
}

.pf-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.9rem 2rem;
  border: 1px solid var(--accent-dark);
  color: var(--text);
  font-family: var(--font-body);
  transition: background 0.2s, color 0.2s;
}

.pf-cta__btn:hover {
  background: var(--accent-dark);
  color: var(--white);
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .pf-hero { padding: 8rem 1.5rem 3rem; }

  .pf-featured {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem 1.5rem;
    text-align: center;
  }

  .pf-featured__arch {
    max-width: 260px;
    justify-self: center;
  }

  .pf-featured__text { align-items: center; }
  .pf-featured__desc { max-width: 100%; }

  .pf-gallery { padding: 3rem 1.5rem; }

  .pf-gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }

  .pf-cta { padding: 4rem 1.5rem; }
}

@media (max-width: 500px) {
  .pf-gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 160px;
    gap: 0.6rem;
  }

  .pf-gallery__header { gap: 0.75rem; }
  .pf-gallery__floral { display: none; }
}
</style>

<style>
/* ══════════════════════════════════════
   LIGHTBOX (non scoped : injecté via Teleport dans <body>)
══════════════════════════════════════ */
.lb-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(8, 14, 20, 0.94);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lb-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  max-width: 90vw;
  max-height: 90vh;
}

.lb-img {
  max-width: 88vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.55);
  display: block;
}

.lb-counter {
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
}

.lb-close {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.35s ease;
  z-index: 2;
}

.lb-close:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.55);
  transform: rotate(90deg);
}

.lb-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  z-index: 2;
}

.lb-nav:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.55);
}

.lb-nav--prev { left: 2rem; }
.lb-nav--prev:hover { transform: translateY(-50%) translateX(-4px); }

.lb-nav--next { right: 2rem; }
.lb-nav--next:hover { transform: translateY(-50%) translateX(4px); }

/* Transition du fond */
.lb-fade-enter-active,
.lb-fade-leave-active {
  transition: opacity 0.4s ease;
}
.lb-fade-enter-from,
.lb-fade-leave-to {
  opacity: 0;
}

/* Transition de l'image (fondu + léger zoom, effet "ultra élégant") */
.lb-image-enter-active {
  transition: opacity 0.4s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.lb-image-leave-active {
  transition: opacity 0.2s ease;
}
.lb-image-enter-from {
  opacity: 0;
  transform: scale(0.97);
}
.lb-image-leave-to {
  opacity: 0;
}

@media (max-width: 700px) {
  .lb-nav { width: 42px; height: 42px; }
  .lb-nav--prev { left: 0.6rem; }
  .lb-nav--next { right: 0.6rem; }
  .lb-close { top: 1rem; right: 1rem; }
  .lb-img { max-height: 70vh; }
}
</style>