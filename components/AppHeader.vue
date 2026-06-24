<script setup lang="ts">
const nav = [
  { label: 'Accueil', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'À Propos', to: '/a-propos' },
  { label: 'Formation', to: '/formation' },
  { label: 'Tarif', to: '/tarif' },
  { label: 'Contact', to: '/contact' },
]

const menuOpen = ref(false)
const route = useRoute()

// Ferme le menu à chaque changement de page
watch(() => route.path, () => {
  menuOpen.value = false
})
</script>

<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo">
      <span class="header__logo-name">SAFIA HDD</span>
      <span class="header__logo-sub">Photographe</span>
    </NuxtLink>

    <nav>
      <ul class="header__nav">
        <li v-for="item in nav" :key="item.to">
          <NuxtLink :to="item.to" :class="{ active: route.path === item.to }">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <NuxtLink to="/contact" class="header__cta">Réserver</NuxtLink>

    <button class="header__menu-toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
      <span :class="{ open: menuOpen }" />
      <span :class="{ open: menuOpen }" />
      <span :class="{ open: menuOpen }" />
    </button>

    <!-- MENU MOBILE -->
    <div class="header__drawer" :class="{ open: menuOpen }">
      <ul class="header__drawer-nav">
        <li v-for="item in nav" :key="item.to">
          <NuxtLink :to="item.to" :class="{ active: route.path === item.to }">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/contact" class="header__drawer-cta">Réserver</NuxtLink>
    </div>

    <!-- OVERLAY -->
    <div class="header__overlay" :class="{ open: menuOpen }" @click="menuOpen = false" />
  </header>
</template>