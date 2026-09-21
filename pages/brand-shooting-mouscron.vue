<script setup lang="ts">
useSeoMeta({
  title:'Brand shooting à Mouscron | Photographe entrepreneurs | Safia',
  description:'Photographe brand shooting à Mouscron pour entrepreneurs, indépendants, artisans et professionnels : portraits, image de marque, site web et réseaux sociaux.',
  robots:'index, follow',
  ogTitle:'Brand shooting à Mouscron — Safia Moments de Vie',
  ogDescription:'Des images professionnelles et authentiques pour incarner votre marque et valoriser votre activité.',
  ogImage:'/images/galery/entrepreneur6.jpg'
})
useHead({
  link:[{rel:'canonical',href:'https://www.safiamomentsdevie.com/brand-shooting-mouscron'}],
  script:[{
    type:'application/ld+json',
    innerHTML: JSON.stringify({
      '@context':'https://schema.org',
      '@type':'Service',
      name:'Brand shooting professionnel à Mouscron',
      serviceType:'Photographie de marque et portraits professionnels',
      provider:{'@type':'ProfessionalService',name:'Safia Moments de Vie',url:'https://www.safiamomentsdevie.com'},
      areaServed:{'@type':'City',name:'Mouscron'},
      audience:{'@type':'Audience',audienceType:'Entrepreneurs, indépendants, artisans et professionnels'},
      url:'https://www.safiamomentsdevie.com/brand-shooting-mouscron'
    })
  }]
})
const faq=[
 {q:'À qui s’adresse un brand shooting ?',a:'Aux entrepreneures, indépendants, artisans, créateurs et professionnels qui souhaitent construire une image de marque plus humaine, cohérente et professionnelle.'},
 {q:'Où puis-je utiliser les photos ?',a:'Les images peuvent notamment servir à votre site internet, vos réseaux sociaux, vos supports de communication et vos contenus professionnels, selon les conditions prévues avec Safia.'},
 {q:'Je ne suis pas à l’aise devant l’objectif, est-ce un problème ?',a:'Pas du tout. Safia vous guide tout au long de la séance afin d’obtenir des attitudes naturelles et des images qui vous ressemblent.'},
 {q:'Comment préparer mon shooting professionnel ?',a:'Avant la séance, échangez sur votre activité, votre univers, vos besoins et les supports auxquels les images sont destinées. Cela permet de construire un shooting cohérent avec votre identité.'}
]
</script>
<template>
<main class="ad-page">
<section class="ad-hero"><div><span class="eyebrow">Brand shooting · Mouscron & alentours</span><h1>Des images qui donnent un visage à votre marque.</h1><p class="script">Votre activité mérite une image qui vous ressemble.</p><p class="lead">Un shooting photo pensé pour les entrepreneurs, indépendants et professionnels qui veulent communiquer avec des images naturelles, élégantes et cohérentes avec leur univers.</p><NuxtLink to="/contact?projet=brand-shooting" class="ad-btn">Parler de mon projet →</NuxtLink><div class="proof"><span>♡ Shooting personnalisé</span><span>♡ Image de marque</span><span>♡ Devis sur mesure</span></div></div><div class="visual"><img src="/images/galery/entrepreneur6.jpg" alt="Brand shooting professionnel à Mouscron par Safia Moments de Vie"></div></section>
<section class="benefits"><div><span>01</span><h2>Incarner votre marque</h2><p>Créer des portraits et des scènes qui montrent qui vous êtes, votre métier et l’univers que vous souhaitez transmettre.</p></div><div><span>02</span><h2>Créer de la cohérence</h2><p>Construire une banque d’images harmonieuse pour votre site internet, vos réseaux sociaux et vos supports de communication.</p></div><div><span>03</span><h2>Gagner en crédibilité</h2><p>Remplacer les images génériques par des photographies professionnelles qui rendent votre communication plus personnelle et identifiable.</p></div></section>
<section class="story"><img src="/images/galery/entrepreneur8.jpg" alt="Portrait professionnel et image de marque à Mouscron"><div><span class="eyebrow">Votre univers, en images</span><h2>Un shooting pensé autour de votre activité.</h2><p>Avant de photographier, l’objectif est de comprendre votre métier, votre personnalité, votre clientèle et l’usage prévu des images. Lieux, tenues, détails, gestes et ambiances peuvent ainsi raconter votre marque avec naturel, sans transformer la séance en série de portraits figés.</p><NuxtLink to="/contact?projet=brand-shooting" class="text-link">Préparer mon shooting →</NuxtLink></div></section>
<section class="faq"><span class="eyebrow">Questions fréquentes</span><h2>Préparer votre brand shooting</h2><details v-for="item in faq" :key="item.q"><summary>{{item.q}} <b>+</b></summary><p>{{item.a}}</p></details></section>
<section class="final"><span class="eyebrow">Votre image de marque commence ici</span><h2>Créons des photos qui parlent de votre entreprise.</h2><p>Présentez votre activité, votre univers et vos besoins. Safia pourra imaginer avec vous une séance adaptée à votre communication.</p><NuxtLink to="/contact?projet=brand-shooting" class="ad-btn">Recevoir une proposition →</NuxtLink></section>
</main>
</template>
<style scoped>
.ad-page{background:var(--cream);color:var(--text)}.ad-hero{min-height:92vh;padding:9rem max(1.5rem,8vw) 5rem;display:grid;grid-template-columns:1fr .9fr;gap:5vw;align-items:center;background-image:url('/images/bg-hero.png');background-size:cover}.eyebrow{font-size:.6rem;letter-spacing:.28em;text-transform:uppercase;color:var(--accent-dark)}h1,h2{font-family:var(--font-display);font-weight:400;line-height:1.06}h1{font-size:clamp(2.8rem,5.5vw,5.6rem);max-width:12ch;margin:.8rem 0}.script{font-family:var(--font-script);font-size:clamp(1.6rem,2.6vw,2.4rem);color:var(--accent-dark)}.lead{max-width:52ch;color:var(--text-light);font-size:.9rem;line-height:1.9;margin:1.4rem 0 1.8rem}.ad-btn{display:inline-flex;padding:.9rem 1.4rem;background:var(--accent);color:#fff;font-size:.62rem;letter-spacing:.17em;text-transform:uppercase}.proof{display:flex;gap:1rem;flex-wrap:wrap;margin-top:1.4rem;color:var(--text-light);font-size:.65rem}.visual{height:68vh;overflow:hidden;border-radius:48% 48% 0 0/14% 14% 0 0}.visual img,.story img{width:100%;height:100%;object-fit:cover}.benefits{display:grid;grid-template-columns:repeat(3,1fr);padding:5rem max(1.5rem,8vw);gap:1px;background:var(--cream-dark)}.benefits>div{background:var(--cream);padding:2.5rem}.benefits span{font-size:.6rem;color:var(--accent-dark)}.benefits h2{font-size:1.7rem;margin:.6rem 0}.benefits p,.story p,.faq p,.final p{font-size:.82rem;color:var(--text-light);line-height:1.85}.story{display:grid;grid-template-columns:.9fr 1fr;align-items:center;gap:7vw;padding:6rem max(1.5rem,10vw);background:#fff}.story img{height:520px}.story h2,.faq h2,.final h2{font-size:clamp(2rem,4vw,3.7rem);margin:.7rem 0 1.3rem}.text-link{display:inline-block;margin-top:1.4rem;border-bottom:1px solid var(--accent-dark);font-size:.63rem;letter-spacing:.15em;text-transform:uppercase}.faq{max-width:850px;margin:auto;padding:6rem 1.5rem}.faq details{border-bottom:1px solid var(--cream-dark)}.faq summary{list-style:none;display:flex;justify-content:space-between;cursor:pointer;padding:1.4rem 0;font-family:var(--font-display);font-size:1.05rem}.faq summary::-webkit-details-marker{display:none}.faq details p{padding:0 2rem 1.4rem 0}.final{text-align:center;padding:6rem 1.5rem;background:var(--dark);color:#fff}.final p{color:rgba(255,255,255,.65);max-width:560px;margin:0 auto 1.7rem}@media(max-width:800px){.ad-hero,.story{grid-template-columns:1fr}.ad-hero{padding-top:7rem}.visual{height:55vh}.benefits{grid-template-columns:1fr}.story img{height:420px}}
</style>