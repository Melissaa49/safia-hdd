<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio — Safia HDD Photographe',
  description: 'Découvrez mes reportages de mariages, couples, familles, grossesses et portraits.',
})

const featured = '/images/polaroid1.jpg'

const photos = [
  { src: '/images/polaroid2.jpg', tall: true },
  { src: '/images/polaroid3.jpg', tall: false },
  { src: '/images/polaroid4.jpg', tall: false },
  { src: '/images/polaroid5.jpg', tall: true },
  { src: '/images/polaroid6.jpg', tall: false },
  { src: '/images/polaroid7.jpg', tall: false },
  { src: '/images/polaroid8.jpg', tall: false },
  { src: '/images/polaroid9.jpg', tall: true },
  { src: '/images/polaroid10.jpg', tall: false },
]
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
        <img :src="featured" alt="Photo à la une" />
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

    <!-- GALERIE -->
    <section class="pf-gallery">

      <div class="pf-gallery__header">
        <svg class="pf-gallery__floral" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
        <h2 class="pf-gallery__title">Explorer les collections</h2>
        <svg class="pf-gallery__floral pf-gallery__floral--flip" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
      </div>

      <div class="pf-gallery__grid">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          class="pf-item"
          :class="{ 'pf-item--tall': photo.tall }"
        >
          <img :src="photo.src" alt="Photographie de mariage" />
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