<script setup lang="ts">
const year = new Date().getFullYear()
const services = [
  { label: 'Photographe à Mouscron', to: '/photographe-mouscron' },
  { label: 'Photographe de mariage', to: '/meta-mariage' },
  { label: 'Brand shooting à Mouscron', to: '/brand-shooting-mouscron' },
  { label: 'Séances photo à Mouscron', to: '/shooting-photo-glow-up-mouscron' },
  { label: 'Formation photo à Mouscron', to: '/formation-photo-mouscron' }
]
const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Tarifs', to: '/tarif' },
  { label: 'Contact', to: '/contact' }
]
const legal = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Conditions générales de vente', to: '/cgv' },
  { label: 'Cookies', to: '/cookies' }
]
</script>

<template>
  <footer class="footer editorial-footer">
    <div class="footer__top">
      <div class="footer__identity">
        <p class="footer__eyebrow">Safia Moments de Vie · Photographe à Mouscron</p>
        <h2 class="footer__headline">Vos instants.<br><em>Votre histoire.</em></h2>
        <p class="footer__intro">Mariages, portraits et images de marque : des photographies sincères pour raconter ce qui compte vraiment.</p>
        <NuxtLink class="footer__button" to="/contact">Parler de mon projet <span aria-hidden="true">↗</span></NuxtLink>
      </div>
      <nav class="footer__column" aria-label="Prestations photographiques">
        <h3>Prestations</h3>
        <NuxtLink v-for="item in services" :key="item.to" :to="item.to">{{ item.label }} <span aria-hidden="true">↗</span></NuxtLink>
      </nav>
      <nav class="footer__column" aria-label="Navigation du site">
        <h3>Explorer</h3>
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to">{{ item.label }} <span aria-hidden="true">↗</span></NuxtLink>
      </nav>
      <div class="footer__contact">
        <h3>Restons en contact</h3>
        <p>Vous avez une date, une idée, un projet ? Écrivez à Safia pour en discuter.</p>
        <NuxtLink class="footer__contact-link" to="/contact">Écrire à Safia <span aria-hidden="true">→</span></NuxtLink>
        <div class="footer__location"><span aria-hidden="true">⌖</span> Mouscron, Belgique</div>
        <a class="footer__instagram" href="https://www.instagram.com/safiamomentsdevie/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
      </div>
    </div>
    <div class="footer__gallery" aria-label="Aperçu du portfolio de Safia">
      <NuxtLink to="/portfolio" aria-label="Découvrir les photos de mariage et les portraits du portfolio"><img src="/images/galery/mariage11.jpg" alt="Photographie de mariage par Safia" loading="lazy"></NuxtLink>
      <NuxtLink to="/portfolio" aria-label="Découvrir le portfolio mariage"><img src="/images/galery/mariage6.jpg" alt="Instant de mariage photographié par Safia" loading="lazy"></NuxtLink>
      <NuxtLink to="/portfolio" aria-label="Découvrir les portraits professionnels"><img src="/images/galery/entrepreneur6.jpg" alt="Portrait professionnel réalisé par Safia" loading="lazy"></NuxtLink>
      <NuxtLink to="/portfolio" aria-label="Voir les réalisations de Safia"><img src="/images/galery/mariage9.jpg" alt="Reportage photographique de mariage" loading="lazy"></NuxtLink>
    </div>
    <div class="footer__bottom">
      <p>© {{ year }} Safia Moments de Vie · Mouscron, Belgique</p>
      <nav aria-label="Informations légales"><NuxtLink v-for="item in legal" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink></nav>
      <p>Site créé par <a href="https://www.alerya.fr" target="_blank" rel="noopener noreferrer">Alerya</a></p>
    </div>
  </footer>
</template>

<style scoped>
.editorial-footer{--footer-ink:#f4eee8;--footer-muted:#c8bcb3;--footer-line:rgba(255,255,255,.19);background:#252220;color:var(--footer-ink);padding:0;letter-spacing:normal;font-size:1rem;line-height:1.6;overflow:hidden}
.footer__top{max-width:1480px;margin:0 auto;padding:clamp(4rem,7vw,7rem) clamp(1.5rem,5vw,5.5rem);display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr) minmax(0,.8fr) minmax(0,1.1fr);gap:clamp(2rem,4vw,5rem);align-items:start}
.footer__eyebrow{color:#d8b9a8;text-transform:uppercase;letter-spacing:.19em;font-size:.64rem;margin:0 0 1.3rem}
.footer__headline{font-family:var(--font-display,Georgia),Georgia,serif;font-size:clamp(2.4rem,3.6vw,4.4rem);line-height:1.13;font-weight:400;margin:0 0 1.4rem;letter-spacing:-.025em;color:#fff}
.footer__headline em{font-weight:400;color:#d9b7a3}
.footer__intro{max-width:32ch;font-size:.87rem;line-height:1.85;color:var(--footer-muted);margin:0 0 1.9rem}
.footer__button{display:inline-flex;align-items:center;justify-content:space-between;gap:2rem;min-height:49px;padding:.9rem 1.3rem;background:#c4a898;color:#252220!important;text-transform:uppercase;letter-spacing:.12em;font-size:.68rem;font-weight:600;transition:background .2s,transform .2s}
.footer__button:hover{background:#e2c9ba;transform:translateY(-2px)}
.footer__column,.footer__contact{display:flex;flex-direction:column;align-items:flex-start;gap:.9rem}
.footer__column h3,.footer__contact h3{font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:#d9b7a3;margin:0 0 .75rem;padding-bottom:.85rem;border-bottom:1px solid var(--footer-line);width:100%}
.footer__column a{display:flex;align-items:baseline;justify-content:space-between;gap:.7rem;width:100%;font-size:.83rem;line-height:1.5;color:var(--footer-ink);text-decoration:none;transition:color .2s}
.footer__column a span{color:#b89c8b;opacity:0;transition:opacity .2s}
.footer__column a:hover,.footer__column a:focus-visible,.footer__contact a:hover{color:#d9b7a3}
.footer__column a:hover span,.footer__column a:focus-visible span{opacity:1}
.footer__contact p{font-size:.83rem;line-height:1.8;color:var(--footer-muted);margin:0}
.footer__contact-link{color:#fff;border-bottom:1px solid #d9b7a3;padding-bottom:.35rem;font-size:.82rem}
.footer__location{color:var(--footer-muted);font-size:.8rem;margin-top:.6rem}
.footer__location span{color:#d9b7a3;font-size:1.1rem}
.footer__instagram{color:var(--footer-muted);font-size:.8rem}
.footer__gallery{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;background:#252220}
.footer__gallery a{display:block;aspect-ratio:2/1;overflow:hidden;background:#3a3430}
.footer__gallery img{height:100%;width:100%;object-fit:cover;transition:transform .5s ease}
.footer__gallery a:hover img{transform:scale(1.05)}
.footer__bottom{max-width:1480px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem 2rem;padding:1.7rem clamp(1.5rem,5vw,5.5rem);font-size:.69rem;color:var(--footer-muted)}
.footer__bottom p{margin:0}.footer__bottom nav{display:flex;gap:.8rem 1.5rem;flex-wrap:wrap}.footer__bottom a{color:inherit}.footer__bottom a:hover{text-decoration:underline;text-underline-offset:3px}
@media(max-width:1100px){.footer__top{grid-template-columns:repeat(2,minmax(0,1fr));gap:3.5rem 3rem}.footer__identity{grid-column:1/-1}.footer__intro{max-width:55ch}.footer__contact{grid-column:1/-1}.footer__bottom{justify-content:center;text-align:center}.footer__gallery a{aspect-ratio:1.3/1}}
@media(max-width:600px){.footer__top{padding:3.6rem 1.5rem 3rem;grid-template-columns:repeat(2,minmax(0,1fr));gap:2.8rem 1.25rem}.footer__identity{grid-column:1/-1}.footer__headline{font-size:clamp(2.8rem,11vw,4rem)}.footer__intro{font-size:.87rem}.footer__button{width:100%;max-width:340px}.footer__column{gap:1rem;min-width:0}.footer__column h3,.footer__contact h3{font-size:.62rem;letter-spacing:.12em}.footer__column a{font-size:.76rem;overflow-wrap:anywhere}.footer__column a span{display:none}.footer__contact{grid-column:1/-1;border-top:1px solid var(--footer-line);padding-top:1.8rem}.footer__contact h3{border:0;padding:0;margin:0}.footer__gallery{grid-template-columns:repeat(4,minmax(0,1fr));gap:2px}.footer__gallery a{aspect-ratio:3/4}.footer__bottom{padding:1.8rem 1.5rem 2.5rem;display:flex;flex-direction:column;gap:1.2rem;text-align:center;font-size:.68rem}.footer__bottom nav{justify-content:center;gap:.6rem 1.2rem}}
@media(prefers-reduced-motion:reduce){.footer__gallery img,.footer__button{transition:none}}
</style>
