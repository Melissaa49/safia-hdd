<script setup lang="ts">
useSeoMeta({
  title: 'Safia HDD — Photographe de mariage',
  description: 'Photographe de mariage en France. Des souvenirs sincères, des émotions vraies, immortalisées avec douceur et authenticité.',
})

const tabs = ['Mariages', 'Couples', 'Familles', 'Grossesses', 'Portraits', 'Éditorial']
const activeTab = ref('Mariages')

const heroImg = '/images/polaroid1.jpg'
const approchePolaroids = [
  '/images/polaroid4.jpg',
  '/images/polaroid2.jpg',
  '/images/polaroid9.jpg',
]
const galleryImgs = [
  '/images/polaroid3.jpg',
  '/images/polaroid5.jpg',
  '/images/polaroid6.jpg',
  '/images/polaroid8.jpg',
  '/images/polaroid11.jpg',
  '/images/polaroid10.jpg',
]
</script>

<template>
  <!-- HERO -->
  <section class="hero">
    <div class="hero__content">
      <span class="hero__eyebrow">Photographe de mariage</span>
      <h1 class="hero__title">Raconter<br>l'essentiel</h1>
      <p class="hero__subtitle">Vos instants. Votre histoire.</p>
      <p class="hero__desc">
        Des souvenirs sincères, des émotions vraies,
        immortalisées avec douceur et authenticité.
      </p>
      <NuxtLink to="/portfolio" class="hero__btn">
        Découvrir mon univers <span>→</span>
      </NuxtLink>
    </div>

    <div class="hero__image-wrap">
      <div class="hero__image-arch">
        <img :src="heroImg" alt="Photographie de mariage" />
      </div>
      <div class="hero__badge">
        <span class="hero__badge-initials">SH</span>
        Photographe<br>Storyteller
      </div>
    </div>
  </section>

  <!-- MON APPROCHE -->
  <section class="approche">
    <div class="approche__content">
      <h2 class="approche__heading">Mon approche</h2>
      <p class="approche__text">
        Discrète et bienveillante, j'immortalise les émotions vraies
        et les détails qui font toute la beauté de votre histoire.
      </p>
      <NuxtLink to="/a-propos" class="approche__link">
        En savoir plus →
      </NuxtLink>
    </div>

    <div class="approche__photos">
      <div v-for="(img, i) in approchePolaroids" :key="i" class="approche__photo">
        <img :src="img" :alt="'Photo mariage ' + (i + 1)" />
      </div>
    </div>

    <div class="approche__quote">
      <span class="approche__quote-mark">"</span>
      <p class="approche__quote-text">
        Ce que j'aime,<br>
        c'est figer l'instant<br>
        pour qu'il devienne<br>
        un souvenir pour toujours.
      </p>
      <span class="approche__quote-heart">♡</span>
    </div>
  </section>

  <!-- COLLECTIONS -->
  <section class="collections">
    <div class="collections__header">
      <h2 class="collections__title">Explorer les collections</h2>
      <ul class="collections__tabs">
        <li
          v-for="tab in tabs"
          :key="tab"
          class="collections__tab"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </li>
      </ul>
    </div>

    <div class="collections__grid">
      <div v-for="(img, i) in galleryImgs" :key="i" class="collections__item">
        <img :src="img" :alt="'Photo ' + activeTab + ' ' + (i + 1)" />
      </div>
    </div>

    <div class="collections__cta">
      <NuxtLink to="/portfolio">Voir tout le portfolio →</NuxtLink>
    </div>
  </section>
</template>