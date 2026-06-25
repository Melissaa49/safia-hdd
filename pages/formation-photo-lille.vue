<script setup lang="ts">
useSeoMeta({
  title: 'Formation Photo Lille & Paris — Apprendre la Photographie | Safia HDD',
  description: "Formation en ligne à la photographie avec Safia HDD, formatrice basée à Lille et Paris. Coaching personnalisé, visios en direct, progression garantie. Formules dès 199 €.",
  ogTitle: 'Formation Photo Lille & Paris — Safia HDD Formatrice',
  ogDescription: "Apprenez la photographie avec Safia, formatrice entre Lille et Paris. Coaching 100% en ligne, adapté à votre niveau, dès 199 €.",
  ogImage: '/images/polaroid2.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.safiamomentdevie.com/formation-photo-lille' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Safia Moments de Vie — Formation Photo',
        description: "Formation en ligne à la photographie, coaching personnalisé en visioconférence.",
        url: 'https://www.safiamomentdevie.com/formation-photo-lille',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lille',
          addressRegion: 'Hauts-de-France',
          addressCountry: 'FR',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Formations photo en ligne',
          itemListElement: [
            { '@type': 'Course', name: 'Glow Up Starter', description: '1 mois de suivi personnalisé', offers: { '@type': 'Offer', price: '199', priceCurrency: 'EUR' } },
            { '@type': 'Course', name: 'Glow Up Mentoring', description: '2 mois de suivi personnalisé', offers: { '@type': 'Offer', price: '497', priceCurrency: 'EUR' } },
            { '@type': 'Course', name: 'Glow Up Premium', description: '3 mois de suivi intensif', offers: { '@type': 'Offer', price: '1890', priceCurrency: 'EUR' } },
          ],
        },
      }),
    },
  ],
})

const faq = [
  {
    q: "La formation est-elle adaptée aux débutants complets ?",
    a: "Oui ! Les formules Glow Up Starter et Mentoring sont spécialement conçues pour les débutants. Nous partons de zéro et progressons à votre rythme.",
  },
  {
    q: "De quel matériel ai-je besoin pour commencer ?",
    a: "N'importe quel appareil photo reflex ou hybride suffit pour démarrer. Nous travaillerons avec votre matériel actuel et je vous conseillerai si vous souhaitez évoluer.",
  },
  {
    q: "Les séances se passent comment concrètement ?",
    a: "Nous nous retrouvons en visioconférence (Zoom ou Google Meet) pour des échanges en direct. Entre les sessions, vous réalisez des exercices pratiques que je commente par écrit ou en vidéo.",
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: "Oui, le paiement en 3 fois sans frais est disponible pour toutes les formules.",
  },
  {
    q: "La formation est-elle éligible au CPF ou à des aides ?",
    a: "Je vous invite à me contacter directement pour discuter des options de financement disponibles selon votre situation.",
  },
]
</script>

<template>
  <div class="seo-page">

    <section class="sp-hero">
      <div class="sp-hero__content">
        <span class="sp-hero__eyebrow">100% en ligne · Lille · Paris</span>
        <h1 class="sp-hero__title">Formation Photo<br>à Lille & Paris</h1>
        <p class="sp-hero__subtitle">Révèle ton regard de photographe.</p>
        <p class="sp-hero__desc">
          Safia HDD propose un coaching photo personnalisé en visioconférence,
          pour apprendre la photographie à ton rythme, quel que soit ton niveau.
          Basée entre Lille et Paris, disponible partout en France.
        </p>
        <div class="sp-hero__ctas">
          <NuxtLink to="/formation" class="sp-btn sp-btn--primary">Voir les formules →</NuxtLink>
          <NuxtLink to="/contact" class="sp-btn sp-btn--secondary">Réserver un appel gratuit</NuxtLink>
        </div>
      </div>
      <div class="sp-hero__image">
        <div class="sp-hero__arch">
          <img src="/images/polaroid2.jpg" alt="Formation photo Lille Paris - Safia HDD formatrice" />
        </div>
      </div>
    </section>

    <section class="sp-intro">
      <div class="sp-intro__inner">
        <svg class="sp-intro__floral" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
        <div class="sp-intro__text">
          <h2 class="sp-intro__title">Apprendre la photographie avec une professionnelle entre Lille et Paris</h2>
          <p>
            Photographe professionnelle depuis 6 ans, active entre Lille et Paris,
            Safia HDD partage son savoir-faire à travers des formations photo en ligne
            accessibles à tous. Les programmes Glow Up en Photo vous accompagnent de la
            prise en main de votre appareil jusqu'à la retouche Lightroom.
          </p>
          <p>
            Les formations se déroulent entièrement à distance, en visioconférence individuelle,
            avec des exercices pratiques personnalisés entre chaque session.
            La journée présentielle de la formule Premium peut avoir lieu à Lille ou à Paris.
          </p>
        </div>
        <svg class="sp-intro__floral sp-intro__floral--flip" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
      </div>
    </section>

    <section class="sp-stats">
      <div class="sp-stats__item">
        <span class="sp-stats__number">3</span>
        <span class="sp-stats__label">Formules disponibles</span>
      </div>
      <div class="sp-stats__divider" />
      <div class="sp-stats__item">
        <span class="sp-stats__number">100%</span>
        <span class="sp-stats__label">En ligne & personnalisé</span>
      </div>
      <div class="sp-stats__divider" />
      <div class="sp-stats__item">
        <span class="sp-stats__number">199€</span>
        <span class="sp-stats__label">Dès 199 € TVAC</span>
      </div>
    </section>

    <section class="sp-formules">
      <div class="sp-formules__header">
        <span class="sp-eyebrow">Programmes</span>
        <h2 class="sp-title">Les formules Glow Up en Photo</h2>
        <p class="sp-script">Choisissez le programme qui vous correspond.</p>
      </div>
      <div class="sp-formules__grid">
        <div class="sp-card">
          <span class="sp-card__tag">Glow Up Starter</span>
          <p class="sp-card__prix"><strong>199 €</strong> <span>TVAC · 1 mois</span></p>
          <ul class="sp-card__list">
            <li>1 visio mentoring d'1h avec Safia</li>
            <li>Exercices pratiques chaque semaine</li>
            <li>Retours détaillés sur tes photos</li>
          </ul>
          <NuxtLink to="/contact" class="sp-card__btn">Commencer →</NuxtLink>
        </div>
        <div class="sp-card sp-card--highlight">
          <span class="sp-card__badge">Le plus choisi</span>
          <span class="sp-card__tag">Glow Up Mentoring</span>
          <p class="sp-card__prix"><strong>497 €</strong> <span>TVAC · 2 mois</span></p>
          <ul class="sp-card__list">
            <li>2 visios mentoring d'1h avec Safia</li>
            <li>Exercices pratiques chaque semaine</li>
            <li>Accès à la plateforme de cours</li>
            <li>Communauté d'entraide</li>
            <li>Suivi personnalisé sur 2 mois</li>
          </ul>
          <NuxtLink to="/contact" class="sp-card__btn">Commencer →</NuxtLink>
        </div>
        <div class="sp-card">
          <span class="sp-card__tag">Glow Up Premium</span>
          <p class="sp-card__prix">à partir de <strong>1 890 €</strong> <span>TVAC · 3 mois</span></p>
          <ul class="sp-card__list">
            <li>1 journée présentiel à Lille ou Paris</li>
            <li>30 min de mentoring par semaine</li>
            <li>Suivi quotidien WhatsApp</li>
            <li>Retouche Lightroom incluse</li>
            <li>Comment trouver tes premiers clients</li>
          </ul>
          <NuxtLink to="/contact" class="sp-card__btn">Commencer →</NuxtLink>
        </div>
      </div>
      <p class="sp-formules__note">◯ &nbsp; Paiement en 3 fois sans frais disponible</p>
    </section>

    <section class="sp-why">
      <div class="sp-why__header">
        <span class="sp-eyebrow">Programme</span>
        <h2 class="sp-title">Ce que vous apprendrez</h2>
      </div>
      <div class="sp-why__grid">
        <div class="sp-why__item">
          <span class="sp-why__dot">◯</span>
          <div>
            <h3>Maîtrise de l'appareil photo</h3>
            <p>Réglages manuels, ouverture, vitesse, ISO — vous comprendrez enfin comment votre appareil fonctionne et pourquoi.</p>
          </div>
        </div>
        <div class="sp-why__item">
          <span class="sp-why__dot">◯</span>
          <div>
            <h3>Composition & cadrage</h3>
            <p>Les règles fondamentales de la composition pour des photos plus percutantes, plus équilibrées, plus vous.</p>
          </div>
        </div>
        <div class="sp-why__item">
          <span class="sp-why__dot">◯</span>
          <div>
            <h3>Retouche Lightroom</h3>
            <p>Post-traitement, colorimétrie, presets — donnez à vos photos le rendu que vous imaginez.</p>
          </div>
        </div>
        <div class="sp-why__item">
          <span class="sp-why__dot">◯</span>
          <div>
            <h3>Posture & regard artistique</h3>
            <p>Développez votre œil de photographe, votre sensibilité et la confiance pour photographier dans n'importe quelle situation.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sp-faq">
      <div class="sp-faq__header">
        <span class="sp-eyebrow">Questions fréquentes</span>
        <h2 class="sp-title">Tout savoir sur la formation</h2>
      </div>
      <div class="sp-faq__list">
        <details v-for="item in faq" :key="item.q" class="sp-faq__item">
          <summary class="sp-faq__question">{{ item.q }}</summary>
          <p class="sp-faq__answer">{{ item.a }}</p>
        </details>
      </div>
    </section>

    <section class="sp-cta">
      <p class="sp-cta__eyebrow">On commence quand tu veux ?</p>
      <h2 class="sp-cta__title">Rejoins la formation</h2>
      <p class="sp-cta__subtitle">Révèle ton regard de photographe.</p>
      <p class="sp-cta__desc">Premier appel découverte gratuit — sans engagement.</p>
      <NuxtLink to="/contact" class="sp-btn sp-btn--primary">Réserver un appel gratuit →</NuxtLink>
    </section>

  </div>
</template>

<style scoped>
.seo-page { background: var(--cream); }

.sp-hero { min-height: 90vh; display: grid; grid-template-columns: 1.1fr 1fr; align-items: center; padding: 8rem 8% 4rem; gap: 4rem; background-image: url('/images/bg-hero.png'); background-size: cover; background-position: center; }
.sp-hero__content { display: flex; flex-direction: column; gap: 1.4rem; }
.sp-hero__eyebrow { font-size: 0.62rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--text-light); }
.sp-hero__title { font-family: var(--font-display); font-size: clamp(2.8rem, 5vw, 5rem); font-weight: 700; text-transform: uppercase; color: var(--text); line-height: 1.05; }
.sp-hero__subtitle { font-family: var(--font-script); font-size: clamp(1.4rem, 2vw, 2rem); color: var(--accent-dark); }
.sp-hero__desc { font-size: 0.87rem; color: var(--text-light); line-height: 1.8; max-width: 40ch; }
.sp-hero__ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
.sp-hero__image { display: flex; justify-content: center; align-items: flex-end; height: 80vh; }
.sp-hero__arch { width: 88%; height: 100%; border-radius: 50% 50% 0 0 / 16% 16% 0 0; overflow: hidden; }
.sp-hero__arch img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }

.sp-btn { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.62rem; letter-spacing: 0.22em; text-transform: uppercase; padding: 0.9rem 1.8rem; font-family: var(--font-body); transition: background 0.2s, color 0.2s; }
.sp-btn--primary { background: var(--accent); color: var(--white); }
.sp-btn--primary:hover { background: var(--accent-dark); }
.sp-btn--secondary { border: 1px solid var(--accent-dark); color: var(--text); }
.sp-btn--secondary:hover { background: var(--accent-dark); color: var(--white); }

.sp-intro { padding: 4rem 3rem; background: var(--cream); border-bottom: 1px solid var(--cream-dark); }
.sp-intro__inner { display: flex; align-items: flex-start; gap: 2rem; max-width: 900px; margin: 0 auto; }
.sp-intro__floral { opacity: 0.5; flex-shrink: 0; margin-top: 0.5rem; }
.sp-intro__floral--flip { transform: scaleX(-1); }
.sp-intro__text { display: flex; flex-direction: column; gap: 1rem; }
.sp-intro__title { font-family: var(--font-display); font-size: clamp(1.3rem, 2.2vw, 1.8rem); font-weight: 700; color: var(--text); line-height: 1.2; }
.sp-intro__text p { font-size: 0.87rem; color: var(--text-light); line-height: 1.85; }

.sp-stats { background: var(--dark); display: flex; align-items: center; justify-content: center; padding: 3.5rem 8%; }
.sp-stats__item { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.4rem; text-align: center; padding: 1rem 2rem; }
.sp-stats__number { font-family: var(--font-display); font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 700; color: var(--white); line-height: 1; }
.sp-stats__label { font-size: 0.6rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); }
.sp-stats__divider { width: 1px; height: 50px; background: rgba(255,255,255,0.12); flex-shrink: 0; }

.sp-eyebrow { font-size: 0.62rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--accent-dark); display: block; margin-bottom: 0.5rem; }
.sp-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.6rem); font-weight: 700; color: var(--text); line-height: 1.1; margin-bottom: 0.5rem; }
.sp-script { font-family: var(--font-script); font-size: clamp(1.2rem, 1.8vw, 1.6rem); color: var(--accent-dark); }

.sp-formules { padding: 5rem 5%; background: var(--cream); }
.sp-formules__header { text-align: center; margin-bottom: 3rem; }
.sp-formules__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1000px; margin: 0 auto; align-items: start; }
.sp-formules__note { text-align: center; margin-top: 2rem; font-size: 0.7rem; color: var(--text-light); font-style: italic; letter-spacing: 0.12em; }

.sp-card { position: relative; background: var(--white); padding: 2rem 1.75rem; display: flex; flex-direction: column; gap: 1rem; border-top: 2px solid var(--cream-dark); box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.sp-card--highlight { border-top-color: var(--accent); }
.sp-card__badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--accent); color: var(--white); font-size: 0.52rem; letter-spacing: 0.2em; text-transform: uppercase; padding: 0.25rem 0.9rem; white-space: nowrap; font-family: var(--font-body); }
.sp-card__tag { font-size: 0.58rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--accent-dark); }
.sp-card__prix { font-size: 0.82rem; color: var(--text-light); }
.sp-card__prix strong { font-family: var(--font-display); font-size: 1.6rem; color: var(--text); font-weight: 700; }
.sp-card__prix span { font-size: 0.72rem; }
.sp-card__list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; flex: 1; }
.sp-card__list li { font-size: 0.8rem; color: var(--text-light); padding-left: 1rem; position: relative; line-height: 1.5; }
.sp-card__list li::before { content: '◯'; position: absolute; left: 0; font-size: 0.5rem; color: var(--accent); top: 3px; }
.sp-card__btn { display: block; text-align: center; font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; padding: 0.8rem; background: var(--accent); color: var(--white); font-family: var(--font-body); transition: background 0.2s; margin-top: 0.5rem; }
.sp-card__btn:hover { background: var(--accent-dark); }

.sp-why { padding: 5rem 8%; background: var(--approche-cream); }
.sp-why__header { margin-bottom: 3rem; }
.sp-why__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem 4rem; }
.sp-why__item { display: flex; gap: 1rem; align-items: flex-start; }
.sp-why__dot { color: var(--accent); font-size: 0.7rem; flex-shrink: 0; margin-top: 4px; }
.sp-why__item h3 { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 0.4rem; }
.sp-why__item p { font-size: 0.82rem; color: var(--text-light); line-height: 1.8; }

.sp-faq { padding: 5rem 8%; background: var(--cream); }
.sp-faq__header { margin-bottom: 2.5rem; }
.sp-faq__list { display: flex; flex-direction: column; max-width: 760px; }
.sp-faq__item { border-bottom: 1px solid var(--cream-dark); }
.sp-faq__question { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--text); padding: 1.25rem 0; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 1rem; transition: color 0.2s; }
.sp-faq__question::-webkit-details-marker { display: none; }
.sp-faq__question::after { content: '+'; font-size: 1.2rem; color: var(--accent); flex-shrink: 0; }
details[open] .sp-faq__question::after { content: '−'; }
.sp-faq__question:hover { color: var(--accent-dark); }
.sp-faq__answer { font-size: 0.84rem; color: var(--text-light); line-height: 1.85; padding: 0 0 1.5rem; }

/* ── CTA — fond crème ── */
.sp-cta {
  background: var(--cream);
  padding: 6rem 3rem;
  text-align: center;
  border-top: 1px solid var(--cream-dark);
}

.sp-cta__eyebrow { font-size: 0.62rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--accent-dark); margin-bottom: 1rem; display: block; }
.sp-cta__title { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 700; text-transform: uppercase; color: var(--text); line-height: 1; margin-bottom: 0.75rem; }
.sp-cta__subtitle { font-family: var(--font-script); font-size: clamp(1.3rem, 2vw, 1.8rem); color: var(--accent-dark); margin-bottom: 1rem; display: block; }
.sp-cta__desc { font-size: 0.85rem; color: var(--text-light); margin-bottom: 2rem; line-height: 1.7; }

@media (max-width: 900px) {
  .sp-hero { grid-template-columns: 1fr; padding: 7rem 1.5rem 3rem; min-height: auto; }
  .sp-hero__image { height: 60vw; min-height: 280px; order: -1; }
  .sp-hero__arch { border-radius: 50% 50% 0 0 / 22% 22% 0 0; }
  .sp-intro { padding: 3rem 1.5rem; }
  .sp-intro__inner { flex-direction: column; }
  .sp-intro__floral { display: none; }
  .sp-stats { flex-direction: column; gap: 2rem; padding: 3rem 1.5rem; }
  .sp-stats__divider { width: 60px; height: 1px; }
  .sp-formules { padding: 3rem 1.5rem; }
  .sp-formules__grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; }
  .sp-why { padding: 3rem 1.5rem; }
  .sp-why__grid { grid-template-columns: 1fr; gap: 2rem; }
  .sp-faq { padding: 3rem 1.5rem; }
  .sp-cta { padding: 4rem 1.5rem; }
}
</style>