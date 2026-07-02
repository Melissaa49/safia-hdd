<template>
  <footer class="footer">
    <div class="footer__inner">

      <div class="footer__brand">
        <p class="footer__name">Safia HDD</p>
        <p class="footer__sub">Photographe de mariage</p>
      </div>

      <div class="footer__info">
        <p>Lille, France</p>
        <p>6 ans d'expérience</p>
      </div>

      <div class="footer__legal">
        <p>© {{ new Date().getFullYear() }} Safia HDD — Tous droits réservés</p>
        <p>
          <NuxtLink to="/mentions-legales" class="footer__alerya">Mentions légales</NuxtLink>
        </p>
        <p>
          <NuxtLink to="/cgv" class="footer__alerya">CGV</NuxtLink>
        </p>
        <p>
          Site créé par
          <a href="https://www.alerya.fr" target="_blank" rel="noopener" class="footer__alerya">
            Alerya
          </a>
        </p>
      </div>

    </div>
  </footer>
</template>