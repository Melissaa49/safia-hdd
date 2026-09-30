<script setup lang="ts">
useSeoMeta({
  title: 'Photographe Mouscron | Mariage, Branding & Formation – Safia',
  description: 'Photographe à Mouscron : mariage, branding pour entrepreneurs et formation photo avec Safia Moments de Vie. Découvrez ses réalisations, les avis clients et contactez-la.',
  ogTitle: 'Safia Moments de Vie | Photographe à Mouscron',
  ogDescription: 'Mariage, photos de branding pour entrepreneurs et formation photographie à Mouscron. Portfolio, témoignages et demande de devis.',
  ogImage: '/images/polaroid1.jpg',
  ogType: 'website',
  robots: 'index, follow'
})
useHead({
  link: [{ rel: 'canonical', href: 'https://www.safiamomentsdevie.com/photographe-mouscron' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://www.safiamomentsdevie.com/#photographe',
      name: 'Safia Moments de Vie',
      url: 'https://www.safiamomentsdevie.com/photographe-mouscron',
      image: 'https://www.safiamomentsdevie.com/images/polaroid1.jpg',
      description: 'Photographe de mariage, photographe branding pour entrepreneurs et formatrice en photographie à Mouscron.',
      areaServed: [{ '@type': 'City', name: 'Mouscron' }, { '@type': 'Country', name: 'Belgique' }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations photographiques',
        itemListElement: [
          { '@type': 'OfferCatalog', name: 'Photographie de mariage', url: 'https://www.safiamomentsdevie.com/meta-mariage' },
          { '@type': 'OfferCatalog', name: 'Photographie de branding pour entrepreneurs', url: 'https://www.safiamomentsdevie.com/brand-shooting-mouscron' },
          { '@type': 'OfferCatalog', name: 'Formation photo', url: 'https://www.safiamomentsdevie.com/formation-photo-mouscron' }
        ]
      }
    })
  }]
})
const services = [
  { title: 'Photographe de mariage à Mouscron', text: 'Préparatifs, cérémonie, émotions, proches et détails : un reportage photographique qui conserve le récit de votre mariage, avec des images naturelles plutôt qu’une succession de poses.', image: '/images/galery/mariage11.jpg', alt: 'Reportage photographique de mariage réalisé par Safia', link: '/meta-mariage', cta: 'Découvrir les reportages mariage' },
  { title: 'Photographe branding pour entrepreneurs', text: 'Entrepreneurs, indépendants et professionnels : des portraits, gestes de métier et images d’ambiance pour votre site internet, vos réseaux sociaux et votre communication.', image: '/images/galery/entrepreneur6.jpg', alt: 'Séance photo de branding pour entrepreneur par Safia', link: '/brand-shooting-mouscron', cta: 'Préparer mon shooting de branding' },
  { title: 'Formation en photographie personnalisée', text: 'Débutants ou photographes souhaitant progresser : un accompagnement autour de votre matériel et de vos difficultés concrètes, de la lumière aux réglages et au cadrage.', image: '/images/polaroid2.jpg', alt: 'Formation en photographie proposée par Safia', link: '/meta-formation-photo', cta: 'Découvrir la formation photo' }
]
const steps = [
  { number: '01', title: 'Parlez de votre projet', text: 'Mariage, communication professionnelle ou formation : indiquez vos besoins, votre date éventuelle et le résultat recherché.' },
  { number: '02', title: 'Échangez avec Safia', text: 'Safia précise avec vous le déroulement, les possibilités et la formule adaptée à votre situation.' },
  { number: '03', title: 'Créez des images qui ont du sens', text: 'L’objectif : un reportage, une identité visuelle ou des compétences photo qui correspondent à votre projet.' }
]
const reviews = [
  { name: 'Sonia', quote: 'Safia est très gentille et patiente, nous avons fait appel à ses services pour nos photos de mariage et le résultat fut magnifique, je recommande sans hésiter' },
  { name: 'Centre Pluridisciplinaire Molière', quote: 'Une photographe exceptionnelle ! Talentueuse, professionnelle et passionnée. Je la recommande les yeux fermés.' },
  { name: 'chaimaa Fera', quote: 'Une expérience incroyable ! Safia sait capturer des moments magnifiques avec beaucoup de talent et de sensibilité. Les photos sont naturelles, lumineuses et reflètent parfaitement l’ambiance de la séance. Elle met vraiment à l’aise, même les plus timides, et le résultat est au-delà des attentes. Je recommande à 100 % !' }
]
const faqs = [
  { q: 'Qui contacter pour un photographe de mariage à Mouscron ?', a: 'Safia Moments de Vie réalise des reportages de mariage. Consultez son portfolio et indiquez la date, le lieu et les moments à photographier pour demander ses disponibilités.' },
  { q: 'Proposez-vous des photos de branding pour les entrepreneurs à Mouscron ?', a: 'Oui. Safia réalise des shootings de branding pour entrepreneurs, indépendants et professionnels : portraits, photographies de métier et images pour le site internet ou les réseaux sociaux.' },
  { q: 'Peut-on suivre une formation en photographie avec Safia ?', a: 'Oui. Safia propose un accompagnement photo personnalisé selon votre niveau, votre matériel et les techniques que vous souhaitez maîtriser.' },
  { q: 'Quelle différence entre une séance branding et un reportage mariage ?', a: 'Le reportage mariage raconte une journée et ses émotions. Le shooting branding crée des images utiles à l’identité et à la communication d’une activité professionnelle.' },
  { q: 'Safia photographie-t-elle uniquement à Mouscron ?', a: 'Safia est basée à Mouscron, en Belgique. Les possibilités de déplacement sont à préciser directement avec elle selon le lieu et la nature de votre projet.' },
  { q: 'Comment obtenir un devis pour un mariage ou un shooting professionnel ?', a: 'Utilisez le formulaire de contact en précisant votre type de prestation, votre date ou période, votre lieu et vos attentes. Safia pourra vous répondre avec une proposition adaptée.' },
  { q: 'Comment choisir une photographe à Mouscron ?', a: 'Examinez un portfolio représentatif, lisez les avis clients, vérifiez que le style photographique vous convient et échangez sur votre projet avant de réserver.' }
]
</script>

<template>
  <main class="local-page">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Safia Moments de Vie · Mouscron, Belgique</span>
        <h1>Photographe à Mouscron <em>mariage, branding & formation photo.</em></h1>
        <p>Vous préparez votre mariage, développez votre entreprise ou souhaitez progresser en photographie ? Safia Moments de Vie vous accompagne à Mouscron avec des reportages sensibles, des images de marque authentiques et des formations photo personnalisées.</p>
        <div class="actions"><NuxtLink class="button" to="/contact">Parler de mon projet <span aria-hidden="true">→</span></NuxtLink><NuxtLink class="secondary" to="/portfolio">Découvrir le portfolio</NuxtLink></div>
        <p class="reassurance">Mariage · Branding entrepreneur · Formation photographie</p>
      </div>
      <img class="hero-image" src="/images/polaroid1.jpg" alt="Safia Moments de Vie, photographe à Mouscron" fetchpriority="high" />
    </section>

    <section class="intro section">
      <span class="eyebrow">Une photographe pour vos moments importants</span>
      <h2>Une photographe à Mouscron pour vos souvenirs, votre marque et votre progression.</h2>
      <p>À Mouscron, Safia Moments de Vie réunit trois expertises complémentaires : la photographie de mariage pour raconter les moments forts d’une journée, le shooting branding pour donner un visage à votre entreprise et la formation en photographie pour vous aider à maîtriser votre appareil et votre regard. Son approche commence par l’écoute de vos attentes : une date et un lieu pour un mariage, un univers professionnel pour un shooting de marque, ou un blocage technique précis pour une formation.</p>
    </section>

    <section class="section services" aria-labelledby="prestations">
      <span class="eyebrow">Les prestations</span><h2 id="prestations">Mariage, branding entrepreneur ou formation photo : choisissez votre accompagnement</h2>
      <div class="service-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <NuxtLink :to="service.link" :aria-label="service.cta"><img :src="service.image" :alt="service.alt" loading="lazy" /></NuxtLink>
          <div class="service-copy"><h3>{{ service.title }}</h3><p>{{ service.text }}</p><NuxtLink :to="service.link">{{ service.cta }} <span aria-hidden="true">→</span></NuxtLink></div>
        </article>
      </div>
    </section>

    <section class="section local-guide" aria-labelledby="local-guide-title">
      <span class="eyebrow">Photographie à Mouscron</span>
      <h2 id="local-guide-title">À chaque recherche, une réponse précise.</h2>
      <div class="guide-grid">
        <article><h3>Vous préparez votre mariage ?</h3><p>Le reportage photo permet de retrouver les préparatifs, la cérémonie, les émotions et les instants spontanés. Pour connaître les possibilités, transmettez à Safia votre date, le lieu de réception et les moments que vous souhaitez immortaliser.</p><NuxtLink to="/meta-mariage" class="text-link">Photographe mariage à Mouscron →</NuxtLink></article>
        <article><h3>Vous êtes entrepreneur ou indépendant ?</h3><p>Un shooting de branding peut réunir portraits professionnels, détails de votre métier et images d’ambiance. Ces photographies sont pensées pour présenter votre activité de manière cohérente sur vos supports de communication.</p><NuxtLink to="/brand-shooting-mouscron" class="text-link">Photographe branding à Mouscron →</NuxtLink></article>
        <article><h3>Vous souhaitez apprendre la photographie ?</h3><p>Comprendre l’exposition, la vitesse, la mise au point, la lumière ou la composition : la formation photo personnalisée part de votre niveau et des difficultés que vous rencontrez avec votre propre matériel.</p><NuxtLink to="/meta-formation-photo" class="text-link">Formation photographie à Mouscron →</NuxtLink></article>
      </div>
    </section>
    <section class="section approach">
      <img src="/images/galery/mariage6.jpg" alt="Photographie de mariage naturelle réalisée par Safia" loading="lazy" />
      <div><span class="eyebrow">L'approche de Safia</span><h2>Des images sincères, sans vous faire jouer un rôle.</h2><p>Que vous soyez devant l’objectif pour la première fois ou que vous prépariez un événement important, l’essentiel est de vous sentir à l’aise. Safia privilégie les échanges, la spontanéité et une photographie attentive aux détails.</p><NuxtLink to="/a-propos" class="text-link">Faire connaissance avec Safia →</NuxtLink></div>
    </section>

    <section class="section process"><span class="eyebrow">Comment travailler avec Safia ?</span><h2>Un accompagnement simple, du premier message à votre projet.</h2><div class="steps"><article v-for="step in steps" :key="step.number"><span>{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></article></div></section>
    <section class="section portfolio"><span class="eyebrow">Quelques réalisations</span><h2>Découvrez le style de Safia avant de réserver.</h2>
      <div class="photo-grid"><img src="/images/galery/mariage11.jpg" alt="Photographie de mariage par Safia" loading="lazy"/><img src="/images/galery/entrepreneur6.jpg" alt="Brand shooting professionnel par Safia" loading="lazy"/><img src="/images/galery/mariage9.jpg" alt="Détail de reportage de mariage par Safia" loading="lazy"/></div>
      <NuxtLink to="/portfolio" class="text-link">Explorer le portfolio complet →</NuxtLink>
    </section>

    <section class="section testimonials" aria-labelledby="avis">
      <span class="eyebrow">Témoignages</span><h2 id="avis">Ce que disent les clients de Safia</h2>
      <div class="review-grid"><blockquote v-for="review in reviews" :key="review.name"><p>« {{ review.quote }} »</p><footer>— {{ review.name }}</footer></blockquote></div>
      <p class="review-note">Extraits d’avis déjà présentés sur le site de Safia. Consultez sa fiche Google pour les informations les plus récentes.</p>
    </section>

    <section class="section locality"><span class="eyebrow">Photographe à Mouscron et alentours</span><h2>Une photographe basée à Mouscron, en Belgique.</h2><p>Vous cherchez une photographe à Mouscron pour un mariage, un shooting de branding pour votre entreprise ou une formation en photographie ? Safia Moments de Vie est basée à Mouscron. Précisez votre besoin, la date éventuelle et le lieu de votre projet pour connaître ses disponibilités et les possibilités de déplacement. Pour découvrir les prestations en détail, consultez les pages dédiées au mariage, au branding et à la formation.</p><NuxtLink to="/contact" class="text-link">Demander une disponibilité →</NuxtLink></section>

    <section class="section faq"><span class="eyebrow">Questions fréquentes</span><h2>Questions fréquentes sur la photographie à Mouscron</h2><div class="faq-items"><details v-for="item in faqs" :key="item.q"><summary>{{ item.q }} <span aria-hidden="true">+</span></summary><p>{{ item.a }}</p></details></div></section>
    <section class="last-cta"><span class="eyebrow">Votre projet commence ici</span><h2>Et si on racontait votre histoire ?</h2><p>Mariage, branding pour entrepreneurs ou formation photo : indiquez votre projet et recevez une réponse adaptée.</p><NuxtLink to="/contact" class="button">Contacter Safia <span aria-hidden="true">→</span></NuxtLink></section>
  </main>
</template>

<style scoped>
.local-page{--ink:#302923;--accent:#977866;--cream:#f7f2ec;color:var(--ink);background:#fff}.section{padding:clamp(4rem,8vw,7rem) max(1.5rem,8vw)}.eyebrow{font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);font-weight:600}.local-page h1,.local-page h2,.local-page h3{font-family:var(--font-display,Georgia),Georgia,serif;font-weight:400;line-height:1.13}.local-page h1{font-size:clamp(3rem,6vw,6rem);margin:1.3rem 0}.local-page h2{font-size:clamp(2.2rem,4vw,4rem);margin:1rem 0 1.8rem}.local-page h3{font-size:1.8rem}.local-page p{line-height:1.8;color:#645a53}.hero{display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:6vw;padding:clamp(8rem,13vw,11rem) max(1.5rem,8vw) 5rem;background:var(--cream)}.hero-copy{max-width:690px}.hero h1 em{font-family:var(--font-script,Georgia),Georgia,serif;font-weight:400;color:var(--accent)}.hero-image{width:100%;height:min(68vh,690px);object-fit:cover;border-radius:48% 48% 2px 2px / 13% 13% 2px 2px}.actions{display:flex;align-items:center;gap:2rem;flex-wrap:wrap;margin:2rem 0}.button{display:inline-flex;gap:1rem;align-items:center;background:var(--accent);color:#fff!important;padding:1rem 1.5rem;text-decoration:none;font-size:.85rem}.secondary,.text-link{color:var(--ink);text-decoration:none;border-bottom:1px solid var(--accent);padding-bottom:.35rem}.reassurance{font-size:.8rem}.intro{max-width:1100px}.intro p{max-width:780px}.services,.testimonials,.locality{background:var(--cream)}.service-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2rem}.service-card{background:#fff}.service-card img{width:100%;height:340px;object-fit:cover;display:block}.service-copy{padding:2rem}.service-copy p{min-height:4.5rem}.service-copy a{color:var(--accent);text-decoration:underline;text-underline-offset:5px}.approach{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:7vw}.approach img{width:100%;height:540px;object-fit:cover}.photo-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;margin:2rem 0}.photo-grid img{width:100%;height:380px;object-fit:cover}.review-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.5rem}.review-grid blockquote{margin:0;background:#fff;padding:2rem}.review-grid footer{margin-top:1.5rem;font-size:.8rem;color:var(--accent)}.review-note{font-size:.8rem}.locality p{max-width:850px}.faq-items{max-width:900px}.faq details{border-bottom:1px solid #ddd1c5;padding:1.4rem 0}.faq summary{display:flex;justify-content:space-between;gap:1rem;cursor:pointer;font-family:var(--font-display,Georgia),Georgia,serif;font-size:1.25rem;list-style:none}.faq summary::-webkit-details-marker{display:none}.faq details p{padding-right:2rem}.last-cta{text-align:center;background:#302923;color:#fff;padding:6rem 1.5rem}.last-cta h2{color:#fff}.last-cta p{color:#e3d8d0}.last-cta .button{margin-top:1.2rem}@media(max-width:850px){.hero,.approach{grid-template-columns:1fr}.hero{padding-top:7rem}.hero-image{height:450px}.service-grid{grid-template-columns:1fr}.review-grid{grid-template-columns:1fr}.photo-grid img{height:230px}}@media(max-width:540px){.section{padding:4rem 1.4rem}.hero{padding:7rem 1.4rem 3rem}.hero h1{font-size:clamp(2.7rem,11vw,4rem)}.hero-image{height:370px}.service-card img{height:260px}.photo-grid{gap:.4rem}.photo-grid img{height:155px}.service-copy{padding:1.5rem}.actions{gap:1.3rem}}
.local-guide{background:#fff}.guide-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2rem}.guide-grid article{padding:2rem;background:var(--cream)}.guide-grid h3{font-size:1.6rem;margin:0 0 1rem}.guide-grid p{margin-bottom:1.5rem}.process{background:var(--cream)}.steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2rem}.steps article{border-top:1px solid #d5c4b8;padding-top:1.5rem}.steps article>span{font-size:.75rem;color:var(--accent)}.steps h3{font-size:1.5rem;margin:.7rem 0}.steps p{font-size:.9rem}@media(max-width:850px){.guide-grid,.steps{grid-template-columns:1fr}.guide-grid{gap:1rem}.steps{gap:1.5rem}}\n</style>
