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