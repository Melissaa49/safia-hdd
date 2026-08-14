<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://widgets.sociablekit.com/instagram-feed/widget.js',
      defer: true,
    },
  ],
})
</script>

<template>
  <section class="instagram-section" aria-label="Dernières publications Instagram">
    <div class="instagram-section__inner">
      <header class="instagram-section__header">
        <svg
          width="22"
          height="56"
          viewBox="0 0 22 56"
          fill="none"
          class="instagram-section__floral"
          aria-hidden="true"
        >
          <path
            d="M11 56 C11 40 5 32 7 20 C9 10 6 2 11 0"
            stroke="#c4a898"
            stroke-width="0.9"
            fill="none"
          />
          <circle
            cx="6"
            cy="20"
            r="1.1"
            stroke="#c4a898"
            stroke-width="0.7"
            fill="none"
          />
          <circle
            cx="12"
            cy="30"
            r="0.9"
            stroke="#c4a898"
            stroke-width="0.7"
            fill="none"
          />
          <circle
            cx="6"
            cy="38"
            r="1"
            stroke="#c4a898"
            stroke-width="0.7"
            fill="none"
          />
        </svg>

        <div class="instagram-section__header-text">
          <span class="instagram-section__eyebrow">
            Sur Instagram
          </span>

          <h2 class="instagram-section__title">
            Dernières
            <em>publications</em>
          </h2>
        </div>

        <svg
          width="22"
          height="56"
          viewBox="0 0 22 56"
          fill="none"
          class="instagram-section__floral instagram-section__floral--reverse"
          aria-hidden="true"
        >
          <path
            d="M11 56 C11 40 5 32 7 20 C9 10 6 2 11 0"
            stroke="#c4a898"
            stroke-width="0.9"
            fill="none"
          />
          <circle
            cx="6"
            cy="20"
            r="1.1"
            stroke="#c4a898"
            stroke-width="0.7"
            fill="none"
          />
          <circle
            cx="12"
            cy="30"
            r="0.9"
            stroke="#c4a898"
            stroke-width="0.7"
            fill="none"
          />
          <circle
            cx="6"
            cy="38"
            r="1"
            stroke="#c4a898"
            stroke-width="0.7"
            fill="none"
          />
        </svg>
      </header>

      <div class="instagram-section__intro">
        <span class="instagram-section__line"></span>

        <p>
          Quelques instants, quelques histoires, quelques émotions
          partagées au fil des jours.
        </p>

        <span class="instagram-section__line"></span>
      </div>

      <div class="instagram-section__widget-shell">
        <div class="instagram-section__ornament instagram-section__ornament--top">
          <span></span>
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              stroke="currentColor"
              stroke-width="1.1"
            />
            <circle
              cx="12"
              cy="12"
              r="4.4"
              stroke="currentColor"
              stroke-width="1.1"
            />
            <circle
              cx="17.4"
              cy="6.6"
              r="1"
              fill="currentColor"
            />
          </svg>
          <span></span>
        </div>

        <div class="instagram-section__widget">
          <div
            class="sk-instagram-feed"
            data-embed-id="25705489"
          ></div>
        </div>

        <div class="instagram-section__ornament instagram-section__ornament--bottom">
          <span></span>
          <span class="instagram-section__ornament-text">
            @safiamomentsdevie
          </span>
          <span></span>
        </div>
      </div>

      <div class="instagram-section__footer">
        <a
          href="https://www.instagram.com/safiamomentsdevie"
          target="_blank"
          rel="noopener noreferrer"
          class="instagram-section__button"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="5"
              stroke="currentColor"
              stroke-width="1.3"
            />
            <circle
              cx="12"
              cy="12"
              r="4.5"
              stroke="currentColor"
              stroke-width="1.3"
            />
            <circle
              cx="17.5"
              cy="6.5"
              r="1.2"
              fill="currentColor"
            />
          </svg>

          Découvrir mon univers sur Instagram
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.instagram-section {
  position: relative;
  overflow: hidden;
  padding: 6.5rem 1.5rem 7rem;
  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(255, 255, 255, 0.22),
      transparent 32%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(255, 255, 255, 0.12),
      transparent 30%
    ),
    var(--approche-cream, #e8d0be);
}

.instagram-section::before,
.instagram-section::after {
  content: '';
  position: absolute;
  width: 240px;
  height: 240px;
  border: 1px solid rgba(168, 137, 122, 0.12);
  border-radius: 50%;
  pointer-events: none;
}

.instagram-section::before {
  top: -130px;
  left: -110px;
}

.instagram-section::after {
  right: -130px;
  bottom: -140px;
}

.instagram-section__inner {
  position: relative;
  z-index: 1;
  width: min(1180px, 100%);
  margin: 0 auto;
}

.instagram-section__header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.15rem;
  margin-bottom: 1.5rem;
}

.instagram-section__header-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
}

.instagram-section__eyebrow {
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 0.6rem;
  letter-spacing: 0.36em;
  text-transform: uppercase;
  color: var(--accent-dark, #a8897a);
}

.instagram-section__title {
  margin: 0;
  font-family: var(--font-display, 'Playfair Display', serif);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: var(--text, #1a1612);
}

.instagram-section__title em {
  display: inline-block;
  margin-left: 0.15em;
  font-family: var(--font-script, 'Great Vibes', cursive);
  font-size: 1.3em;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  text-transform: none;
  color: var(--accent-dark, #a8897a);
}

.instagram-section__floral {
  flex-shrink: 0;
  opacity: 0.52;
}

.instagram-section__floral--reverse {
  transform: scaleX(-1);
}

.instagram-section__intro {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: min(720px, 100%);
  margin: 0 auto 3rem;
}

.instagram-section__intro p {
  margin: 0;
  max-width: 520px;
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 0.72rem;
  line-height: 1.8;
  letter-spacing: 0.07em;
  text-align: center;
  color: var(--text-light, #6b5c52);
}

.instagram-section__line {
  width: 40px;
  height: 1px;
  flex-shrink: 0;
  background: rgba(168, 137, 122, 0.48);
}

.instagram-section__widget-shell {
  position: relative;
  padding: 2.2rem 2.2rem 1.8rem;
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.48),
      rgba(255, 255, 255, 0.18)
    ),
    var(--cream, #f5ede6);
  border: 1px solid rgba(168, 137, 122, 0.18);
  box-shadow:
    0 4px 10px rgba(51, 36, 28, 0.04),
    0 20px 45px rgba(51, 36, 28, 0.08),
    0 60px 100px rgba(51, 36, 28, 0.05);
}

.instagram-section__widget-shell::before {
  content: '';
  position: absolute;
  inset: 8px;
  border: 1px solid rgba(168, 137, 122, 0.12);
  pointer-events: none;
}

.instagram-section__widget {
  position: relative;
  z-index: 1;
  min-height: 240px;
}

.instagram-section__ornament {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--accent-dark, #a8897a);
}

.instagram-section__ornament > span:not(.instagram-section__ornament-text) {
  width: 44px;
  height: 1px;
  background: rgba(168, 137, 122, 0.35);
}

.instagram-section__ornament--top {
  margin-bottom: 1.6rem;
}

.instagram-section__ornament--bottom {
  margin-top: 1.4rem;
}

.instagram-section__ornament-text {
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 0.52rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-dark, #a8897a);
}

.instagram-section__footer {
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
}

.instagram-section__button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  min-height: 46px;
  padding: 0.9rem 1.6rem;
  overflow: hidden;
  border: 1px solid var(--accent-dark, #a8897a);
  color: var(--text, #1a1612);
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.instagram-section__button::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  transform: translateY(102%);
  background: var(--accent-dark, #a8897a);
  transition: transform 0.3s ease;
}

.instagram-section__button:hover {
  color: #fff;
  transform: translateY(-1px);
}

.instagram-section__button:hover::before {
  transform: translateY(0);
}

:deep(.sk-instagram-feed) {
  width: 100% !important;
  max-width: 100% !important;
}

/*
 * On peut influencer les éléments HTML injectés par SociableKIT
 * lorsqu'ils ne sont pas rendus dans une iframe.
 * Si SociableKIT change ses classes internes, le widget continuera
 * à fonctionner ; seuls ces raffinements éventuels peuvent disparaître.
 */
:deep(.sk-instagram-feed img) {
  display: block;
  transition:
    transform 0.45s ease,
    filter 0.45s ease;
}

:deep(.sk-instagram-feed a:hover img) {
  transform: scale(1.025);
  filter: saturate(0.93);
}

@media (max-width: 800px) {
  .instagram-section {
    padding: 5rem 1rem 5.5rem;
  }

  .instagram-section__widget-shell {
    padding: 1.5rem 1.25rem;
  }

  .instagram-section__intro {
    margin-bottom: 2.2rem;
  }
}

@media (max-width: 600px) {
  .instagram-section {
    padding: 4rem 1rem 4.5rem;
  }

  .instagram-section__floral {
    display: none;
  }

  .instagram-section__intro {
    gap: 0.65rem;
  }

  .instagram-section__line {
    width: 20px;
  }

  .instagram-section__intro p {
    font-size: 0.66rem;
    line-height: 1.7;
  }

  .instagram-section__widget-shell {
    padding: 1.2rem 0.85rem 1rem;
  }

  .instagram-section__widget-shell::before {
    inset: 5px;
  }

  .instagram-section__ornament--top {
    margin-bottom: 1rem;
  }

  .instagram-section__ornament--bottom {
    margin-top: 1rem;
  }

  .instagram-section__button {
    width: 100%;
    max-width: 330px;
    padding-inline: 1rem;
    font-size: 0.55rem;
    letter-spacing: 0.13em;
  }
}

@media (prefers-reduced-motion: reduce) {
  .instagram-section__button,
  .instagram-section__button::before,
  :deep(.sk-instagram-feed img) {
    transition: none;
  }
}
</style>