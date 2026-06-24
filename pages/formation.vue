<script setup lang="ts">
useSeoMeta({
  title: 'Formation — Safia HDD Photographe',
  description: "Formations en ligne à la photographie : accompagnements personnalisés en visioconférence pour progresser à ton rythme.",
})

const formules = [
  {
    tag: 'Essentielle',
    prix: '99',
    periode: 'par mois · TVA incluse',
    titre: 'Perfectionnement & Créativité',
    desc: "Pour ceux qui maîtrisent déjà leurs réglages et souhaitent aller plus loin — cadrage, retouches, regard artistique.",
    items: [
      '1 visio par mois — échange sur tes exercices',
      'Accès à la plateforme (1 mois)',
      'Travail sur le cadrage & la composition',
      'Techniques de retouche avancées',
      'Exercices pratiques ciblés',
      'Feedback personnalisé',
    ],
    recommande: false,
    highlight: false,
  },
  {
    tag: 'Accompagnement',
    prix: '399',
    periode: "2 mois d'accès · TVA incluse",
    titre: 'Débuter & Progresser',
    desc: "Pour les débutants qui veulent des bases solides, un suivi régulier et des résultats visibles.",
    items: [
      '1 visio tous les 15 jours — échange sur tes exercices',
      'Accès à la plateforme (2 mois)',
      "Prise en main de l'appareil photo",
      'Réglages manuels & composition',
      'Apprentissage pas à pas',
      'Suivi de ta progression',
    ],
    recommande: true,
    highlight: false,
  },
  {
    tag: 'Immersive',
    prix: '1490',
    periode: '3 mois complets · TVA incluse',
    titre: 'Transformation Complète',
    desc: "Pour les débutants déterminés — un suivi intensif pour transformer leur regard et leur pratique en profondeur.",
    items: [
      '1 visio par semaine — échange sur tes exercices',
      'Accès à la plateforme (3 mois)',
      'Exercices individualisés chaque semaine',
      'Corrections & retours détaillés',
      'Progression structurée sur 3 mois',
      'Accompagnement prioritaire',
      '1 journée en présentiel à Paris incluse',
    ],
    recommande: false,
    highlight: true,
  },
]

const inclus = [
  'Accès à la plateforme de cours en ligne',
  'Ressources pédagogiques exclusives',
  'Visioconférences en direct avec Safia',
  'Exercices pratiques & corrections personnalisées',
]

const calendlyUrl = 'https://calendly.com/safiamomentsdevie/30min'
</script>

<template>
  <div class="formation">

    <!-- HERO -->
    <section class="fm-hero">
      <div class="fm-hero__content">
        <span class="fm-hero__eyebrow">100 % à distance · Visios en direct · Exercices personnalisés</span>
        <h1 class="fm-hero__title">Formation</h1>
        <p class="fm-hero__subtitle">Révèle ton regard de photographe.</p>
        <p class="fm-hero__desc">
          Des accompagnements personnalisés en visioconférence, adaptés à ton niveau,
          pour progresser à ton rythme.
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="fm-intro">
      <div class="fm-intro__inner">
        <svg class="fm-intro__floral" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
        <p class="fm-intro__text">
          Ces formules sont une base —
          <em>chaque parcours est entièrement personnalisable selon tes objectifs.</em>
        </p>
        <svg class="fm-intro__floral fm-intro__floral--flip" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
      </div>
    </section>

    <!-- FORMULES -->
    <section class="fm-formules">
      <div class="fm-formules__grid">
        <div v-for="f in formules" :key="f.tag" class="fm-card" :class="{ 'fm-card--recommande': f.recommande, 'fm-card--highlight': f.highlight }">
          <div v-if="f.recommande" class="fm-card__badge">Recommandée</div>

          <div class="fm-card__top">
            <span class="fm-card__tag">{{ f.tag }}</span>
            <div class="fm-card__prix">
              <span class="fm-card__euro">€</span>
              <span class="fm-card__montant">{{ f.prix }}</span>
            </div>
            <span class="fm-card__periode">{{ f.periode }}</span>
          </div>

          <div class="fm-card__body">
            <h3 class="fm-card__titre">{{ f.titre }}</h3>
            <p class="fm-card__desc">{{ f.desc }}</p>
            <ul class="fm-card__list">
              <li v-for="item in f.items" :key="item" class="fm-card__item">
                <span class="fm-card__dot">◯</span>
                {{ item }}
              </li>
            </ul>
          </div>

          <NuxtLink to="/contact" class="fm-card__btn">Choisir cette formule →</NuxtLink>
        </div>
      </div>

      <p class="fm-formules__paiement">◯ &nbsp; Paiement en 3 fois disponible pour toutes les formules</p>
    </section>

    <!-- INCLUS -->
    <section class="fm-inclus">
      <div class="fm-inclus__inner">
        <h2 class="fm-inclus__title">Inclus dans toutes les formules</h2>
        <div class="fm-inclus__grid">
          <div v-for="item in inclus" :key="item" class="fm-inclus__item">
            <span class="fm-inclus__dot">◯</span>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="fm-cta">
      <p class="fm-cta__eyebrow">Prête à transformer ta photographie ?</p>
      <h2 class="fm-cta__title">Trouvons ton parcours</h2>
      <p class="fm-cta__desc">
        Ces formules sont une base de départ — je les adapte selon tes besoins,
        ton matériel et tes objectifs. Contacte-moi pour qu'on construise
        ensemble le parcours qui te correspond.
      </p>
      <div class="fm-cta__links">
        <NuxtLink to="/contact" class="fm-cta__btn fm-cta__btn--primary">Me contacter →</NuxtLink>
        <a :href="calendlyUrl" target="_blank" rel="noopener" class="fm-cta__btn fm-cta__btn--secondary">Réserver un appel découverte →</a>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.fm-hero {
  min-height: 48vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 9rem 2rem 4rem;
  background-image: url('/images/bg-hero.png');
  background-size: cover;
  background-position: center;
}

.fm-hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 640px;
}

.fm-hero__eyebrow {
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--text-light);
}

.fm-hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  line-height: 1;
}

.fm-hero__subtitle {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  color: var(--accent-dark);
}

.fm-hero__desc {
  font-size: 0.87rem;
  color: var(--text-light);
  line-height: 1.8;
  max-width: 44ch;
}

/* ══════════════════════════════════════
   INTRO
══════════════════════════════════════ */
.fm-intro {
  padding: 3rem 2rem;
  background: var(--cream);
  border-bottom: 1px solid var(--cream-dark);
}

.fm-intro__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
}

.fm-intro__text {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.7;
  text-align: center;
}

.fm-intro__text em {
  color: var(--accent-dark);
  font-style: italic;
}

.fm-intro__floral {
  opacity: 0.5;
  flex-shrink: 0;
}

.fm-intro__floral--flip {
  transform: scaleX(-1);
}

/* ══════════════════════════════════════
   FORMULES
══════════════════════════════════════ */
.fm-formules {
  padding: 5rem 3rem;
  background: var(--cream);
}

.fm-formules__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;
}

.fm-card {
  position: relative;
  background: var(--white);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.fm-card--recommande {
  box-shadow: 0 8px 32px rgba(196, 168, 152, 0.35);
}

.fm-card--highlight .fm-card__top {
  background: var(--dark);
}

.fm-card--highlight .fm-card__tag {
  color: var(--accent);
  border-color: var(--accent);
}

.fm-card--highlight .fm-card__montant {
  color: var(--white);
}

.fm-card--highlight .fm-card__euro {
  color: var(--accent);
}

.fm-card--highlight .fm-card__periode {
  color: rgba(255, 255, 255, 0.5);
}

.fm-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: var(--white);
  font-size: 0.55rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  white-space: nowrap;
  font-family: var(--font-body);
  z-index: 2;
}

.fm-card__top {
  background: var(--cream);
  padding: 2rem 1.75rem 1.5rem;
  border-bottom: 1px solid var(--cream-dark);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.fm-card__tag {
  font-size: 0.55rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent-dark);
  border: 1px solid var(--accent);
  padding: 0.2rem 0.6rem;
  width: fit-content;
  font-family: var(--font-body);
}

.fm-card__prix {
  display: flex;
  align-items: baseline;
  gap: 0.1rem;
  margin-top: 0.5rem;
}

.fm-card__euro {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--accent-dark);
  font-weight: 400;
}

.fm-card__montant {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

.fm-card__periode {
  font-size: 0.68rem;
  color: var(--text-light);
  letter-spacing: 0.05em;
}

.fm-card__body {
  padding: 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fm-card__titre {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
}

.fm-card__desc {
  font-size: 0.78rem;
  color: var(--accent-dark);
  font-style: italic;
  line-height: 1.65;
  font-family: var(--font-display);
}

.fm-card__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 0.5rem;
}

.fm-card__item {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.78rem;
  color: var(--text-light);
  line-height: 1.55;
}

.fm-card__dot {
  color: var(--accent);
  font-size: 0.6rem;
  flex-shrink: 0;
}

.fm-card__btn {
  display: block;
  text-align: center;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.9rem 1rem;
  background: var(--accent);
  color: var(--white);
  font-family: var(--font-body);
  transition: background 0.2s;
  margin: 0 1.75rem 1.75rem;
}

.fm-card__btn:hover { background: var(--accent-dark); }

.fm-formules__paiement {
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--text-light);
  font-style: italic;
}

/* ══════════════════════════════════════
   INCLUS
══════════════════════════════════════ */
.fm-inclus {
  background: var(--dark);
  padding: 4rem 3rem;
}

.fm-inclus__inner {
  max-width: 900px;
  margin: 0 auto;
}

.fm-inclus__title {
  font-family: var(--font-display);
  font-size: 0.72rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 400;
  text-align: center;
  margin-bottom: 2.5rem;
}

.fm-inclus__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 3rem;
}

.fm-inclus__item {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
}

.fm-inclus__dot {
  color: var(--accent);
  font-size: 0.6rem;
  flex-shrink: 0;
}

/* ══════════════════════════════════════
   CTA
══════════════════════════════════════ */
.fm-cta {
  background: var(--approche-cream);
  padding: 6rem 3rem;
  text-align: center;
}

.fm-cta__eyebrow {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  color: var(--accent-dark);
  margin-bottom: 0.75rem;
  display: block;
}

.fm-cta__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  line-height: 1;
  margin-bottom: 1.25rem;
}

.fm-cta__desc {
  font-size: 0.87rem;
  color: var(--text-light);
  line-height: 1.85;
  max-width: 50ch;
  margin: 0 auto 2.5rem;
}

.fm-cta__links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.fm-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.9rem 1.8rem;
  font-family: var(--font-body);
  transition: background 0.2s, color 0.2s;
}

.fm-cta__btn--primary {
  background: var(--accent-dark);
  color: var(--white);
}

.fm-cta__btn--primary:hover { background: var(--dark); }

.fm-cta__btn--secondary {
  border: 1px solid var(--accent-dark);
  color: var(--text);
}

.fm-cta__btn--secondary:hover {
  background: var(--accent-dark);
  color: var(--white);
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .fm-hero { padding: 8rem 1.5rem 3rem; }
  .fm-intro__floral { display: none; }
  .fm-formules { padding: 3rem 1.5rem; }

  .fm-formules__grid {
    grid-template-columns: 1fr;
    max-width: 480px;
  }

  .fm-inclus { padding: 3rem 1.5rem; }

  .fm-inclus__grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .fm-cta { padding: 4rem 1.5rem; }
  .fm-cta__links { flex-direction: column; align-items: center; }
}

@media (max-width: 500px) {
  .fm-intro { padding: 2rem 1.5rem; }
  .fm-card__montant { font-size: 2.4rem; }
}
</style>