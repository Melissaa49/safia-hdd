<script setup lang="ts">
useSeoMeta({
  title: 'Shooting Photo Glow Up Lille & Paris — Séance Photo Personnalisée | Safia HDD',
  description: "Séance photo Glow Up à Lille et Paris avec Safia HDD. Shooting portrait, couple ou lifestyle personnalisé pour révéler votre meilleure version. Réservez en ligne.",
  ogTitle: 'Shooting Photo Glow Up Lille & Paris — Safia HDD',
  ogDescription: "Séance photo personnalisée à Lille et Paris. Shooting portrait, couple ou lifestyle avec Safia HDD. Révélez votre meilleure version.",
  ogImage: '/images/polaroid3.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.safiamomentdevie.com/shooting-photo-glow-up-lille' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shooting Photo Glow Up Lille & Paris',
        description: "Séance photo portrait, couple et lifestyle personnalisée à Lille et Paris avec Safia HDD.",
        provider: {
          '@type': 'LocalBusiness',
          name: 'Safia Moments de Vie — Photographe',
          url: 'https://www.safiamomentdevie.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lille',
            addressRegion: 'Hauts-de-France',
            addressCountry: 'FR',
          },
        },
        areaServed: [
          { '@type': 'City', name: 'Lille' },
          { '@type': 'City', name: 'Paris' },
          { '@type': 'City', name: 'Arras' },
          { '@type': 'City', name: 'Amiens' },
          { '@type': 'City', name: 'Lens' },
          { '@type': 'City', name: 'Douai' },
          { '@type': 'City', name: 'Compiègne' },
        ],
        offers: {
          '@type': 'Offer',
          description: 'Séance photo personnalisée sur devis',
          priceCurrency: 'EUR',
        },
      }),
    },
  ],
})

const faq = [
  {
    q: "Où se déroule le shooting Glow Up ?",
    a: "Je réalise des shootings à Lille (Vieux-Lille, parc de la Citadelle, bords de la Deûle) et à Paris (bois de Boulogne, Marais, bords de Seine), ainsi que sur tout l'axe entre les deux villes.",
  },
  {
    q: "Combien de temps dure la séance ?",
    a: "Les séances durent en général entre 1h30 et 3h selon la formule, le nombre de tenues et les lieux souhaités. Tout est défini en amont lors d'un échange préparatoire.",
  },
  {
    q: "Comment me préparer à ma séance photo ?",
    a: "Je vous envoie un guide de préparation complet après réservation : conseils vestimentaires, poses, idées de lieux. Nous faisons également un appel préparatoire pour que vous arriviez serein(e).",
  },
  {
    q: "Quand vais-je recevoir mes photos ?",
    a: "Votre galerie retouchée vous est livrée sous 3 à 4 semaines via un lien privé. Vous pouvez télécharger toutes les images en haute résolution.",
  },
  {
    q: "Intervenez-vous entre Lille et Paris ?",
    a: "Oui, j'interviens sur tout l'axe Lille–Paris : Arras, Lens, Douai, Amiens, Compiègne et les alentours. Contactez-moi pour un devis incluant les frais de déplacement.",
  },
]

const prestations = [
  {
    titre: 'Shooting portrait',
    desc: "Révélez votre personnalité à travers un shooting portrait soigné — pour vos réseaux, votre profil pro ou simplement pour vous.",
    img: '/images/polaroid5.jpg',
  },
  {
    titre: 'Shooting couple',
    desc: "Une séance photo en amoureux pour capturer votre complicité, votre regard à deux, vos instants partagés.",
    img: '/images/polaroid6.jpg',
  },
  {
    titre: 'Shooting lifestyle',
    desc: "Un reportage dans votre quotidien, votre univers — pour des images authentiques qui vous ressemblent vraiment.",
    img: '/images/polaroid7.jpg',
  },
]
</script>

<template>
  <div class="seo-page">

    <section class="sp-hero">
      <div class="sp-hero__content">
        <span class="sp-hero__eyebrow">Lille · Paris · Arras · Amiens · Compiègne</span>
        <h1 class="sp-hero__title">Shooting Photo<br>Glow Up<br>Lille & Paris</h1>
        <p class="sp-hero__subtitle">Révélez votre meilleure version.</p>
        <p class="sp-hero__desc">
          Safia HDD réalise des séances photo personnalisées à Lille, Paris
          et sur tout l'axe entre les deux villes — portrait, couple, lifestyle.
          Des images sincères qui vous ressemblent.
        </p>
        <div class="sp-hero__ctas">
          <NuxtLink to="/contact" class="sp-btn sp-btn--primary">Réserver ma séance →</NuxtLink>
          <NuxtLink to="/portfolio" class="sp-btn sp-btn--secondary">Voir les réalisations</NuxtLink>
        </div>
      </div>
      <div class="sp-hero__image">
        <div class="sp-hero__arch">
          <img src="/images/polaroid3.jpg" alt="Shooting photo Glow Up Lille Paris - Safia HDD" />
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
          <h2 class="sp-intro__title">Séances photo Glow Up à Lille, Paris et entre les deux</h2>
          <p>
            Le shooting Glow Up est bien plus qu'une simple séance photo.
            C'est une expérience pensée pour vous mettre en valeur avec authenticité —
            dans un cadre qui vous correspond, avec des images qui racontent qui vous êtes.
          </p>
          <p>
            Photographe professionnelle active entre Lille et Paris depuis 6 ans, Safia HDD
            vous accompagne de la préparation jusqu'à la livraison de votre galerie.
            Arras, Lens, Douai, Amiens, Compiègne — je me déplace sur tout le corridor nord-parisien.
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
        <span class="sp-stats__number">6</span>
        <span class="sp-stats__label">Ans de pratique</span>
      </div>
      <div class="sp-stats__divider" />
      <div class="sp-stats__item">
        <span class="sp-stats__number">Lille<br>& Paris</span>
        <span class="sp-stats__label">& tout l'axe</span>
      </div>
      <div class="sp-stats__divider" />
      <div class="sp-stats__item">
        <span class="sp-stats__number">Sur<br>devis</span>
        <span class="sp-stats__label">Tarif personnalisé</span>
      </div>
    </section>

    <section class="sp-prestations">
      <div class="sp-prestations__header">
        <span class="sp-eyebrow">Mes séances</span>
        <h2 class="sp-title">Les shootings Glow Up disponibles</h2>
        <p class="sp-script">Choisissez votre expérience photo.</p>
      </div>
      <div class="sp-prestations__grid">
        <div v-for="p in prestations" :key="p.titre" class="sp-pres-card">
          <div class="sp-pres-card__arch">
            <img :src="p.img" :alt="p.titre + ' Lille Paris - Safia HDD'" />
          </div>
          <div class="sp-pres-card__body">
            <h3 class="sp-pres-card__titre">{{ p.titre }}</h3>
            <p class="sp-pres-card__desc">{{ p.desc }}</p>
            <NuxtLink to="/contact" class="sp-pres-card__btn">En savoir plus →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="sp-why">
      <div class="sp-why__header">
        <span class="sp-eyebrow">Déroulement</span>
        <h2 class="sp-title">Comment se passe votre shooting Glow Up</h2>
      </div>
      <div class="sp-why__grid sp-why__grid--4">
        <div class="sp-why__item">
          <span class="sp-why__num">01</span>
          <div>
            <h3>Échange préparatoire</h3>
            <p>Nous discutons de vos attentes, de votre style, du lieu et des tenues. Je vous envoie un guide de préparation complet.</p>
          </div>
        </div>
        <div class="sp-why__item">
          <span class="sp-why__num">02</span>
          <div>
            <h3>Le jour du shooting</h3>
            <p>Détente et bonne humeur au rendez-vous. Je vous guide naturellement pour des poses qui vous ressemblent.</p>
          </div>
        </div>
        <div class="sp-why__item">
          <span class="sp-why__num">03</span>
          <div>
            <h3>Retouche soignée</h3>
            <p>Chaque photo est retouchée avec soin — lumière, couleurs, détails — pour un rendu lumineux et épuré.</p>
          </div>
        </div>
        <div class="sp-why__item">
          <span class="sp-why__num">04</span>
          <div>
            <h3>Livraison galerie privée</h3>
            <p>Votre galerie haute résolution est disponible sous 3 à 4 semaines via un lien privé sécurisé.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sp-faq">
      <div class="sp-faq__header">
        <span class="sp-eyebrow">Questions fréquentes</span>
        <h2 class="sp-title">Tout savoir sur le shooting Glow Up</h2>
      </div>
      <div class="sp-faq__list">
        <details v-for="item in faq" :key="item.q" class="sp-faq__item">
          <summary class="sp-faq__question">{{ item.q }}</summary>
          <p class="sp-faq__answer">{{ item.a }}</p>
        </details>
      </div>
    </section>

    <section class="sp-cta">
      <p class="sp-cta__eyebrow">Shooting photo à Lille & Paris</p>
      <h2 class="sp-cta__title">Réservons votre séance</h2>
      <p class="sp-cta__subtitle">Votre meilleure version vous attend.</p>
      <p class="sp-cta__desc">Devis gratuit — réponse sous 48h.</p>
      <NuxtLink to="/contact" class="sp-btn sp-btn--primary">Demander un devis →</NuxtLink>
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
.sp-stats__number { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 700; color: var(--white); line-height: 1.1; }
.sp-stats__label { font-size: 0.6rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--accent); }
.sp-stats__divider { width: 1px; height: 50px; background: rgba(255,255,255,0.12); flex-shrink: 0; }

.sp-eyebrow { font-size: 0.62rem; letter-spacing: 0.35em; text-transform: uppercase; color: var(--accent-dark); display: block; margin-bottom: 0.5rem; }
.sp-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.6rem); font-weight: 700; color: var(--text); line-height: 1.1; margin-bottom: 0.5rem; }
.sp-script { font-family: var(--font-script); font-size: clamp(1.2rem, 1.8vw, 1.6rem); color: var(--accent-dark); }

.sp-prestations { padding: 5rem 5%; background: var(--cream); }
.sp-prestations__header { text-align: center; margin-bottom: 3rem; }
.sp-prestations__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 1100px; margin: 0 auto; }
.sp-pres-card { display: flex; flex-direction: column; }
.sp-pres-card__arch { width: 100%; aspect-ratio: 3/4; border-radius: 50% 50% 0 0 / 18% 18% 0 0; overflow: hidden; margin-bottom: 1.5rem; }
.sp-pres-card__arch img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s ease; }
.sp-pres-card:hover .sp-pres-card__arch img { transform: scale(1.04); }
.sp-pres-card__body { display: flex; flex-direction: column; gap: 0.75rem; flex: 1; }
.sp-pres-card__titre { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--text); }
.sp-pres-card__desc { font-size: 0.82rem; color: var(--text-light); line-height: 1.75; flex: 1; }
.sp-pres-card__btn { font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent-dark); border-bottom: 1px solid var(--accent); padding-bottom: 2px; width: fit-content; font-family: var(--font-body); transition: color 0.2s; }
.sp-pres-card__btn:hover { color: var(--text); }

.sp-why { padding: 5rem 8%; background: var(--approche-cream); }
.sp-why__header { margin-bottom: 3rem; }
.sp-why__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem 4rem; }
.sp-why__grid--4 { grid-template-columns: repeat(4, 1fr); gap: 2rem; }
.sp-why__item { display: flex; gap: 1rem; align-items: flex-start; }
.sp-why__grid--4 .sp-why__item { flex-direction: column; gap: 0.75rem; }
.sp-why__dot { color: var(--accent); font-size: 0.7rem; flex-shrink: 0; margin-top: 4px; }
.sp-why__num { font-family: var(--font-display); font-size: 2rem; font-weight: 700; color: var(--accent); opacity: 0.5; line-height: 1; flex-shrink: 0; }
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
  .sp-prestations { padding: 3rem 1.5rem; }
  .sp-prestations__grid { grid-template-columns: 1fr; max-width: 340px; margin: 0 auto; }
  .sp-why { padding: 3rem 1.5rem; }
  .sp-why__grid--4 { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
  .sp-faq { padding: 3rem 1.5rem; }
  .sp-cta { padding: 4rem 1.5rem; }
}

@media (max-width: 500px) {
  .sp-why__grid--4 { grid-template-columns: 1fr; }
}
</style>