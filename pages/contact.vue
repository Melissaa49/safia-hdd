<script setup lang="ts">
useSeoMeta({
  title: 'Contact — Safia HDD Photographe',
  description: "Contactez Safia pour réserver votre reportage de mariage ou votre programme de coaching photo.",
})

type Step = 'type' | 'formule' | 'details' | 'sent'

const step = ref<Step>('type')
const selectedType = ref<'photo' | 'formation' | null>(null)
const selectedFormule = ref<string | null>(null)

const form = reactive({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  date: '',
  message: '',
})

const photoFormules = [
  { id: 'mariage-essentielle', label: 'Mariage — Formule Essentielle', desc: "Préparatifs · Mairie · Parc · Vin d'honneur", prix: 'à partir de 1 100 €' },
  { id: 'mariage-complete', label: 'Mariage — Formule Complète', desc: 'Préparatifs · Mairie · Parc · Soirée', prix: 'à partir de 1 800 €' },
  { id: 'autre', label: 'Autre demande', desc: 'Séance couple, maternité, portrait, famille…', prix: 'Sur devis' },
]

const glowFormules = [
  { id: 'starter', label: 'Glow Up Starter', desc: '1 mois de suivi', prix: '199 € TVAC' },
  { id: 'mentoring', label: 'Glow Up Mentoring', desc: '2 mois de suivi', prix: '497 € TVAC' },
  { id: 'premium', label: 'Glow Up Premium', desc: '3 mois de suivi', prix: 'à partir de 1 890 € TVAC' },
]

const currentFormules = computed(() =>
  selectedType.value === 'photo' ? photoFormules : glowFormules
)

const canSubmitDetails = computed(() =>
  form.prenom.trim() && form.nom.trim() && form.email.trim() && form.message.trim()
)

function selectType(type: 'photo' | 'formation') {
  selectedType.value = type
  selectedFormule.value = null
  step.value = 'formule'
}

function selectFormule(id: string) {
  selectedFormule.value = id
}

function goToDetails() {
  if (!selectedFormule.value) return
  step.value = 'details'
}

function goBack() {
  if (step.value === 'formule') step.value = 'type'
  if (step.value === 'details') step.value = 'formule'
}

function submitForm() {
  if (!canSubmitDetails.value) return
  step.value = 'sent'
}

function reset() {
  step.value = 'type'
  selectedType.value = null
  selectedFormule.value = null
  form.prenom = ''
  form.nom = ''
  form.email = ''
  form.telephone = ''
  form.date = ''
  form.message = ''
}

const selectedFormuleLabel = computed(() => {
  const all = [...photoFormules, ...glowFormules]
  return all.find(f => f.id === selectedFormule.value)?.label ?? ''
})

const steps = [
  { key: 'type', label: 'Votre demande' },
  { key: 'formule', label: 'La formule' },
  { key: 'details', label: 'Vos coordonnées' },
]

const stepIndex = computed(() => {
  if (step.value === 'type') return 0
  if (step.value === 'formule') return 1
  if (step.value === 'details') return 2
  return 2
})
</script>

<template>
  <div class="contact">

    <!-- HERO -->
    <section class="ct-hero">
      <div class="ct-hero__content">
        <span class="ct-hero__eyebrow">Parlons de votre projet</span>
        <h1 class="ct-hero__title">Contact</h1>
        <p class="ct-hero__subtitle">Vos instants. Votre histoire.</p>
      </div>
    </section>

    <!-- MAIN -->
    <section class="ct-layout">

      <!-- COLONNE FORMULAIRE -->
      <div class="ct-form-col">

        <!-- CONFIRMATION -->
        <div v-if="step === 'sent'" class="ct-sent">
          <div class="ct-sent__arch">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="25" stroke="#c4a898" stroke-width="1"/>
              <path d="M15 26 L23 34 L37 18" stroke="#c4a898" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="ct-sent__eyebrow">Message envoyé</span>
          <h2 class="ct-sent__title">Merci {{ form.prenom }} !</h2>
          <p class="ct-sent__script">Je reviens vers vous très vite.</p>
          <p class="ct-sent__desc">
            Votre demande concernant <em>{{ selectedFormuleLabel }}</em>
            a bien été reçue. Je vous répondrai dans les 48h.
          </p>
          <div class="ct-sent__sep">
            <svg width="60" height="1" viewBox="0 0 60 1"><line x1="0" y1="0.5" x2="60" y2="0.5" stroke="#c4a898" stroke-width="1"/></svg>
            <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
              <path d="M12 36 C12 22 5 17 7 9 C9 4 7 1 12 0" stroke="#c4a898" stroke-width="0.8" fill="none"/>
              <circle cx="6" cy="9" r="1.2" stroke="#c4a898" stroke-width="0.6" fill="none"/>
              <circle cx="14" cy="16" r="1" stroke="#c4a898" stroke-width="0.6" fill="none"/>
            </svg>
            <svg width="60" height="1" viewBox="0 0 60 1"><line x1="0" y1="0.5" x2="60" y2="0.5" stroke="#c4a898" stroke-width="1"/></svg>
          </div>
          <button class="ct-sent__btn" @click="reset">Envoyer une autre demande</button>
        </div>

        <template v-else>

          <!-- PROGRESS BAR -->
          <div class="ct-progress">
            <div v-for="(s, i) in steps" :key="s.key" class="ct-progress__step" :class="{ done: stepIndex > i, active: stepIndex === i }">
              <div class="ct-progress__indicator">
                <span v-if="stepIndex > i" class="ct-progress__check">✓</span>
                <span v-else class="ct-progress__num">{{ i + 1 }}</span>
              </div>
              <span class="ct-progress__label">{{ s.label }}</span>
              <div v-if="i < steps.length - 1" class="ct-progress__line" :class="{ filled: stepIndex > i }" />
            </div>
          </div>

          <!-- ÉTAPE 1 : TYPE -->
          <div v-if="step === 'type'" class="ct-step">
            <p class="ct-step__intro">Que recherchez-vous ?</p>

            <div class="ct-type__grid">
              <button class="ct-type__card" @click="selectType('photo')">
                <div class="ct-type__img">
                  <img src="/images/polaroid1.jpg" alt="Photographie" />
                </div>
                <div class="ct-type__body">
                  <span class="ct-type__label">Photographie</span>
                  <span class="ct-type__sub">Mariage · Couple · Portrait · Famille</span>
                  <span class="ct-type__arrow">Choisir →</span>
                </div>
              </button>

              <button class="ct-type__card" @click="selectType('formation')">
                <div class="ct-type__img ct-type__img--dark">
                  <img src="/images/polaroid2.jpg" alt="Formation" />
                </div>
                <div class="ct-type__body">
                  <span class="ct-type__label">Formation</span>
                  <span class="ct-type__sub">Glow Up en Photo · Coaching · Mentoring</span>
                  <span class="ct-type__arrow">Choisir →</span>
                </div>
              </button>
            </div>
          </div>

          <!-- ÉTAPE 2 : FORMULE -->
          <div v-if="step === 'formule'" class="ct-step">
            <button class="ct-back" @click="goBack">← Retour</button>
            <p class="ct-step__intro">
              {{ selectedType === 'photo' ? 'Quelle formule vous intéresse ?' : 'Quel programme vous correspond ?' }}
            </p>

            <div class="ct-formule__list">
              <button v-for="f in currentFormules" :key="f.id" class="ct-formule__item" :class="{ selected: selectedFormule === f.id }" @click="selectFormule(f.id)">
                <div class="ct-formule__radio">
                  <span class="ct-formule__dot" />
                </div>
                <div class="ct-formule__info">
                  <span class="ct-formule__name">{{ f.label }}</span>
                  <span class="ct-formule__sub">{{ f.desc }}</span>
                </div>
                <span class="ct-formule__prix">{{ f.prix }}</span>
              </button>
            </div>

            <button class="ct-btn" :class="{ 'ct-btn--disabled': !selectedFormule }" @click="goToDetails">
              Continuer →
            </button>
          </div>

          <!-- ÉTAPE 3 : DÉTAILS -->
          <div v-if="step === 'details'" class="ct-step">
            <button class="ct-back" @click="goBack">← Retour</button>
            <p class="ct-step__intro">Vos coordonnées</p>
            <p class="ct-step__sub">
              Demande pour : <em class="ct-step__em">{{ selectedFormuleLabel }}</em>
            </p>

            <div class="ct-fields">
              <div class="ct-fields__row">
                <div class="ct-field">
                  <label class="ct-field__label">Prénom *</label>
                  <input v-model="form.prenom" class="ct-field__input" type="text" placeholder="Votre prénom" />
                </div>
                <div class="ct-field">
                  <label class="ct-field__label">Nom *</label>
                  <input v-model="form.nom" class="ct-field__input" type="text" placeholder="Votre nom" />
                </div>
              </div>

              <div class="ct-fields__row">
                <div class="ct-field">
                  <label class="ct-field__label">Email *</label>
                  <input v-model="form.email" class="ct-field__input" type="email" placeholder="votre@email.com" />
                </div>
                <div class="ct-field">
                  <label class="ct-field__label">Téléphone</label>
                  <input v-model="form.telephone" class="ct-field__input" type="tel" placeholder="+33 6 00 00 00 00" />
                </div>
              </div>

              <div v-if="selectedType === 'photo'" class="ct-field">
                <label class="ct-field__label">Date envisagée</label>
                <input v-model="form.date" class="ct-field__input" type="date" />
              </div>

              <div class="ct-field">
                <label class="ct-field__label">Votre message *</label>
                <textarea v-model="form.message" class="ct-field__textarea" rows="5" placeholder="Parlez-moi de votre projet, vos attentes, vos questions…" />
              </div>

              <p class="ct-fields__required">* Champs obligatoires</p>

              <button class="ct-btn" :class="{ 'ct-btn--disabled': !canSubmitDetails }" @click="submitForm">
                Envoyer ma demande →
              </button>
            </div>
          </div>

        </template>
      </div>

      <!-- ASIDE -->
      <aside class="ct-aside">
        <div class="ct-aside__arch">
          <img src="/images/polaroid3.jpg" alt="Safia HDD" />
        </div>
        <div class="ct-aside__body">
          <span class="ct-aside__eyebrow">Me retrouver</span>
          <h3 class="ct-aside__name">Safia HDD</h3>
          <p class="ct-aside__script">Photographe & Formatrice</p>

          <div class="ct-aside__sep" />

          <div class="ct-aside__items">
            <div class="ct-aside__item">
              <span class="ct-aside__dot">◯</span>
              <span>Lille, France</span>
            </div>
            <div class="ct-aside__item">
              <span class="ct-aside__dot">◯</span>
              <span>6 ans d'expérience</span>
            </div>
            <div class="ct-aside__item">
              <span class="ct-aside__dot">◯</span>
              <span>TVA BE 0455 025 614 — Belgique</span>
            </div>
            <div class="ct-aside__item">
              <span class="ct-aside__dot">◯</span>
              <a href="https://www.instagram.com/safiamomentdevie" target="_blank" rel="noopener" class="ct-aside__link">@safiamomentdevie</a>
            </div>
          </div>

          <div class="ct-aside__quote">
            <span class="ct-aside__qmark">"</span>
            <p>Chaque demande est lue avec attention. Je reviens vers vous dans les 48h.</p>
          </div>

          <a href="https://calendly.com/safiamomentsdevie/30min" target="_blank" rel="noopener" class="ct-aside__cta">Réserver un appel découverte →</a>
        </div>
      </aside>

    </section>

  </div>
</template>

<style scoped>
/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.ct-hero {
  min-height: 38vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 9rem 2rem 4rem;
  background-image: url('/images/bg-hero.png');
  background-size: cover;
  background-position: center;
}

.ct-hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.ct-hero__eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--text-light);
}

.ct-hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text);
  line-height: 1;
}

.ct-hero__subtitle {
  font-family: var(--font-script);
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  color: var(--accent-dark);
}

/* ══════════════════════════════════════
   LAYOUT
══════════════════════════════════════ */
.ct-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 5rem;
  padding: 5rem 5% 6rem;
  background: var(--cream);
  align-items: start;
}

.ct-form-col {
  min-height: 500px;
}

/* ══════════════════════════════════════
   PROGRESS
══════════════════════════════════════ */
.ct-progress {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 3.5rem;
  position: relative;
}

.ct-progress__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  position: relative;
}

.ct-progress__indicator {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--cream-dark);
  background: var(--cream);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s;
}

.ct-progress__step.active .ct-progress__indicator {
  border-color: var(--accent-dark);
  background: var(--white);
  box-shadow: 0 0 0 4px rgba(168, 137, 122, 0.12);
}

.ct-progress__step.done .ct-progress__indicator {
  border-color: var(--accent);
  background: var(--accent);
}

.ct-progress__num {
  font-size: 0.7rem;
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--cream-dark);
  transition: color 0.3s;
}

.ct-progress__step.active .ct-progress__num {
  color: var(--accent-dark);
}

.ct-progress__check {
  font-size: 0.75rem;
  color: var(--white);
}

.ct-progress__label {
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cream-dark);
  text-align: center;
  transition: color 0.3s;
  white-space: nowrap;
}

.ct-progress__step.active .ct-progress__label,
.ct-progress__step.done .ct-progress__label {
  color: var(--accent-dark);
}

.ct-progress__line {
  position: absolute;
  top: 18px;
  left: calc(50% + 18px);
  right: calc(-50% + 18px);
  height: 1px;
  background: var(--cream-dark);
  z-index: 1;
  transition: background 0.3s;
}

.ct-progress__line.filled {
  background: var(--accent);
}

/* ══════════════════════════════════════
   STEP COMMUN
══════════════════════════════════════ */
.ct-step__intro {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.4rem;
  line-height: 1.2;
}

.ct-step__sub {
  font-size: 0.83rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.ct-step__em {
  color: var(--accent-dark);
  font-style: italic;
}

.ct-back {
  background: none;
  border: none;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-light);
  cursor: pointer;
  font-family: var(--font-body);
  margin-bottom: 1.75rem;
  padding: 0;
  transition: color 0.2s;
  display: block;
}

.ct-back:hover { color: var(--accent-dark); }

/* ══════════════════════════════════════
   TYPE CARDS
══════════════════════════════════════ */
.ct-type__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.ct-type__card {
  background: var(--white);
  border: 1px solid var(--cream-dark);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  font-family: var(--font-body);
  text-align: left;
  transition: border-color 0.25s, box-shadow 0.25s;
  overflow: hidden;
}

.ct-type__card:hover {
  border-color: var(--accent);
  box-shadow: 0 8px 28px rgba(196, 168, 152, 0.22);
}

.ct-type__img {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.ct-type__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.ct-type__card:hover .ct-type__img img {
  transform: scale(1.04);
}

.ct-type__body {
  padding: 1.5rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.ct-type__label {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
}

.ct-type__sub {
  font-size: 0.72rem;
  color: var(--text-light);
  line-height: 1.5;
}

.ct-type__arrow {
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-dark);
  margin-top: 0.6rem;
}

/* ══════════════════════════════════════
   FORMULES
══════════════════════════════════════ */
.ct-formule__list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 2.5rem;
}

.ct-formule__item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.1rem 1.4rem;
  background: var(--white);
  border: 1px solid var(--cream-dark);
  cursor: pointer;
  font-family: var(--font-body);
  text-align: left;
  transition: border-color 0.2s;
}

.ct-formule__item:hover { border-color: var(--accent); }

.ct-formule__item.selected {
  border-color: var(--accent-dark);
  background: var(--cream);
}

.ct-formule__radio {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid var(--cream-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.2s;
}

.ct-formule__item.selected .ct-formule__radio {
  border-color: var(--accent-dark);
}

.ct-formule__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-dark);
  opacity: 0;
  transition: opacity 0.2s;
  display: block;
}

.ct-formule__item.selected .ct-formule__dot { opacity: 1; }

.ct-formule__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.ct-formule__name {
  font-size: 0.87rem;
  font-weight: 500;
  color: var(--text);
}

.ct-formule__sub {
  font-size: 0.72rem;
  color: var(--text-light);
  font-style: italic;
}

.ct-formule__prix {
  font-size: 0.7rem;
  color: var(--accent-dark);
  font-weight: 500;
  white-space: nowrap;
  padding-left: 1rem;
}

/* ══════════════════════════════════════
   BOUTON PRINCIPAL
══════════════════════════════════════ */
.ct-btn {
  font-size: 0.6rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  padding: 0.95rem 2.5rem;
  background: var(--accent);
  color: var(--white);
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  transition: background 0.2s;
  display: inline-block;
}

.ct-btn:hover { background: var(--accent-dark); }

.ct-btn--disabled {
  opacity: 0.38;
  cursor: not-allowed;
  pointer-events: none;
}

/* ══════════════════════════════════════
   CHAMPS
══════════════════════════════════════ */
.ct-fields {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.ct-fields__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.ct-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.ct-field__label {
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-light);
  font-family: var(--font-body);
}

.ct-field__input,
.ct-field__textarea {
  background: var(--white);
  border: 1px solid var(--cream-dark);
  border-bottom: 1.5px solid var(--cream-dark);
  padding: 0.8rem 1rem;
  font-size: 0.85rem;
  font-family: var(--font-body);
  color: var(--text);
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}

.ct-field__input:focus,
.ct-field__textarea:focus {
  border-color: var(--accent);
  border-bottom-color: var(--accent-dark);
}

.ct-field__textarea {
  resize: vertical;
  min-height: 130px;
}

.ct-fields__required {
  font-size: 0.65rem;
  color: var(--text-light);
  font-style: italic;
  margin-top: -0.25rem;
}

/* ══════════════════════════════════════
   CONFIRMATION
══════════════════════════════════════ */
.ct-sent {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  gap: 0.9rem;
}

.ct-sent__arch {
  width: 90px;
  height: 90px;
  border-radius: 50% 50% 0 0 / 50% 50% 0 0;
  background: var(--approche-cream);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.ct-sent__eyebrow {
  font-size: 0.6rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent-dark);
}

.ct-sent__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

.ct-sent__script {
  font-family: var(--font-script);
  font-size: clamp(1.3rem, 2vw, 1.8rem);
  color: var(--accent-dark);
}

.ct-sent__desc {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.8;
  max-width: 36ch;
}

.ct-sent__desc em { color: var(--accent-dark); font-style: italic; }

.ct-sent__sep {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
}

.ct-sent__btn {
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.8rem 1.8rem;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--accent-dark);
  cursor: pointer;
  font-family: var(--font-body);
  transition: background 0.2s, color 0.2s;
  margin-top: 0.5rem;
}

.ct-sent__btn:hover {
  background: var(--accent);
  color: var(--white);
}

/* ══════════════════════════════════════
   ASIDE
══════════════════════════════════════ */
.ct-aside {
  position: sticky;
  top: 6rem;
}

.ct-aside__arch {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 50% 50% 0 0 / 18% 18% 0 0;
  overflow: hidden;
  margin-bottom: 2rem;
}

.ct-aside__arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ct-aside__body {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.ct-aside__eyebrow {
  font-size: 0.58rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-dark);
}

.ct-aside__name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

.ct-aside__script {
  font-family: var(--font-script);
  font-size: 1.3rem;
  color: var(--accent-dark);
  margin-top: -0.25rem;
}

.ct-aside__sep {
  width: 40px;
  height: 1px;
  background: var(--accent);
  margin: 0.25rem 0;
}

.ct-aside__items {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.ct-aside__item {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.78rem;
  color: var(--text-light);
  line-height: 1.5;
}

.ct-aside__dot {
  color: var(--accent);
  font-size: 0.52rem;
  flex-shrink: 0;
}

.ct-aside__link {
  color: var(--accent-dark);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.ct-aside__link:hover { border-color: var(--accent-dark); }

.ct-aside__quote {
  background: var(--approche-cream);
  padding: 1.25rem 1.25rem 1.25rem 1.5rem;
  border-left: 2px solid var(--accent);
  margin-top: 0.25rem;
}

.ct-aside__qmark {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--accent);
  line-height: 0.5;
  display: block;
  margin-bottom: 0.75rem;
  opacity: 0.6;
}

.ct-aside__quote p {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.82rem;
  color: var(--text-light);
  line-height: 1.7;
}

.ct-aside__cta {
  display: block;
  text-align: center;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.85rem 1rem;
  border: 1px solid var(--accent);
  color: var(--accent-dark);
  font-family: var(--font-body);
  transition: background 0.2s, color 0.2s;
  margin-top: 0.25rem;
}

.ct-aside__cta:hover {
  background: var(--accent);
  color: var(--white);
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .ct-hero { padding: 8rem 1.5rem 3rem; }

  .ct-layout {
    grid-template-columns: 1fr;
    padding: 3rem 1.5rem;
    gap: 3rem;
  }

  .ct-aside { position: static; }

  .ct-aside__arch { max-width: 280px; margin: 0 auto 2rem; }

  .ct-type__grid { grid-template-columns: 1fr 1fr; }

  .ct-fields__row { grid-template-columns: 1fr; }

  .ct-progress__label { display: none; }
}

@media (max-width: 500px) {
  .ct-type__grid { grid-template-columns: 1fr; }
  .ct-formule__prix { display: none; }
  .ct-progress__label { display: none; }
}
</style>