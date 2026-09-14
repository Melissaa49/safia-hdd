<script setup lang="ts">
useHead({
  script: [{ src: 'https://widgets.sociablekit.com/instagram-feed/widget.js', defer: true }],
})
</script>

<template>
  <section class="instagram-section" aria-label="Dernières publications Instagram">
    <div class="instagram-section__inner">
      <header class="instagram-section__header">
        <span class="instagram-section__eyebrow">Journal Instagram</span>
        <h2 class="instagram-section__title">Dans les <em>coulisses</em></h2>
        <p>Des séances, de la lumière et les petits détails qui font chaque histoire.</p>
      </header>

      <div class="instagram-section__profile">
        <div class="instagram-section__profile-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor"/></svg>
        </div>
        <div><strong>@safiamomentsdevie</strong><span>Photographe · Moments de vie</span></div>
        <a href="https://www.instagram.com/safiamomentsdevie" target="_blank" rel="noopener noreferrer">Suivre</a>
      </div>

      <div class="instagram-section__widget-shell">
        <div class="instagram-section__widget">
          <div class="sk-instagram-feed" data-embed-id="25705489"></div>
        </div>
      </div>

      <div class="instagram-section__footer">
        <a href="https://www.instagram.com/safiamomentsdevie" target="_blank" rel="noopener noreferrer" class="instagram-section__button">
          Voir toutes les publications <span>↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.instagram-section{position:relative;overflow:hidden;padding:6.5rem 1.5rem 7rem;background:var(--approche-cream,#e8d0be)}
.instagram-section::before{content:'';position:absolute;width:420px;height:420px;border:1px solid rgba(168,137,122,.12);border-radius:50%;top:-270px;right:-190px;pointer-events:none}
.instagram-section__inner{position:relative;z-index:1;width:min(1180px,100%);margin:auto}
.instagram-section__header{text-align:center;max-width:700px;margin:0 auto 2.2rem}
.instagram-section__eyebrow{display:block;font-size:.58rem;letter-spacing:.34em;text-transform:uppercase;color:var(--accent-dark,#a8897a);margin-bottom:.75rem}
.instagram-section__title{margin:0;font-family:var(--font-display,'Playfair Display',serif);font-size:clamp(2.2rem,4vw,3.4rem);font-weight:400;line-height:1;text-transform:uppercase;color:var(--text,#1a1612)}
.instagram-section__title em{font-family:var(--font-script,'Great Vibes',cursive);font-size:1.15em;font-weight:400;font-style:normal;text-transform:none;color:var(--accent-dark,#a8897a)}
.instagram-section__header p{max-width:520px;margin:1.1rem auto 0;font-size:.72rem;line-height:1.8;letter-spacing:.04em;color:var(--text-light,#6b5c52)}
.instagram-section__profile{width:min(920px,calc(100% - 4rem));margin:0 auto -1.8rem;position:relative;z-index:4;display:flex;align-items:center;gap:.85rem;padding:.85rem 1rem;background:rgba(255,255,255,.92);border:1px solid rgba(168,137,122,.16);box-shadow:0 14px 35px rgba(51,36,28,.08)}
.instagram-section__profile-icon{width:38px;height:38px;flex:none;border-radius:50%;display:grid;place-items:center;background:var(--cream,#f5ede6);color:var(--accent-dark,#a8897a)}
.instagram-section__profile-icon svg{width:18px;height:18px}
.instagram-section__profile>div:nth-child(2){min-width:0;display:flex;flex-direction:column;gap:.12rem}
.instagram-section__profile strong{font-family:var(--font-display,'Playfair Display',serif);font-size:.9rem;font-weight:600;color:var(--text,#1a1612)}
.instagram-section__profile span{font-size:.55rem;letter-spacing:.08em;color:var(--text-light,#6b5c52)}
.instagram-section__profile>a{margin-left:auto;padding:.55rem .85rem;border:1px solid var(--accent-dark,#a8897a);font-size:.52rem;letter-spacing:.14em;text-transform:uppercase;color:var(--text,#1a1612)}
.instagram-section__widget-shell{position:relative;padding:3.3rem 2rem 2rem;background:rgba(245,237,230,.88);border:1px solid rgba(168,137,122,.16);box-shadow:0 24px 60px rgba(51,36,28,.09)}
.instagram-section__widget{position:relative;min-height:240px;overflow:hidden}
:deep(.sk-instagram-feed){width:100%!important;max-width:100%!important}
:deep(.sk-instagram-feed img){display:block;transition:transform .4s ease}
:deep(.sk-instagram-feed a:hover img){transform:scale(1.02)}
.instagram-section__footer{display:flex;justify-content:center;margin-top:2rem}
.instagram-section__button{display:inline-flex;align-items:center;gap:.7rem;padding:.9rem 1.35rem;border-bottom:1px solid var(--accent-dark,#a8897a);font-size:.58rem;letter-spacing:.17em;text-transform:uppercase;color:var(--text,#1a1612)}
.instagram-section__button span{font-size:.85rem;color:var(--accent-dark,#a8897a)}

@media(max-width:700px){
 .instagram-section{padding:4.4rem 0 4.8rem}
 .instagram-section::before{width:250px;height:250px;top:-170px;right:-130px}
 .instagram-section__inner{width:100%}
 .instagram-section__header{padding:0 1.35rem;margin-bottom:1.65rem}
 .instagram-section__eyebrow{font-size:.53rem;letter-spacing:.27em;margin-bottom:.6rem}
 .instagram-section__title{font-size:2.45rem;line-height:.95}
 .instagram-section__title em{display:block;margin-top:.12rem;font-size:1.25em}
 .instagram-section__header p{font-size:.68rem;line-height:1.7;max-width:34ch;margin-top:1rem}
 .instagram-section__profile{width:calc(100% - 2rem);margin:0 1rem -1.25rem;padding:.72rem .75rem;border-radius:14px;box-shadow:0 10px 28px rgba(51,36,28,.09)}
 .instagram-section__profile-icon{width:34px;height:34px}
 .instagram-section__profile strong{font-size:.8rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
 .instagram-section__profile span{font-size:.48rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
 .instagram-section__profile>a{padding:.48rem .62rem;font-size:.48rem;letter-spacing:.1em}
 .instagram-section__widget-shell{margin:0 .65rem;padding:2.3rem .35rem .35rem;border-radius:18px;box-shadow:0 16px 40px rgba(51,36,28,.08)}
 .instagram-section__widget{border-radius:13px;min-height:210px;background:#fff}
 .instagram-section__footer{margin-top:1.5rem;padding:0 1rem}
 .instagram-section__button{font-size:.53rem;letter-spacing:.13em;padding:.8rem .25rem}
}

@media(max-width:390px){
 .instagram-section__title{font-size:2.15rem}
 .instagram-section__profile{gap:.55rem}
 .instagram-section__profile-icon{width:30px;height:30px}
 .instagram-section__profile>a{padding:.45rem .5rem}
 .instagram-section__widget-shell{margin:0 .45rem}
}

@media(prefers-reduced-motion:reduce){:deep(.sk-instagram-feed img){transition:none}}
</style>