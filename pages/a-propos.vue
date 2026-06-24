<script setup lang="ts">
useSeoMeta({
  title: 'À Propos — Safia HDD Photographe',
  description: "Photographe de mariage basée à Lille, avec 6 ans d'expérience pour immortaliser vos plus beaux instants.",
})
</script>

<template>
  <div class="apropos">

    <!-- HERO -->
    <section class="ap-hero">
      <div class="ap-hero__content">
        <span class="ap-hero__eyebrow">Qui suis-je</span>
        <h1 class="ap-hero__title">À Propos</h1>
        <p class="ap-hero__subtitle">Une photographe, une vision.</p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="ap-intro">
      <div class="ap-intro__image-wrap">
        <div class="ap-intro__arch">
          <img src="/images/polaroid1.jpg" alt="Safia HDD photographe" />
        </div>
        <svg class="ap-intro__floral" width="60" height="140" viewBox="0 0 60 140" fill="none">
          <path d="M30 140 C30 105 18 88 22 58 C26 34 18 14 30 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="18" cy="55" r="2.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="34" cy="72" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="17" cy="88" r="2.2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="33" cy="104" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <path d="M22 58 Q8 50 4 38" stroke="#c4a898" stroke-width="0.7" fill="none"/>
          <path d="M26 34 Q40 26 44 16" stroke="#c4a898" stroke-width="0.7" fill="none"/>
        </svg>
      </div>

      <div class="ap-intro__text">
        <span class="ap-intro__eyebrow">Photographe de mariage</span>
        <h2 class="ap-intro__title">Bonjour, je suis Safia</h2>
        <p class="ap-intro__script">Raconter l'essentiel.</p>
        <p class="ap-intro__desc">
          Basée à Lille, je suis photographe de mariage depuis 6 ans.
          Mon travail repose sur une conviction profonde : les plus belles
          photos ne se posent pas, elles se vivent.
        </p>
        <p class="ap-intro__desc">
          Discrète et bienveillante, je m'intègre naturellement à votre journée
          pour en capturer l'authenticité — les regards, les rires, les larmes,
          les détails que l'on remarque à peine sur le moment mais que l'on
          chérit pour toujours.
        </p>
        <p class="ap-intro__desc">
          Chaque couple est unique. Chaque histoire mérite d'être racontée
          avec sincérité et douceur.
        </p>
      </div>
    </section>

    <!-- STATS -->
    <section class="ap-stats">
      <div class="ap-stats__item">
        <span class="ap-stats__number">6</span>
        <span class="ap-stats__label">Ans d'expérience</span>
      </div>
      <div class="ap-stats__divider" />
      <div class="ap-stats__item">
        <span class="ap-stats__number">200<span class="ap-stats__plus">+</span></span>
        <span class="ap-stats__label">Mariages immortalisés</span>
      </div>
      <div class="ap-stats__divider" />
      <div class="ap-stats__item">
        <span class="ap-stats__number">∞</span>
        <span class="ap-stats__label">Souvenirs créés</span>
      </div>
    </section>

    <!-- MON APPROCHE -->
    <section class="ap-approche">
      <div class="ap-approche__text">
        <span class="ap-approche__eyebrow">Ma philosophie</span>
        <h2 class="ap-approche__title">Mon approche</h2>
        <p class="ap-approche__script">L'instant vrai, avant tout.</p>
        <p class="ap-approche__desc">
          Je crois aux photos qui respirent. Pas aux sourires figés devant
          l'objectif, mais aux instants volés entre deux éclats de rire,
          aux regards échangés, aux mains qui se serrent.
        </p>
        <p class="ap-approche__desc">
          Mon style se situe entre le reportage et le portrait sensible :
          des images lumineuses, épurées, intemporelles. Des souvenirs que
          vous pourrez transmettre.
        </p>
      </div>

      <div class="ap-approche__images">
        <div class="ap-approche__img ap-approche__img--main">
          <img src="/images/polaroid2.jpg" alt="Reportage mariage" />
        </div>
        <div class="ap-approche__img ap-approche__img--secondary">
          <div class="ap-approche__polaroid">
            <div class="ap-approche__tape" />
            <img src="/images/polaroid3.jpg" alt="Détail mariage" />
          </div>
        </div>
      </div>
    </section>

    <!-- VALEURS -->
    <section class="ap-valeurs">
      <div class="ap-valeurs__header">
        <svg class="ap-valeurs__floral" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
        <h2 class="ap-valeurs__title">Ce en quoi je crois</h2>
        <svg class="ap-valeurs__floral ap-valeurs__floral--flip" width="40" height="100" viewBox="0 0 40 100" fill="none">
          <path d="M20 100 C20 75 10 62 14 40 C17 22 12 8 20 0" stroke="#c4a898" stroke-width="1" fill="none"/>
          <circle cx="12" cy="38" r="2" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="22" cy="52" r="1.5" stroke="#c4a898" stroke-width="0.8" fill="none"/>
          <circle cx="11" cy="62" r="1.8" stroke="#c4a898" stroke-width="0.8" fill="none"/>
        </svg>
      </div>

      <div class="ap-valeurs__grid">
        <div class="ap-valeurs__item">
          <span class="ap-valeurs__icon">◯</span>
          <h3 class="ap-valeurs__name">Authenticité</h3>
          <p class="ap-valeurs__desc">Des émotions vraies, jamais forcées. Je capture ce qui est, pas ce qui devrait être.</p>
        </div>
        <div class="ap-valeurs__item">
          <span class="ap-valeurs__icon">◯</span>
          <h3 class="ap-valeurs__name">Discrétion</h3>
          <p class="ap-valeurs__desc">Je m'efface pour que vous oubliiez l'objectif et viviez pleinement votre journée.</p>
        </div>
        <div class="ap-valeurs__item">
          <span class="ap-valeurs__icon">◯</span>
          <h3 class="ap-valeurs__name">Bienveillance</h3>
          <p class="ap-valeurs__desc">Une présence douce et rassurante, pour que chacun se sente à l'aise devant mon objectif.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ap-cta">
      <p class="ap-cta__eyebrow">Travaillons ensemble</p>
      <h2 class="ap-cta__title">Réservons votre date</h2>
      <p class="ap-cta__subtitle">Vos instants. Votre histoire.</p>
      <NuxtLink to="/contact" class="ap-cta__btn">Me contacter →</NuxtLink>
    </section>

  </div>
</template>

<style scoped>
/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.ap-hero {
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

.ap-hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.ap-hero__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--text-light);
}

.ap-hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  line-height: 1;
}

.ap-hero__subtitle {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  color: var(--accent-dark);
}

/* ══════════════════════════════════════
   INTRO
══════════════════════════════════════ */
.ap-intro {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
  gap: 5rem;
  padding: 6rem 8%;
  background: var(--cream);
}

.ap-intro__image-wrap {
  position: relative;
  justify-self: end;
}

.ap-intro__arch {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 3/4;
  border-radius: 50% 50% 0 0 / 18% 18% 0 0;
  overflow: hidden;
}

.ap-intro__arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ap-intro__floral {
  position: absolute;
  bottom: -1.5rem;
  left: -2rem;
  opacity: 0.5;
  pointer-events: none;
}

.ap-intro__text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.ap-intro__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent-dark);
}

.ap-intro__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
}

.ap-intro__script {
  font-family: var(--font-script);
  font-size: clamp(1.3rem, 2vw, 1.8rem);
  color: var(--accent-dark);
  margin-top: -0.4rem;
}

.ap-intro__desc {
  font-size: 0.87rem;
  color: var(--text-light);
  line-height: 1.85;
  max-width: 44ch;
}

/* ══════════════════════════════════════
   STATS
══════════════════════════════════════ */
.ap-stats {
  background: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 4rem 8%;
}

.ap-stats__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  padding: 1rem 2rem;
}

.ap-stats__number {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--white);
  line-height: 1;
}

.ap-stats__plus {
  font-size: 0.6em;
  color: var(--accent);
  vertical-align: super;
}

.ap-stats__label {
  font-size: 0.62rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--accent);
}

.ap-stats__divider {
  width: 1px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

/* ══════════════════════════════════════
   MON APPROCHE
══════════════════════════════════════ */
.ap-approche {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 5rem;
  padding: 6rem 8%;
  background: var(--cream);
}

.ap-approche__text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.ap-approche__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent-dark);
}

.ap-approche__title {
  font-family: var(--font-script);
  font-size: clamp(2rem, 3vw, 2.8rem);
  color: var(--text);
  line-height: 1.2;
}

.ap-approche__script {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1rem;
  color: var(--accent-dark);
  margin-top: -0.4rem;
}

.ap-approche__desc {
  font-size: 0.87rem;
  color: var(--text-light);
  line-height: 1.85;
  max-width: 44ch;
}

.ap-approche__images {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.ap-approche__img--main {
  width: 75%;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 50% 50% 0 0 / 14% 14% 0 0;
}

.ap-approche__img--main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ap-approche__img--secondary {
  position: absolute;
  bottom: 2rem;
  right: -1rem;
  z-index: 2;
}

.ap-approche__polaroid {
  position: relative;
  background: var(--white);
  padding: 8px 8px 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
  width: 130px;
  transform: rotate(3deg);
}

.ap-approche__tape {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 18px;
  background: rgba(210, 185, 160, 0.5);
  z-index: 3;
}

.ap-approche__polaroid img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  display: block;
}

/* ══════════════════════════════════════
   VALEURS
══════════════════════════════════════ */
.ap-valeurs {
  padding: 5rem 8%;
  background: var(--approche-cream);
}

.ap-valeurs__header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.ap-valeurs__title {
  font-family: var(--font-display);
  font-size: 0.72rem;
  letter-spacing: 0.38em;
  text-transform: uppercase;
  color: var(--text);
  font-weight: 400;
  white-space: nowrap;
}

.ap-valeurs__floral {
  opacity: 0.55;
  flex-shrink: 0;
}

.ap-valeurs__floral--flip {
  transform: scaleX(-1);
}

.ap-valeurs__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.ap-valeurs__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.ap-valeurs__icon {
  font-size: 1.2rem;
  color: var(--accent-dark);
  line-height: 1;
}

.ap-valeurs__name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: 0.05em;
}

.ap-valeurs__desc {
  font-size: 0.83rem;
  color: var(--text-light);
  line-height: 1.8;
  max-width: 26ch;
}

/* ══════════════════════════════════════
   CTA — fond crème, pas sombre
══════════════════════════════════════ */
.ap-cta {
  background: var(--cream);
  padding: 6rem 3rem;
  text-align: center;
  border-top: 1px solid var(--cream-dark);
}

.ap-cta__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-bottom: 1rem;
}

.ap-cta__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text);
  line-height: 1;
  margin-bottom: 0.75rem;
}

.ap-cta__subtitle {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  color: var(--accent-dark);
  margin-bottom: 2rem;
}

.ap-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.9rem 2rem;
  background: var(--accent);
  color: var(--white);
  font-family: var(--font-body);
  transition: background 0.2s;
}

.ap-cta__btn:hover { background: var(--accent-dark); }

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .ap-hero { padding: 8rem 1.5rem 3rem; }

  .ap-intro {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 4rem 1.5rem;
    text-align: center;
  }

  .ap-intro__image-wrap { justify-self: center; }
  .ap-intro__arch { max-width: 260px; }
  .ap-intro__floral { display: none; }
  .ap-intro__text { align-items: center; }
  .ap-intro__desc { max-width: 100%; }

  .ap-stats {
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 1.5rem;
  }

  .ap-stats__divider {
    width: 60px;
    height: 1px;
  }

  .ap-approche {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 4rem 1.5rem;
    text-align: center;
  }

  .ap-approche__text { align-items: center; }
  .ap-approche__desc { max-width: 100%; }
  .ap-approche__images { justify-content: center; }
  .ap-approche__img--main { width: 65%; }
  .ap-approche__img--secondary { right: 0; bottom: 1rem; }

  .ap-valeurs { padding: 4rem 1.5rem; }

  .ap-valeurs__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .ap-cta { padding: 4rem 1.5rem; }
}

@media (max-width: 500px) {
  .ap-approche__polaroid { width: 100px; }
  .ap-valeurs__header { gap: 0.75rem; }
  .ap-valeurs__floral { display: none; }
}
</style>