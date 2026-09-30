<template>
  <footer class="footer">
    <div class="footer__inner">

      <div class="footer__brand">
        <p class="footer__name">Safia Moments de Vie</p>
        <p class="footer__sub">Photographe de mariage</p>
      </div>

      <div class="footer__info">
        <p>Mouscron, Belgique</p>
        <p>6 ans d'expérience</p>
        <p>TVA : BE0455025614</p>
      </div>

      <nav class="footer__seo" aria-label="Photographe et prestations à Mouscron">
        <p class="footer__seo-title">Photographe à Mouscron</p>
        <NuxtLink to="/photographe-mouscron">Photographe à Mouscron</NuxtLink>
        <NuxtLink to="/brand-shooting-mouscron">Brand shooting à Mouscron</NuxtLink>
        <NuxtLink to="/formation-photo-mouscron">Formation photo à Mouscron</NuxtLink>
        <NuxtLink to="/shooting-photo-glow-up-mouscron">Séances photo à Mouscron</NuxtLink>
      </nav>

      <div class="footer__legal">
        <p>© {{ new Date().getFullYear() }} Safia Moments de Vie — Tous droits réservés</p>
        <p>
          <NuxtLink to="/mentions-legales" class="footer__alerya">
            Mentions légales
          </NuxtLink>
        </p>
        <p>
          <NuxtLink to="/cgv" class="footer__alerya">
            CGV
          </NuxtLink>
        </p>
        <p>
          <NuxtLink to="/cookies" class="footer__alerya">
            Cookies
          </NuxtLink>
        </p>
        <p>
          Site créé par
          <a
            href="https://www.alerya.fr"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__alerya"
          >
            Alerya
          </a>
        </p>
      </div>

    </div>
  </footer>
</template>
<style scoped>
.footer__seo{display:flex;flex-direction:column;gap:.65rem;align-items:flex-start}
.footer__seo-title{font-weight:600;margin:0 0 .35rem}
.footer__seo a{color:inherit;text-decoration:none;font-size:.85rem;line-height:1.5}
.footer__seo a:hover,.footer__seo a:focus-visible{text-decoration:underline;text-underline-offset:4px}
</style>
