<script setup lang="ts">
useSeoMeta({
  title: 'Safia Moments de Vie — Photographe mariage, grossesse & formation photo',
  description: 'Photographe à Mouscron pour mariage, grossesse, portraits et entrepreneures. Découvrez aussi les formations photo personnalisées de Safia Moments de Vie.',
})

const tabs = ['Mariages', 'Brandshooting']
const activeTab = ref('Mariages')
const heroImg = '/images/polaroid1.jpg'
const approchePolaroids = ['/images/polaroid4.jpg', '/images/galery/mariage6.jpg', '/images/galery/mariage9.jpg']
const collectionsImages = {
  Mariages: ['/images/galery/mariage11.jpg','/images/galery/mariage6.jpg','/images/galery/mariage3.JPG','/images/galery/mariage4.JPG','/images/galery/mariage7.jpg','/images/galery/mariage6.JPG'],
  Brandshooting: ['/images/galery/entrepreneur6.jpg','/images/galery/entrepreneur8.jpg','/images/galery/entrepreneur3.jpg','/images/galery/entrepreneur13.jpg','/images/galery/entrepreneur14.jpg','/images/galery/entrepreneur10.jpg'],
}
const galleryImgs = computed(() => collectionsImages[activeTab.value as keyof typeof collectionsImages])

const faq = [
  { q: 'Comment réserver une séance photo avec Safia ?', a: 'Envoyez votre demande via le formulaire de contact en précisant le type de séance, la période souhaitée et votre projet. Safia revient ensuite vers vous pour confirmer les possibilités et vous proposer la formule adaptée.' },
  { q: 'Où se déroulent les séances ?', a: 'Safia est basée à Mouscron et se déplace selon les projets. Le lieu est choisi en fonction de l’ambiance recherchée : extérieur, lieu de réception, domicile ou autre décor adapté à votre histoire.' },
  { q: 'Quand faut-il réserver une séance grossesse ?', a: 'Le mieux est d’anticiper afin de choisir sereinement la période et le lieu. Indiquez votre terme dans votre demande : Safia pourra vous conseiller le moment le plus adapté.' },
  { q: 'Proposez-vous des reportages de mariage ?', a: 'Oui. Les prestations mariage sont construites selon votre journée et vos besoins, des préparatifs aux moments forts de la célébration. Un devis personnalisé peut être établi après échange.' },
  { q: 'Safia propose-t-elle des formations photo ?', a: 'Oui. Les formations peuvent être personnalisées selon votre niveau, votre matériel et l’objectif que vous souhaitez travailler. Une demande permet d’identifier précisément votre besoin avant de proposer le format et le tarif adaptés.' },
  { q: 'Comment connaître le tarif exact de mon projet ?', a: 'Chaque projet peut être différent. Décrivez votre besoin via le formulaire : vous recevrez une proposition adaptée au type de séance, au lieu, à la durée et aux options souhaitées.' },
]
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <span class="hero__eyebrow">Photographe · Mouscron & alentours</span>
      <h1 class="hero__title">Raconter<br>l'essentiel</h1>
      <p class="hero__subtitle">Vos instants. Votre histoire.</p>
      <p class="hero__desc">Mariage, grossesse, portraits et image de marque : des souvenirs sincères, des émotions vraies, immortalisées avec douceur et authenticité.</p>
      <div class="home-hero-actions">
        <NuxtLink to="/contact" class="hero__btn">Parler de mon projet <span>→</span></NuxtLink>
        <NuxtLink to="/portfolio" class="home-text-link">Découvrir le portfolio</NuxtLink>
      </div>
      <div class="home-reassurance"><span>♡ Échange personnalisé</span><span>♡ Devis sur mesure</span><span>♡ 6 ans d'expérience</span></div>
    </div>
    <div class="hero__image-wrap">
      <div class="hero__image-arch"><img :src="heroImg" alt="Photographe Safia Moments de Vie" /></div>
      <div class="hero__badge">Photographe<br>Storyteller</div>
    </div>
  </section>

  <section class="home-choices">
    <div class="home-section-head"><span>Votre histoire</span><h2>Que souhaitez-vous raconter ?</h2><p>Choisissez l’expérience qui vous ressemble et découvrez une page pensée pour votre projet.</p></div>
    <div class="home-choice-grid">
      <NuxtLink to="/meta-grossesse" class="home-choice-card"><span>01</span><h3>Grossesse</h3><p>Une séance douce et naturelle pour garder une trace de cette période unique.</p><strong>Découvrir →</strong></NuxtLink>
      <NuxtLink to="/meta-mariage" class="home-choice-card"><span>02</span><h3>Mariage</h3><p>Un reportage vivant, élégant et sincère pour raconter votre journée telle qu’elle a été vécue.</p><strong>Découvrir →</strong></NuxtLink>
      <NuxtLink to="/meta-formation-photo" class="home-choice-card home-choice-card--featured"><span>03 · Formation</span><h3>Progresser en photo</h3><p>Un accompagnement ciblé selon votre niveau et l’objectif précis que vous voulez maîtriser.</p><strong>Faire le point sur mon besoin →</strong></NuxtLink>
    </div>
  </section>

  <section class="approche">
    <div class="approche__content"><h2 class="approche__heading">Mon approche</h2><p class="approche__text">Discrète et bienveillante, j'immortalise les émotions vraies et les détails qui font toute la beauté de votre histoire.</p><NuxtLink to="/a-propos" class="approche__link">En savoir plus →</NuxtLink></div>
    <div class="approche__photos"><div v-for="(img, i) in approchePolaroids" :key="i" class="approche__photo"><img :src="img" :alt="'Univers Safia ' + (i + 1)" /></div></div>
    <div class="approche__quote"><span class="approche__quote-mark">"</span><p class="approche__quote-text">Ce que j'aime,<br>c'est figer l'instant<br>pour qu'il devienne<br>un souvenir pour toujours.</p><span class="approche__quote-heart">♡</span></div>
  </section>

  <section class="collections">
    <div class="collections__header"><h2 class="collections__title">Explorer les collections</h2><ul class="collections__tabs"><li v-for="tab in tabs" :key="tab" class="collections__tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">{{ tab }}</li></ul></div>
    <div class="collections__grid"><div v-for="(img, i) in galleryImgs" :key="activeTab + '-' + i" class="collections__item"><img :src="img" :alt="'Photo ' + activeTab + ' ' + (i + 1)" /></div></div>
    <div class="collections__cta"><NuxtLink to="/portfolio">Voir tout le portfolio →</NuxtLink></div>
  </section>

  <section class="google-reviews">
    <div class="home-section-head"><span>Ils racontent leur expérience</span><h2>Les mots de mes clients</h2></div>
    <div class="google-review-shell">
      <div class="google-review-brand"><span class="google-g">G</span><div><strong>Avis Google</strong><div class="google-stars" aria-label="Avis Google">★★★★★</div></div></div>
      <div class="google-review-message"><p>Découvrez les témoignages authentiques laissés directement sur la fiche Google de Safia Moments de Vie.</p><small>Les avis sont consultables à leur source afin de toujours afficher des témoignages authentiques et à jour.</small></div>
      <a href="https://share.google/r1lLL1d1cZaRdhwRA" target="_blank" rel="noopener noreferrer" class="google-review-link">Voir les avis Google →</a>
    </div>
  </section>

  <section class="home-faq">
    <div class="home-section-head"><span>Avant de réserver</span><h2>Questions fréquentes</h2><p>Les réponses essentielles pour préparer votre séance ou votre formation sereinement.</p></div>
    <div class="home-faq-list"><details v-for="item in faq" :key="item.q" class="home-faq-item"><summary>{{ item.q }}<span>+</span></summary><p>{{ item.a }}</p></details></div>
  </section>

  <section class="home-final-cta"><span>Une idée, une date, une envie ?</span><h2>Racontez-moi votre projet.</h2><p>Quelques lignes suffisent pour commencer. Je vous répondrai avec une proposition adaptée à votre histoire et à vos besoins.</p><NuxtLink to="/contact" class="hero__btn">Demander mon devis <span>→</span></NuxtLink></section>
</template>

<style scoped>
.home-hero-actions{display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap}.home-text-link{font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;border-bottom:1px solid var(--accent-dark);padding-bottom:3px}.home-reassurance{display:flex;gap:1rem;flex-wrap:wrap;font-size:.68rem;color:var(--text-light)}
.home-choices,.google-reviews,.home-faq{padding:6rem max(1.5rem,7vw);background:var(--cream)}.home-section-head{text-align:center;max-width:700px;margin:0 auto 3rem}.home-section-head>span,.home-final-cta>span{font-size:.62rem;letter-spacing:.28em;text-transform:uppercase;color:var(--accent-dark)}.home-section-head h2,.home-final-cta h2{font-family:var(--font-display);font-size:clamp(2rem,4vw,3.4rem);font-weight:400;line-height:1.1;margin:.6rem 0 1rem}.home-section-head p,.home-final-cta p{color:var(--text-light);font-size:.86rem;line-height:1.8}.home-choice-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:1120px;margin:auto}.home-choice-card{padding:2.4rem;background:rgba(255,255,255,.42);border:1px solid var(--cream-dark);min-height:260px;display:flex;flex-direction:column;transition:.25s}.home-choice-card:hover{transform:translateY(-4px);background:rgba(255,255,255,.7)}.home-choice-card--featured{background:var(--dark);color:#fff}.home-choice-card>span{font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent-dark)}.home-choice-card h3{font-family:var(--font-display);font-size:1.8rem;font-weight:400;margin:1rem 0}.home-choice-card p{font-size:.8rem;line-height:1.8;opacity:.72}.home-choice-card strong{margin-top:auto;padding-top:1.5rem;font-size:.62rem;letter-spacing:.13em;text-transform:uppercase;font-weight:500}
.google-reviews{background:#fff}.google-review-shell{max-width:920px;margin:auto;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:2rem;padding:1.8rem 2rem;border:1px solid var(--cream-dark);box-shadow:0 12px 40px rgba(50,38,30,.06)}.google-review-brand{display:flex;align-items:center;gap:.8rem;white-space:nowrap}.google-g{font-family:Arial,sans-serif;font-size:2rem;font-weight:700;color:#4285f4}.google-review-brand strong{font-size:.78rem}.google-stars{color:#f4b400;letter-spacing:.08em;font-size:.9rem}.google-review-message p{font-family:var(--font-display);font-size:1rem;margin-bottom:.3rem}.google-review-message small{font-size:.65rem;color:var(--text-light)}.google-review-link{font-size:.62rem;letter-spacing:.13em;text-transform:uppercase;padding:.75rem 1rem;background:var(--cream);white-space:nowrap}
.home-faq-list{max-width:850px;margin:auto;border-top:1px solid var(--cream-dark)}.home-faq-item{border-bottom:1px solid var(--cream-dark);padding:0 1rem}.home-faq-item summary{list-style:none;cursor:pointer;padding:1.4rem 0;display:flex;justify-content:space-between;gap:1rem;font-family:var(--font-display);font-size:1.05rem}.home-faq-item summary::-webkit-details-marker{display:none}.home-faq-item summary span{color:var(--accent-dark);font-family:var(--font-body);font-weight:300}.home-faq-item[open] summary span{transform:rotate(45deg)}.home-faq-item p{padding:0 2.5rem 1.5rem 0;color:var(--text-light);font-size:.8rem;line-height:1.8}
.home-final-cta{text-align:center;background:var(--dark);color:#fff;padding:6rem 1.5rem}.home-final-cta p{max-width:560px;margin:0 auto 1.8rem;color:rgba(255,255,255,.65)}.home-final-cta .hero__btn{margin:auto}
@media(max-width:800px){.home-choice-grid{grid-template-columns:1fr}.home-choice-card{min-height:220px}.google-review-shell{grid-template-columns:1fr;text-align:center}.google-review-brand{justify-content:center}.google-review-link{justify-self:center}.home-choices,.google-reviews,.home-faq{padding-top:4rem;padding-bottom:4rem}.home-reassurance{font-size:.62rem}}
</style>