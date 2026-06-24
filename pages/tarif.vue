<script setup lang="ts">
useSeoMeta({
  title: 'Tarifs — Safia HDD Photographe',
  description: "Découvrez les formules et tarifs pour vos reportages de mariage et les programmes de coaching photo Glow Up en Photo.",
})

const mariageFormules = [
  {
    tag: 'Formule Essentielle',
    prix: '1 100',
    from: true,
    desc: 'Pour les mariages intimes et les journées courtes.',
    items: [
      "Préparatifs de la mariée",
      "Cérémonie à la mairie",
      "Séance couple au parc",
      "Vin d'honneur",
    ],
    highlight: false,
  },
  {
    tag: 'Formule Complète',
    prix: '1 800',
    from: true,
    desc: 'Pour capturer chaque moment de votre journée, du matin à la nuit.',
    items: [
      "Préparatifs de la mariée",
      "Cérémonie à la mairie",
      "Séance couple au parc",
      "Soirée & dîner",
    ],
    highlight: true,
  },
  {
    tag: 'Sur devis',
    prix: null,
    from: false,
    desc: 'Elopement, séance couple, maternité, famille, portrait, editorial — chaque projet est unique.',
    items: [
      "Séance couple",
      "Grossesse & maternité",
      "Portrait & éditorial",
      "Famille",
    ],
    highlight: false,
  },
]

const glowUpFormules = [
  {
    tag: 'Glow Up Starter',
    badge: 'Pour démarrer',
    badgeSecondary: true,
    duree: '1 mois de suivi',
    prix: '199',
    from: false,
    desc: "Idéal pour poser de bonnes bases rapidement.",
    items: [
      "1 visio mentoring d'1h en direct avec Safia",
      "Exercices pratiques envoyés chaque semaine",
      "Retours détaillés sur tes photos",
    ],
    recommande: false,
    highlight: false,
  },
  {
    tag: 'Glow Up Mentoring',
    badge: 'Le plus choisi',
    badgeSecondary: false,
    duree: '2 mois de suivi',
    prix: '497',
    from: false,
    desc: "Pour ancrer durablement tes compétences.",
    items: [
      "2 visios mentoring d'1h avec Safia",
      "Exercices pratiques chaque semaine",
      "Accès à la plateforme d'échange & de cours",
      "Communauté pour partager et progresser ensemble",
      "Suivi personnalisé continu sur 2 mois",
    ],
    recommande: true,
    highlight: false,
  },
  {
    tag: 'Glow Up Premium',
    badge: 'Immersif',
    badgeSecondary: true,
    duree: '3 mois de suivi',
    prix: '1 890',
    from: true,
    desc: "Pour un accompagnement complet et rapproché.",
    items: [
      "1 journée complète en présentiel (Lille ou Paris)",
      "30 min de mentoring chaque semaine + exercices",
      "Accès à la plateforme d'échange & de cours",
      "Suivi quotidien via WhatsApp",
      "Accompagnement de A à Z sur 3 mois",
      "Possibilité de me suivre lors d'un événement sur le terrain",
      "Travail sur la posture du photographe",
      "Comment trouver tes premiers clients",
      "Aide pour la communication sur les réseaux sociaux",
      "Aide pour la mise en place de templates sur Canva",
      "Maîtrise des réglages de l'appareil photo",
      "Retouche Lightroom",
    ],
    recommande: false,
    highlight: true,
  },
]

const inclus = [
  "Accès à la plateforme de cours en ligne",
  "Ressources pédagogiques exclusives",
  "Visioconférences en direct avec Safia",
  "Exercices pratiques & corrections personnalisées",
]

const calendlyUrl = 'https://calendly.com/safiamomentsdevie/30min'
</script>

<template>
  <div class="tarifs">

    <!-- HERO -->
    <section class="tr-hero">
      <div class="tr-hero__content">
        <span class="tr-hero__eyebrow">Investissez dans vos souvenirs</span>
        <h1 class="tr-hero__title">Tarifs</h1>
        <p class="tr-hero__subtitle">Chaque histoire a son prix juste.</p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="tr-intro">
      <div class="tr-intro__inner">
        <svg class="tr-intro__floral" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
        <p class="tr-intro__text">
          Tous les tarifs sont indicatifs et personnalisables selon votre projet.
          <em>N'hésitez pas à me contacter pour un devis sur mesure.</em>
        </p>
        <svg class="tr-intro__floral tr-intro__floral--flip" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
      </div>
    </section>

    <!-- PHOTOGRAPHIE MARIAGE -->
    <section class="tr-section">
      <div class="tr-section__header">
        <span class="tr-section__eyebrow">Reportage</span>
        <h2 class="tr-section__title">Photographie de mariage</h2>
        <p class="tr-section__script">Immortalisons votre plus beau jour.</p>
      </div>

      <div class="tr-mariage__grid">
        <div v-for="f in mariageFormules" :key="f.tag" class="tr-mariage-card" :class="{ 'tr-mariage-card--highlight': f.highlight }">
          <div class="tr-mariage-card__top">
            <span class="tr-mariage-card__tag">{{ f.tag }}</span>
            <div v-if="f.prix" class="tr-mariage-card__prix">
              <span v-if="f.from" class="tr-mariage-card__from">à partir de</span>
              <span class="tr-mariage-card__montant">{{ f.prix }} €</span>
            </div>
            <div v-else class="tr-mariage-card__prix">
              <span class="tr-mariage-card__montant tr-mariage-card__montant--devis">Sur devis</span>
            </div>
            <p class="tr-mariage-card__desc">{{ f.desc }}</p>
          </div>

          <ul class="tr-mariage-card__list">
            <li v-for="item in f.items" :key="item" class="tr-mariage-card__item">
              <span class="tr-mariage-card__dot">◯</span>
              {{ item }}
            </li>
          </ul>

          <NuxtLink to="/contact" class="tr-mariage-card__btn">Demander un devis →</NuxtLink>
        </div>
      </div>

      <p class="tr-section__note">◯ &nbsp; Frais de déplacement inclus en région lilloise — sur devis au-delà</p>
    </section>

    <!-- SÉPARATEUR -->
    <div class="tr-divider">
      <svg width="120" height="1" viewBox="0 0 120 1"><line x1="0" y1="0.5" x2="120" y2="0.5" stroke="#c4a898" stroke-width="1"/></svg>
      <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
        <path d="M20 60 C20 42 10 34 14 20 C17 10 12 3 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
        <circle cx="12" cy="19" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        <circle cx="22" cy="28" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
      </svg>
      <svg width="120" height="1" viewBox="0 0 120 1"><line x1="0" y1="0.5" x2="120" y2="0.5" stroke="#c4a898" stroke-width="1"/></svg>
    </div>

    <!-- GLOW UP -->
    <section class="tr-section tr-section--dark">
      <div class="tr-section__header tr-section__header--light">
        <span class="tr-section__eyebrow tr-section__eyebrow--accent">Programme de coaching photo</span>
        <h2 class="tr-section__title tr-section__title--light">Glow Up en Photo</h2>
        <p class="tr-section__script tr-section__script--accent">Apprends à capturer des images qui te ressemblent.</p>
        <p class="tr-section__subdesc">
          Trois formules pour progresser en photo selon ton rythme et ton ambition —
          du suivi mensuel pour poser les bases, jusqu'au coaching immersif avec présentiel.
        </p>
      </div>

      <div class="tr-glow__grid">
        <div v-for="f in glowUpFormules" :key="f.tag" class="tr-glow-card" :class="{ 'tr-glow-card--recommande': f.recommande, 'tr-glow-card--highlight': f.highlight }">
          <div v-if="f.recommande" class="tr-glow-card__badge">{{ f.badge }}</div>
          <div v-else-if="f.badge" class="tr-glow-card__badge tr-glow-card__badge--secondary">{{ f.badge }}</div>

          <div class="tr-glow-card__top">
            <span class="tr-glow-card__tag">{{ f.tag }}</span>
            <span class="tr-glow-card__duree">{{ f.duree }}</span>
            <div class="tr-glow-card__prix">
              <span v-if="f.from" class="tr-glow-card__from">à partir de</span>
              <div class="tr-glow-card__prix-row">
                <span class="tr-glow-card__montant">{{ f.prix }} €</span>
                <span class="tr-glow-card__tvac">TVAC</span>
              </div>
            </div>
          </div>

          <div class="tr-glow-card__body">
            <p class="tr-glow-card__desc">{{ f.desc }}</p>
            <ul class="tr-glow-card__list">
              <li v-for="item in f.items" :key="item" class="tr-glow-card__item">
                <span class="tr-glow-card__dot">◯</span>
                {{ item }}
              </li>
            </ul>
          </div>

          <NuxtLink to="/contact" class="tr-glow-card__btn">Choisir cette formule →</NuxtLink>
        </div>
      </div>

      <p class="tr-glow__paiement">◯ &nbsp; Paiement en 3 fois disponible pour toutes les formules</p>
    </section>

    <!-- CITATION -->
    <section class="tr-quote">
      <div class="tr-quote__inner">
        <span class="tr-quote__mark">"</span>
        <p class="tr-quote__text">Mon objectif : te transmettre, pas à pas, les bases solides et la confiance qui font qu'une photo devient vraiment la tienne.</p>
        <span class="tr-quote__author">— Safia, Safia Moments de Vie</span>
      </div>
    </section>

    <!-- CTA -->
    <section class="tr-cta">
      <p class="tr-cta__eyebrow">On commence quand tu veux ?</p>
      <h2 class="tr-cta__title">Réservons votre date</h2>
      <p class="tr-cta__subtitle">Vos instants. Votre histoire.</p>
      <div class="tr-cta__links">
        <NuxtLink to="/contact" class="tr-cta__btn tr-cta__btn--primary">Me contacter →</NuxtLink>
        <a :href="calendlyUrl" target="_blank" rel="noopener" class="tr-cta__btn tr-cta__btn--secondary">Réserver un appel découverte →</a>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.tr-hero {
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

.tr-hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.tr-hero__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--text-light);
}

.tr-hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  line-height: 1;
}

.tr-hero__subtitle {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  color: var(--accent-dark);
}

/* ══════════════════════════════════════
   INTRO
══════════════════════════════════════ */
.tr-intro {
  padding: 3rem 2rem;
  background: var(--cream);
  border-bottom: 1px solid var(--cream-dark);
}

.tr-intro__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
}

.tr-intro__text {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.7;
  text-align: center;
}

.tr-intro__text em { color: var(--accent-dark); }

.tr-intro__floral { opacity: 0.5; flex-shrink: 0; }
.tr-intro__floral--flip { transform: scaleX(-1); }

/* ══════════════════════════════════════
   SECTIONS COMMUNES
══════════════════════════════════════ */
.tr-section {
  padding: 5rem 3rem;
  background: var(--cream);
}

.tr-section--dark { background: var(--dark); }

.tr-section__header {
  text-align: center;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.tr-section__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent-dark);
}

.tr-section__eyebrow--accent { color: var(--accent); }

.tr-section__title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  line-height: 1;
}

.tr-section__title--light { color: var(--white); }

.tr-section__script {
  font-family: var(--font-script);
  font-size: clamp(1.2rem, 2vw, 1.7rem);
  color: var(--accent-dark);
}

.tr-section__script--accent { color: var(--accent); }

.tr-section__subdesc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.8;
  max-width: 52ch;
  text-align: center;
  margin-top: 0.5rem;
}

.tr-section__note {
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--text-light);
  font-style: italic;
}

/* ══════════════════════════════════════
   MARIAGE CARDS
══════════════════════════════════════ */
.tr-mariage__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  align-items: start;
}

.tr-mariage-card {
  background: var(--white);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  border-top: 2px solid var(--cream-dark);
}

.tr-mariage-card--highlight {
  border-top-color: var(--accent);
  box-shadow: 0 8px 32px rgba(196, 168, 152, 0.3);
}

.tr-mariage-card__top {
  padding: 2rem 1.75rem 1.5rem;
  border-bottom: 1px solid var(--cream-dark);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.tr-mariage-card__tag {
  font-size: 0.55rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent-dark);
  font-family: var(--font-body);
}

.tr-mariage-card__prix {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}

.tr-mariage-card__from {
  font-size: 0.68rem;
  color: var(--text-light);
  font-style: italic;
  margin-bottom: 0.1rem;
}

.tr-mariage-card__montant {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

.tr-mariage-card__montant--devis {
  font-size: 1.6rem;
  color: var(--accent-dark);
  margin-top: 0.5rem;
}

.tr-mariage-card__desc {
  font-size: 0.78rem;
  color: var(--text-light);
  font-style: italic;
  line-height: 1.6;
  margin-top: 0.25rem;
}

.tr-mariage-card__list {
  list-style: none;
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.tr-mariage-card__item {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.8rem;
  color: var(--text-light);
  line-height: 1.5;
}

.tr-mariage-card__dot {
  color: var(--accent);
  font-size: 0.6rem;
  flex-shrink: 0;
}

.tr-mariage-card__btn {
  display: block;
  text-align: center;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.85rem 1rem;
  background: var(--accent);
  color: var(--white);
  font-family: var(--font-body);
  transition: background 0.2s;
  margin: 0 1.75rem 1.75rem;
}

.tr-mariage-card__btn:hover { background: var(--accent-dark); }

/* ══════════════════════════════════════
   SÉPARATEUR
══════════════════════════════════════ */
.tr-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 3rem;
  background: var(--cream);
}

/* ══════════════════════════════════════
   GLOW UP CARDS
══════════════════════════════════════ */
.tr-glow__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;
}

.tr-glow-card {
  position: relative;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(196, 168, 152, 0.2);
  display: flex;
  flex-direction: column;
}

.tr-glow-card--recommande {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent);
}

.tr-glow-card--highlight {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(196, 168, 152, 0.35);
}

.tr-glow-card__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: var(--white);
  font-size: 0.52rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.28rem 1rem;
  white-space: nowrap;
  font-family: var(--font-body);
  z-index: 2;
}

.tr-glow-card__badge--secondary {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
}

.tr-glow-card__top {
  padding: 2rem 1.75rem 1.25rem;
  border-bottom: 1px solid rgba(196, 168, 152, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.tr-glow-card__tag {
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--accent);
  font-family: var(--font-body);
}

.tr-glow-card__duree {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 0.1rem;
}

.tr-glow-card__prix {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}

.tr-glow-card__from {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
  margin-bottom: 0.1rem;
}

.tr-glow-card__prix-row {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.tr-glow-card__montant {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1;
}

.tr-glow-card__tvac {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.1em;
}

.tr-glow-card__body {
  padding: 1.5rem 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tr-glow-card__desc {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  line-height: 1.6;
  font-family: var(--font-display);
}

.tr-glow-card__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.tr-glow-card__item {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}

.tr-glow-card__dot {
  color: var(--accent);
  font-size: 0.55rem;
  flex-shrink: 0;
}

.tr-glow-card__btn {
  display: block;
  text-align: center;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.85rem 1rem;
  border: 1px solid var(--accent);
  color: var(--white);
  font-family: var(--font-body);
  transition: background 0.2s;
  margin: 0 1.75rem 1.75rem;
}

.tr-glow-card__btn:hover { background: var(--accent); }

.tr-glow__paiement {
  text-align: center;
  margin-top: 2.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.35);
  font-style: italic;
}

/* ══════════════════════════════════════
   CITATION
══════════════════════════════════════ */
.tr-quote {
  background: var(--approche-cream);
  padding: 4rem 3rem;
}

.tr-quote__inner {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.tr-quote__mark {
  font-family: var(--font-display);
  font-size: 4rem;
  color: var(--accent-dark);
  line-height: 0.5;
  opacity: 0.6;
}

.tr-quote__text {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--text);
  line-height: 1.75;
}

.tr-quote__author {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-dark);
}

/* ══════════════════════════════════════
   CTA — fond crème pour ne pas coller
   avec le footer sombre
══════════════════════════════════════ */
.tr-cta {
  background: var(--cream);
  padding: 6rem 3rem;
  text-align: center;
  border-top: 1px solid var(--cream-dark);
}

.tr-cta__eyebrow {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  color: var(--accent-dark);
  margin-bottom: 0.75rem;
  display: block;
}

.tr-cta__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  line-height: 1;
  margin-bottom: 0.75rem;
}

.tr-cta__subtitle {
  font-family: var(--font-script);
  font-size: clamp(1.3rem, 2vw, 1.7rem);
  color: var(--accent-dark);
  margin-bottom: 2rem;
  display: block;
}

.tr-cta__links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tr-cta__btn {
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

.tr-cta__btn--primary {
  background: var(--accent);
  color: var(--white);
}

.tr-cta__btn--primary:hover { background: var(--accent-dark); }

.tr-cta__btn--secondary {
  border: 1px solid var(--accent-dark);
  color: var(--text);
}

.tr-cta__btn--secondary:hover {
  background: var(--accent-dark);
  color: var(--white);
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .tr-hero { padding: 8rem 1.5rem 3rem; }
  .tr-intro__floral { display: none; }
  .tr-section { padding: 3rem 1.5rem; }

  .tr-mariage__grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }

  .tr-glow__grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }

  .tr-divider { padding: 1.5rem; }
  .tr-quote { padding: 3rem 1.5rem; }
  .tr-cta { padding: 4rem 1.5rem; }
  .tr-cta__links { flex-direction: column; align-items: center; }
}

@media (max-width: 500px) {
  .tr-mariage-card__montant { font-size: 2rem; }
  .tr-glow-card__montant { font-size: 2rem; }
}
</style>