<script setup lang="ts">
export interface Post {
  src: string
  caption: string
  date: string
  likes: number
  link: string
}

export interface SpreadPage {
  type: 'cover' | 'large' | 'duo' | 'back'
  post?: Post
  posts?: [Post, Post]
}

defineProps<{ page: SpreadPage }>()
</script>

<template>
  <div class="smp" :class="`smp--${page.type}`">

    <!-- COVER -->
    <div v-if="page.type === 'cover'" class="smp-cover">
      <div class="smp-cover__eyebrow">Sur Instagram</div>
      <div class="smp-cover__photo">
        <img src="/images/polaroid1.jpg" alt="Safia Moments de Vie" />
      </div>
      <div class="smp-cover__divider"></div>
      <div class="smp-cover__body">
        <p class="smp-cover__s1">Suivez mon</p>
        <p class="smp-cover__s2">univers</p>
        <div class="smp-cover__line"></div>
        <p class="smp-cover__sub">Mes dernières publications</p>
      </div>
      <div class="smp-cover__footer">
        <svg viewBox="0 0 24 24" class="smp-cover__ig" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#a8897a" stroke-width="1.2"/>
          <circle cx="12" cy="12" r="4.5" stroke="#a8897a" stroke-width="1.2"/>
          <circle cx="17.5" cy="6.5" r="1" fill="#a8897a"/>
        </svg>
        <p class="smp-cover__handle">@safia.moments.de.vie</p>
      </div>
    </div>

    <!-- LARGE -->
    <div v-else-if="page.type === 'large' && page.post" class="smp-large">
      <div class="smp-large__photo">
        <img :src="page.post.src" :alt="page.post.caption" loading="lazy" />
      </div>
      <div class="smp-large__meta">
        <div class="smp-large__row">
          <span class="smp-large__handle">@safia.moments.de.vie</span>
          <span class="smp-large__date">{{ page.post.date }}</span>
        </div>
        <p class="smp-large__caption">{{ page.post.caption }}</p>
        <span v-if="page.post.likes > 0" class="smp-large__likes">
          <svg viewBox="0 0 16 16" fill="none" width="11" height="11" aria-hidden="true">
            <path d="M8 13C8 13 2 9 2 5.5C2 3.5 3.3 2 5 2C6.1 2 7 2.6 8 3.3C9 2.6 9.9 2 11 2C12.7 2 14 3.5 14 5.5C14 9 8 13 8 13Z" stroke="#c4a898" stroke-width="1.1" fill="none"/>
          </svg>
          {{ page.post.likes }}
        </span>
      </div>
    </div>

    <!-- DUO -->
    <div v-else-if="page.type === 'duo' && page.posts" class="smp-duo">
      <div v-for="(post, i) in page.posts" :key="i" class="smp-duo__item">
        <div class="smp-duo__photo">
          <img :src="post.src" :alt="post.caption" loading="lazy" />
        </div>
        <div class="smp-duo__meta">
          <span v-if="post.likes > 0" class="smp-duo__likes">
            <svg viewBox="0 0 16 16" fill="none" width="9" height="9" aria-hidden="true">
              <path d="M8 13C8 13 2 9 2 5.5C2 3.5 3.3 2 5 2C6.1 2 7 2.6 8 3.3C9 2.6 9.9 2 11 2C12.7 2 14 3.5 14 5.5C14 9 8 13 8 13Z" stroke="#c4a898" stroke-width="1.1" fill="none"/>
            </svg>
            {{ post.likes }}
          </span>
          <span class="smp-duo__date">{{ post.date }}</span>
          <p class="smp-duo__caption">{{ post.caption.length > 60 ? post.caption.slice(0, 60) + '…' : post.caption }}</p>
        </div>
      </div>
    </div>

    <!-- BACK -->
    <div v-else-if="page.type === 'back'" class="smp-back">
      <svg width="28" height="72" viewBox="0 0 28 72" fill="none" aria-hidden="true" class="smp-back__floral">
        <path d="M14 0 C14 20 7 30 10 46 C12 58 9 68 14 72" stroke="#c4a898" stroke-width="0.9" fill="none"/>
        <circle cx="8"  cy="46" r="1.4" stroke="#c4a898" stroke-width="0.7" fill="none"/>
        <circle cx="16" cy="34" r="1.1" stroke="#c4a898" stroke-width="0.7" fill="none"/>
        <circle cx="8"  cy="22" r="1.3" stroke="#c4a898" stroke-width="0.7" fill="none"/>
      </svg>
      <div class="smp-back__body">
        <p class="smp-back__s1">À bientôt</p>
        <p class="smp-back__s2">sur Instagram</p>
        <div class="smp-back__line"></div>
        <svg viewBox="0 0 24 24" class="smp-back__ig" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#a8897a" stroke-width="1.2"/>
          <circle cx="12" cy="12" r="4.5" stroke="#a8897a" stroke-width="1.2"/>
          <circle cx="17.5" cy="6.5" r="1" fill="#a8897a"/>
        </svg>
        <a href="https://www.instagram.com/safia.moments.de.vie" target="_blank" rel="noopener" class="smp-back__handle">
          @safia.moments.de.vie
        </a>
        <p class="smp-back__cta">Rejoignez ma communauté</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* ── Base ───────────────────────────────────────── */
.smp {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: var(--font-body, 'Inter', sans-serif);
  position: relative;
}

/* ── COVER ──────────────────────────────────────── */
.smp--cover { background: var(--cream-dark, #ecddd3); }

.smp-cover {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 18px 20px;
  text-align: center;
  gap: 0;
}

.smp-cover__eyebrow {
  font-size: 0.52rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--accent-dark, #a8897a);
  margin-bottom: 10px;
  flex-shrink: 0;
}

.smp-cover__floral { opacity: 0.55; }

/* Photo avec cadre élégant */
.smp-cover__photo {
  width: calc(100% - 0px);
  flex: 1;
  min-height: 0;
  overflow: hidden;
  border-radius: 1px;
  outline: 1px solid rgba(196, 168, 152, 0.35);
  outline-offset: -4px;
  box-shadow: inset 0 0 0 4px var(--cream-dark, #ecddd3);
  position: relative;
  flex-shrink: 0;
  max-height: 52%;
}

.smp-cover__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

/* Séparateur entre photo et texte */
.smp-cover__divider {
  width: 32px;
  height: 1px;
  background: var(--accent, #c4a898);
  margin: 14px auto 12px;
  flex-shrink: 0;
}

.smp-cover__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
}

.smp-cover__s1 {
  font-family: var(--font-script, 'Great Vibes', cursive);
  font-size: 1.6rem;
  color: var(--accent-dark, #a8897a);
  line-height: 1.15;
}

.smp-cover__s2 {
  font-family: var(--font-script, 'Great Vibes', cursive);
  font-size: 2.3rem;
  color: var(--accent-dark, #a8897a);
  line-height: 1;
}

.smp-cover__line {
  display: none;
}

.smp-cover__sub {
  font-size: 0.5rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-light, #6b5c52);
  margin-top: 8px;
}

.smp-cover__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  padding-top: 10px;
  flex-shrink: 0;
}

.smp-cover__ig { width: 22px; height: 22px; opacity: 0.6; }

.smp-cover__handle {
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  color: var(--accent-dark, #a8897a);
}

/* ── LARGE ──────────────────────────────────────── */
.smp--large { background: var(--cream, #f5ede6); }

.smp-large {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.smp-large__photo {
  flex: 1;
  overflow: hidden;
  min-height: 0;
  background: var(--cream-dark, #ecddd3);
}

.smp-large__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.smp-large__meta {
  flex-shrink: 0;
  padding: 10px 14px 12px;
  background: var(--cream, #f5ede6);
  border-top: 1px solid var(--cream-dark, #ecddd3);
  min-height: 80px;
  max-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.smp-large__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.smp-large__handle {
  font-size: 0.58rem;
  font-weight: 600;
  color: var(--text, #1a1612);
}

.smp-large__date {
  font-size: 0.54rem;
  color: var(--text-light, #6b5c52);
}

.smp-large__caption {
  font-size: 0.6rem;
  color: var(--text-light, #6b5c52);
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.smp-large__likes {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.54rem;
  color: var(--accent-dark, #a8897a);
}

/* ── DUO ────────────────────────────────────────── */
.smp--duo { background: var(--cream, #f5ede6); }

.smp-duo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.smp-duo__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

.smp-duo__item:first-child {
  border-bottom: 2px solid var(--cream-dark, #ecddd3);
}

.smp-duo__photo {
  flex: 1;
  overflow: hidden;
  min-height: 0;
  background: var(--cream-dark, #ecddd3);
}

.smp-duo__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.smp-duo__meta {
  flex-shrink: 0;
  padding: 5px 10px 6px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  background: var(--cream, #f5ede6);
  border-top: 0.5px solid var(--cream-dark, #ecddd3);
  min-height: 38px;
}

.smp-duo__likes {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.52rem;
  color: var(--accent-dark, #a8897a);
  white-space: nowrap;
  flex-shrink: 0;
}

.smp-duo__date {
  font-size: 0.5rem;
  color: var(--text-light, #6b5c52);
  white-space: nowrap;
  flex-shrink: 0;
}

.smp-duo__caption {
  font-size: 0.55rem;
  color: var(--text-light, #6b5c52);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-width: 0;
}

/* ── BACK ───────────────────────────────────────── */
.smp--back { background: var(--approche-cream, #e8d0be); }

.smp-back {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 28px 24px;
  text-align: center;
}

.smp-back__floral { opacity: 0.55; }

.smp-back__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.smp-back__s1 {
  font-family: var(--font-script, 'Great Vibes', cursive);
  font-size: 1.7rem;
  color: var(--accent-dark, #a8897a);
  line-height: 1.1;
}

.smp-back__s2 {
  font-family: var(--font-script, 'Great Vibes', cursive);
  font-size: 2.4rem;
  color: var(--accent-dark, #a8897a);
  line-height: 1;
}

.smp-back__line {
  width: 36px;
  height: 1px;
  background: var(--accent, #c4a898);
  margin: 4px auto;
}

.smp-back__ig { width: 28px; height: 28px; opacity: 0.6; }

.smp-back__handle {
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: var(--accent-dark, #a8897a);
  text-decoration: none;
  transition: color 0.2s;
}

.smp-back__handle:hover { color: var(--text, #1a1612); }

.smp-back__cta {
  font-size: 0.54rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-light, #6b5c52);
}
</style>