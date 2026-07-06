<script setup lang="ts">
useSeoMeta({
  title: 'Mentions Légales — Safia HDD Photographe',
  description: "Mentions légales du site Safia HDD, photographe de mariage à Mouscron.",
})
</script>

<template>
  <div class="ml">

    <!-- HERO -->
    <section class="ml-hero">
      <div class="ml-hero__content">
        <span class="ml-hero__eyebrow">Informations légales</span>
        <h1 class="ml-hero__title">Mentions Légales</h1>
      </div>
    </section>

    <!-- CONTENU -->
    <section class="ml-content">

      <div class="ml-block">
        <h2>1. Éditeur du site</h2>
        <p>
          Le présent site est édité par <strong>Safia Bihi (Hadidi)</strong>, exerçant son activité de
          photographe et formatrice sous le statut d'entrepreneure accompagnée au sein de la coopérative
          d'activités :<br><br>
          <strong>AZIMUT Entreprendre</strong> (ASBL)<br>
          Numéro d'entreprise : <strong>0455.025.614</strong><br>
          Adresse du siège : <strong>Rue de Monceau Fontaine 42, Boîte 2 — 6031 Charleroi, Belgique</strong><br><br>
          Contact pour toute question relative à l'activité de Safia HDD :<br>
          E-mail : <a href="mailto:safiamomentsdevie@gmail.com">safiamomentsdevie@gmail.com</a><br>
          Téléphone : <strong>[À COMPLÉTER]</strong>
        </p>
      </div>

      <div class="ml-block">
        <h2>2. Directeur de la publication</h2>
        <p>
          <strong>Safia Bihi (Hadidi)</strong>, en qualité de responsable de l'activité éditée sur le site.
        </p>
      </div>

      <div class="ml-block">
        <h2>3. Hébergement du site</h2>
        <p>
          Le site est hébergé par :<br>
          <strong>OVH SAS</strong><br>
          Adresse : 2 rue Kellermann, 59100 Roubaix, France<br>
          Site web : <a href="https://www.ovhcloud.com" target="_blank" rel="noopener">www.ovhcloud.com</a>
        </p>
      </div>

      <div class="ml-block">
        <h2>4. Conception et réalisation du site</h2>
        <p>
          Site conçu et développé par <a href="https://www.alerya.fr" target="_blank" rel="noopener">Alerya</a>.
        </p>
      </div>

      <div class="ml-block">
        <h2>5. Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, photographies, images, graphismes, logo) est la propriété
          exclusive de {{ ' ' }}<strong>Safia Bihi (Hadidi)</strong>, sauf mention contraire. Toute reproduction,
          représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable
          est interdite et pourra faire l'objet de poursuites.
        </p>
      </div>

      <div class="ml-block">
        <h2>6. Données personnelles</h2>
        <p>
          Les informations recueillies via le formulaire de contact sont destinées exclusivement à
          <strong>Safia Bihi (Hadidi)</strong> et servent uniquement à répondre à votre demande. Conformément au
          Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de
          rectification, de suppression et d'opposition concernant vos données personnelles. Vous pouvez exercer
          ce droit en écrivant à : <a href="mailto:safiamomentsdevie@gmail.com">safiamomentsdevie@gmail.com</a>.
        </p>
      </div>

      <div class="ml-block">
        <h2>7. Cookies</h2>
        <p>
          Ce site n'utilise aucun cookie de mesure d'audience, de publicité ciblée ou de traceur tiers.
          Aucune donnée de navigation n'est collectée à des fins de suivi.
        </p>
      </div>

      <div class="ml-block">
        <h2>8. Limitation de responsabilité</h2>
        <p>
          Safia HDD s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne saurait être
          tenue responsable des erreurs, omissions ou de l'indisponibilité temporaire des informations.
        </p>
      </div>

      <div class="ml-block">
        <h2>9. Droit applicable</h2>
        <p>
          Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à
          défaut de résolution amiable, les tribunaux compétents seront ceux du ressort du siège de l'éditeur.
        </p>
      </div>

      <p class="ml-updated">Dernière mise à jour : <strong>02/07/2026</strong></p>

    </section>

  </div>
</template>

<style scoped>
.ml-hero {
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 9rem 2rem 3rem;
  background: var(--cream-dark);
}

.ml-hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.ml-hero__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--text-light);
}

.ml-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  line-height: 1;
}

.ml-content {
  max-width: 780px;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
  background: var(--cream);
}

.ml-block {
  margin-bottom: 2.5rem;
}

.ml-block h2 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.75rem;
}

.ml-block p {
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.9;
}

.ml-block a {
  color: var(--accent-dark);
  border-bottom: 1px solid var(--accent);
}

.ml-block strong {
  color: var(--text);
  font-weight: 600;
}

.ml-updated {
  font-size: 0.75rem;
  color: var(--text-light);
  font-style: italic;
  margin-top: 3rem;
}
</style>