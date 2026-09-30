<script setup lang="ts">
useSeoMeta({
  title: 'Photographe à Mouscron | Mariage, Portrait & Brand Shooting – Safia',
  description: 'Vous recherchez une photographe à Mouscron ? Découvrez les reportages mariage, portraits et brand shootings de Safia Moments de Vie. Portfolio, avis et contact.',
  ogTitle: 'Safia Moments de Vie | Photographe à Mouscron',
  ogDescription: 'Mariages, portraits et images de marque : découvrez le travail de Safia, photographe à Mouscron, et échangeons sur votre projet.',
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
      description: 'Photographie de mariage, portrait et brand shooting à Mouscron et alentours.',
      areaServed: [{ '@type': 'City', name: 'Mouscron' }, { '@type': 'Country', name: 'Belgique' }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations photographiques',
        itemListElement: [
          { '@type': 'OfferCatalog', name: 'Photographie de mariage', url: 'https://www.safiamomentsdevie.com/photographe-mariage-mouscron' },
          { '@type': 'OfferCatalog', name: 'Brand shooting', url: 'https://www.safiamomentsdevie.com/brand-shooting-mouscron' },
          { '@type': 'OfferCatalog', name: 'Formation photo', url: 'https://www.safiamomentsdevie.com/formation-photo-mouscron' }
        ]
      }
    })
  }]
})
const services = [
  { title: 'Photographe de mariage', text: 'Les émotions, les gestes spontanés et les détails qui racontent votre journée, avec un reportage sensible et naturel.', image: '/images/galery/mariage11.jpg', alt: 'Reportage de mariage photographié par Safia', link: '/photographe-mariage-mouscron', cta: 'Découvrir les mariages' },
  { title: 'Brand shooting & portraits professionnels', text: 'Des photographies qui donnent un visage à votre activité et créent une identité visuelle cohérente.', image: '/images/galery/entrepreneur6.jpg', alt: 'Portrait professionnel par Safia Moments de Vie', link: '/brand-shooting-mouscron', cta: 'Découvrir le brand shooting' },
  { title: 'Portraits & séances photo', text: 'Un moment pour vous, à deux ou autour d’un projet personnel, dans une ambiance qui vous ressemble.', image: '/images/galery/entrepreneur8.jpg', alt: 'Portrait réalisé par Safia', link: '/portfolio', cta: 'Voir les réalisations' },
  { title: 'Formation photographie', text: 'Un accompagnement adapté à votre niveau, à votre matériel et aux difficultés que vous souhaitez dépasser.', image: '/images/polaroid2.jpg', alt: 'Accompagnement à la photographie', link: '/formation-photo-mouscron', cta: 'Découvrir la formation' }
]
const reviews = [
  { name: 'Sonia', quote: 'Safia est très gentille et patiente, nous avons fait appel à ses services pour nos photos de mariage et le résultat fut magnifique, je recommande sans hésiter' },
  { name: 'Centre Pluridisciplinaire Molière', quote: 'Une photographe exceptionnelle ! Talentueuse, professionnelle et passionnée. Je la recommande les yeux fermés.' },
  { name: 'chaimaa Fera', quote: 'Une expérience incroyable ! Safia sait capturer des moments magnifiques avec beaucoup de talent et de sensibilité. Les photos sont naturelles, lumineuses et reflètent parfaitement l’ambiance de la séance. Elle met vraiment à l’aise, même les plus timides, et le résultat est au-delà des attentes. Je recommande à 100 % !' }
]
const faqs = [
  { q: 'Comment trouver une photographe à Mouscron pour mon mariage ?', a: 'Découvrez les reportages de Safia dans son portfolio, puis indiquez la date, le lieu et les moments que vous souhaitez photographier dans le formulaire de contact. Elle pourra vous confirmer ses disponibilités.' },
  { q: 'Quels types de séances photo propose Safia à Mouscron ?', a: 'Safia présente des prestations de photographie de mariage, de portraits, de brand shooting pour professionnels et de formation photo personnalisée.' },
  { q: 'Safia se déplace-t-elle en dehors de Mouscron ?', a: 'Les déplacements dépendent de votre projet. Précisez le lieu envisagé lors de votre demande pour connaître les possibilités.' },
  { q: 'Comment connaître le tarif d’une séance photo ?', a: 'Le tarif dépend de la prestation et de votre projet. Consultez la page tarifs ou contactez Safia pour obtenir une proposition adaptée.' },
  { q: 'Comment réserver une séance avec Safia ?', a: 'Envoyez votre demande via le formulaire de contact en précisant votre projet et la période souhaitée. Safia pourra ensuite échanger avec vous sur les modalités.' }
]
</script>

<template>
  <main class="local-page">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Safia Moments de Vie · Mouscron, Belgique</span>
        <h1>Photographe à Mouscron <em>pour raconter votre histoire.</em></h1>
        <p>Un mariage, un portrait, une entreprise à mettre en lumière : Safia crée des images naturelles et sensibles qui donnent une place à ce qui compte pour vous.</p>
        <div class="actions"><NuxtLink class="button" to="/contact">Parler de mon projet <span aria-hidden="true">→</span></NuxtLink><NuxtLink class="secondary" to="/portfolio">Découvrir le portfolio</NuxtLink></div>
        <p class="reassurance">Photographie de mariage · Portraits · Brand shooting · Formation</p>
      </div>
      <img class="hero-image" src="/images/polaroid1.jpg" alt="Safia Moments de Vie, photographe à Mouscron" fetchpriority="high" />
    </section>

    <section class="intro section">
      <span class="eyebrow">Une photographe pour vos moments importants</span>
      <h2>Des photos qui vous ressemblent, à Mouscron et selon votre projet.</h2>
      <p>Vous recherchez une photographe à Mouscron pour conserver les souvenirs d’un mariage, créer des portraits ou présenter votre activité ? Safia Moments de Vie vous accompagne avec une approche centrée sur les personnes, les émotions et les images qui ont du sens. Chaque séance commence par un échange sur vos envies, votre univers et le résultat que vous souhaitez obtenir.</p>
    </section>

    <section class="section services" aria-labelledby="prestations">
      <span class="eyebrow">Les prestations</span><h2 id="prestations">Quel est votre projet photo ?</h2>
      <div class="service-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <NuxtLink :to="service.link" :aria-label="service.cta"><img :src="service.image" :alt="service.alt" loading="lazy" /></NuxtLink>
          <div class="service-copy"><h3>{{ service.title }}</h3><p>{{ service.text }}</p><NuxtLink :to="service.link">{{ service.cta }} <span aria-hidden="true">→</span></NuxtLink></div>
        </article>
      </div>
    </section>

    <section class="section approach">
      <img src="/images/galery/mariage6.jpg" alt="Photographie de mariage naturelle réalisée par Safia" loading="lazy" />
      <div><span class="eyebrow">L'approche de Safia</span><h2>Des images sincères, sans vous faire jouer un rôle.</h2><p>Que vous soyez devant l’objectif pour la première fois ou que vous prépariez un événement important, l’essentiel est de vous sentir à l’aise. Safia privilégie les échanges, la spontanéité et une photographie attentive aux détails.</p><NuxtLink to="/a-propos" class="text-link">Faire connaissance avec Safia →</NuxtLink></div>
    </section>

    <section class="section portfolio"><span class="eyebrow">Quelques réalisations</span><h2>Les images parlent aussi d'elles-mêmes.</h2>
      <div class="photo-grid"><img src="/images/galery/mariage11.jpg" alt="Photographie de mariage par Safia" loading="lazy"/><img src="/images/galery/entrepreneur6.jpg" alt="Brand shooting professionnel par Safia" loading="lazy"/><img src="/images/galery/mariage9.jpg" alt="Détail de reportage de mariage par Safia" loading="lazy"/></div>
      <NuxtLink to="/portfolio" class="text-link">Explorer le portfolio complet →</NuxtLink>
    </section>

    <section class="section testimonials" aria-labelledby="avis">
      <span class="eyebrow">Témoignages</span><h2 id="avis">Ce que disent les clients de Safia</h2>
      <div class="review-grid"><blockquote v-for="review in reviews" :key="review.name"><p>« {{ review.quote }} »</p><footer>— {{ review.name }}</footer></blockquote></div>
      <p class="review-note">Extraits d’avis déjà présentés sur le site de Safia. Consultez sa fiche Google pour les informations les plus récentes.</p>
    </section>

    <section class="section locality"><span class="eyebrow">Photographe à Mouscron et alentours</span><h2>Un projet photo dans la région de Mouscron ?</h2><p>Safia est basée à Mouscron, en Belgique. Vous organisez un mariage, une séance portrait ou un shooting professionnel dans la région ? Décrivez-lui votre projet, le lieu envisagé et la période souhaitée. Elle pourra vous indiquer les possibilités de déplacement et vous proposer un accompagnement adapté.</p><NuxtLink to="/contact" class="text-link">Demander une disponibilité →</NuxtLink></section>

    <section class="section faq"><span class="eyebrow">Questions fréquentes</span><h2>Tout savoir avant de contacter votre photographe à Mouscron</h2><div class="faq-items"><details v-for="item in faqs" :key="item.q"><summary>{{ item.q }} <span aria-hidden="true">+</span></summary><p>{{ item.a }}</p></details></div></section>
    <section class="last-cta"><span class="eyebrow">Votre projet commence ici</span><h2>Et si on racontait votre histoire ?</h2><p>Parlez à Safia de votre événement, de votre séance ou de votre projet professionnel.</p><NuxtLink to="/contact" class="button">Contacter Safia <span aria-hidden="true">→</span></NuxtLink></section>
  </main>
</template>

<style scoped>
.local-page{--ink:#302923;--accent:#977866;--cream:#f7f2ec;color:var(--ink);background:#fff}.section{padding:clamp(4rem,8vw,7rem) max(1.5rem,8vw)}.eyebrow{font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);font-weight:600}.local-page h1,.local-page h2,.local-page h3{font-family:var(--font-display,Georgia),Georgia,serif;font-weight:400;line-height:1.13}.local-page h1{font-size:clamp(3rem,6vw,6rem);margin:1.3rem 0}.local-page h2{font-size:clamp(2.2rem,4vw,4rem);margin:1rem 0 1.8rem}.local-page h3{font-size:1.8rem}.local-page p{line-height:1.8;color:#645a53}.hero{display:grid;grid-template-columns:1.1fr .9fr;align-items:center;gap:6vw;padding:clamp(8rem,13vw,11rem) max(1.5rem,8vw) 5rem;background:var(--cream)}.hero-copy{max-width:690px}.hero h1 em{font-family:var(--font-script,Georgia),Georgia,serif;font-weight:400;color:var(--accent)}.hero-image{width:100%;height:min(68vh,690px);object-fit:cover;border-radius:48% 48% 2px 2px / 13% 13% 2px 2px}.actions{display:flex;align-items:center;gap:2rem;flex-wrap:wrap;margin:2rem 0}.button{display:inline-flex;gap:1rem;align-items:center;background:var(--accent);color:#fff!important;padding:1rem 1.5rem;text-decoration:none;font-size:.85rem}.secondary,.text-link{color:var(--ink);text-decoration:none;border-bottom:1px solid var(--accent);padding-bottom:.35rem}.reassurance{font-size:.8rem}.intro{max-width:1100px}.intro p{max-width:780px}.services,.testimonials,.locality{background:var(--cream)}.service-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2rem}.service-card{background:#fff}.service-card img{width:100%;height:340px;object-fit:cover;display:block}.service-copy{padding:2rem}.service-copy p{min-height:4.5rem}.service-copy a{color:var(--accent);text-decoration:underline;text-underline-offset:5px}.approach{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:7vw}.approach img{width:100%;height:540px;object-fit:cover}.photo-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;margin:2rem 0}.photo-grid img{width:100%;height:380px;object-fit:cover}.review-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.5rem}.review-grid blockquote{margin:0;background:#fff;padding:2rem}.review-grid footer{margin-top:1.5rem;font-size:.8rem;color:var(--accent)}.review-note{font-size:.8rem}.locality p{max-width:850px}.faq-items{max-width:900px}.faq details{border-bottom:1px solid #ddd1c5;padding:1.4rem 0}.faq summary{display:flex;justify-content:space-between;gap:1rem;cursor:pointer;font-family:var(--font-display,Georgia),Georgia,serif;font-size:1.25rem;list-style:none}.faq summary::-webkit-details-marker{display:none}.faq details p{padding-right:2rem}.last-cta{text-align:center;background:#302923;color:#fff;padding:6rem 1.5rem}.last-cta h2{color:#fff}.last-cta p{color:#e3d8d0}.last-cta .button{margin-top:1.2rem}@media(max-width:850px){.hero,.approach{grid-template-columns:1fr}.hero{padding-top:7rem}.hero-image{height:450px}.service-grid{grid-template-columns:1fr}.review-grid{grid-template-columns:1fr}.photo-grid img{height:230px}}@media(max-width:540px){.section{padding:4rem 1.4rem}.hero{padding:7rem 1.4rem 3rem}.hero h1{font-size:clamp(2.7rem,11vw,4rem)}.hero-image{height:370px}.service-card img{height:260px}.photo-grid{gap:.4rem}.photo-grid img{height:155px}.service-copy{padding:1.5rem}.actions{gap:1.3rem}}
</style>
