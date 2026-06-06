<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CLP Advocacia Estratégica | Direito Empresarial da Saúde</title>
<meta name="description" content="Escritório full-service com especialização em Direito Empresarial da Saúde. Estruturação jurídica de hospitais, clínicas, laboratórios e sociedades médicas.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --green-950:#081f14;--green-900:#0c2a1d;--green-800:#10341f;--green-700:#163f28;--green-600:#1d4d33;
  --gold-200:#fbf3d3;--gold-300:#f6e7b4;--gold-400:#e9d18a;--gold-500:#d4af5a;--gold-600:#c49a3f;
  --cream:#f7f3e8;--ink:#06170e;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Jost',sans-serif;background:var(--green-900);color:var(--cream);line-height:1.7;-webkit-font-smoothing:antialiased;overflow-x:hidden}
.gold-text{
  background:linear-gradient(135deg,var(--gold-600) 0%,var(--gold-200) 35%,var(--gold-500) 60%,var(--gold-400) 100%);
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;
}
h1,h2,h3,h4{font-family:'Cormorant Garamond',serif;font-weight:500;line-height:1.1}

/* LOGO */
.logo-clp{display:inline-flex;align-items:center;gap:14px;cursor:pointer;text-decoration:none}
.logo-monogram{font-family:'Cormorant Garamond',serif;font-size:1.75rem;font-weight:600;letter-spacing:2px;line-height:1}
.logo-divider{width:1px;height:32px;background:var(--gold-500);opacity:.7}
.logo-tagline{font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold-400);font-weight:400;line-height:1.4}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:22px 5vw;transition:all .4s ease;background:rgba(12,42,29,0)}
nav.scrolled{background:rgba(8,31,20,.94);backdrop-filter:blur(14px);padding:14px 5vw;border-bottom:1px solid rgba(212,175,90,.18)}
.nav-links{display:flex;gap:34px;list-style:none}
.nav-links a{color:var(--cream);text-decoration:none;font-size:.74rem;letter-spacing:2px;text-transform:uppercase;font-weight:400;position:relative;transition:color .3s}
.nav-links a::after{content:'';position:absolute;left:0;bottom:-6px;width:0;height:1px;background:var(--gold-400);transition:width .35s ease}
.nav-links a:hover{color:var(--gold-300)}
.nav-links a:hover::after{width:100%}
.burger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:8px}
.burger span{width:26px;height:2px;background:var(--gold-400);transition:.3s}

/* HERO */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:0 6vw;position:relative;overflow:hidden;
  background:radial-gradient(ellipse 70% 50% at 80% 30%,rgba(212,175,90,.12),transparent 65%),radial-gradient(ellipse 60% 40% at 20% 80%,rgba(212,175,90,.06),transparent 60%),linear-gradient(160deg,var(--green-900),var(--green-800) 55%,var(--ink))}
.hero::before{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23d4af5a' stroke-width='.3' stroke-opacity='.06'/%3E%3C/svg%3E");opacity:.5}
.hero-mark{position:absolute;right:5vw;top:50%;transform:translateY(-50%);font-family:'Cormorant Garamond',serif;font-size:15vw;font-weight:600;line-height:.85;color:rgba(212,175,90,.06);pointer-events:none;user-select:none;letter-spacing:-.7vw}
@media(max-width:900px){.hero-mark{font-size:22vw;right:8vw}}
.hero-content{position:relative;z-index:2;max-width:920px}
.hero-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:.72rem;letter-spacing:5px;text-transform:uppercase;color:var(--gold-400);margin-bottom:32px;font-weight:400;opacity:0;animation:fadeUp .9s ease .2s forwards}
.hero-eyebrow::before{content:'';width:48px;height:1px;background:var(--gold-500)}
.hero h1{font-size:clamp(2.8rem,7.5vw,6rem);font-weight:500;margin-bottom:28px;letter-spacing:-1px;opacity:0;animation:fadeUp .9s ease .4s forwards}
.hero h1 em{font-style:italic;font-weight:400;display:block}
.hero-sub{font-size:clamp(1rem,1.6vw,1.3rem);font-weight:300;letter-spacing:.5px;color:rgba(247,243,232,.85);max-width:680px;margin-bottom:48px;line-height:1.6;text-align:justify;hyphens:auto;opacity:0;animation:fadeUp .9s ease .6s forwards}
.hero-sub strong{color:var(--gold-300);font-weight:500}
.hero-cta{display:flex;gap:18px;flex-wrap:wrap;opacity:0;animation:fadeUp .9s ease .8s forwards}
.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 34px;font-size:.76rem;letter-spacing:2.5px;text-transform:uppercase;text-decoration:none;font-weight:500;transition:all .35s ease;cursor:pointer;border:1px solid transparent}
.btn-primary{background:linear-gradient(135deg,var(--gold-600),var(--gold-400));color:var(--ink)}
.btn-primary:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(212,175,90,.32)}
.btn-ghost{border:1px solid rgba(212,175,90,.45);color:var(--gold-300)}
.btn-ghost:hover{background:rgba(212,175,90,.1);border-color:var(--gold-400)}
.scroll-hint{position:absolute;bottom:34px;left:6vw;display:flex;align-items:center;gap:12px;font-size:.66rem;letter-spacing:3px;text-transform:uppercase;color:rgba(247,243,232,.5);opacity:0;animation:fadeUp .9s ease 1s forwards}
.scroll-hint span{width:1px;height:36px;background:linear-gradient(var(--gold-500),transparent);animation:pulse 2s infinite}
@keyframes fadeUp{to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:.3}50%{opacity:1}}

/* SECTIONS */
section{padding:120px 6vw;position:relative}
.section-label{font-size:.72rem;letter-spacing:5px;text-transform:uppercase;color:var(--gold-500);margin-bottom:18px;display:inline-flex;align-items:center;gap:14px}
.section-label::before{content:'';width:30px;height:1px;background:var(--gold-500)}
.reveal{opacity:0;transform:translateY(40px);transition:opacity 1s ease,transform 1s ease}
.reveal.in{opacity:1;transform:translateY(0)}

/* ABOUT */
.about{background:var(--green-800)}
.about-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:start}
.about h2{font-size:clamp(2.2rem,4.5vw,3.6rem);margin-bottom:14px}
.about-side{position:sticky;top:120px}

/* PORTRAIT */
.portrait{position:relative;overflow:hidden;margin-bottom:36px;background:var(--green-950);aspect-ratio:3/4;box-shadow:0 30px 60px -20px rgba(0,0,0,.5)}
.portrait img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 18%;filter:saturate(.72) contrast(1.06) brightness(.93);transition:filter .8s ease,transform 1.2s ease}
.portrait:hover img{filter:saturate(.85) contrast(1.06) brightness(.97);transform:scale(1.03)}
.portrait::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,31,20,.18) 0%,transparent 25%,transparent 65%,rgba(8,31,20,.7) 100%),linear-gradient(135deg,rgba(212,175,90,.06),transparent 40%);pointer-events:none;z-index:1}
.portrait::before{content:'';position:absolute;inset:14px;border:1px solid rgba(212,175,90,.42);z-index:2;pointer-events:none}
.portrait-caption{position:absolute;left:28px;right:28px;bottom:22px;z-index:3;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:.95rem;color:var(--gold-300);letter-spacing:.5px}

.portrait-secondary{position:relative;overflow:hidden;background:var(--green-950);aspect-ratio:4/3;box-shadow:0 20px 50px -20px rgba(0,0,0,.4);margin-top:48px}
.portrait-secondary img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 30%;filter:saturate(.7) contrast(1.05) brightness(.92);transition:filter .8s ease,transform 1.2s ease}
.portrait-secondary:hover img{filter:saturate(.85) contrast(1.05) brightness(.96);transform:scale(1.03)}
.portrait-secondary::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(8,31,20,.25) 0%,transparent 40%,rgba(8,31,20,.55) 100%),linear-gradient(180deg,rgba(212,175,90,.05),transparent 30%);pointer-events:none;z-index:1}
.portrait-secondary::before{content:'';position:absolute;inset:12px;border:1px solid rgba(212,175,90,.4);z-index:2;pointer-events:none}
.about-role{font-size:.85rem;letter-spacing:2px;text-transform:uppercase;color:var(--gold-400);font-weight:400;line-height:1.8}
.about-divider{width:60px;height:2px;background:linear-gradient(90deg,var(--gold-500),transparent);margin:28px 0}
.about-stats{display:flex;flex-direction:column;gap:26px;margin-top:40px}
.stat-num{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:600;line-height:1}
.stat-label{font-size:.72rem;letter-spacing:1.5px;text-transform:uppercase;color:rgba(247,243,232,.6);margin-top:4px}
.about-text p{margin-bottom:24px;color:rgba(247,243,232,.85);font-weight:300;font-size:1.05rem;text-align:justify;hyphens:auto}
.about-text p:first-child{font-size:1.18rem;color:var(--cream)}
.about-text .lead{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-style:italic;color:var(--gold-300);font-weight:400;line-height:1.45;text-align:justify;hyphens:auto;border-left:2px solid var(--gold-500);padding-left:24px;margin-top:36px}
.oab{margin-top:16px;font-size:.8rem;letter-spacing:1.5px;color:var(--gold-500)}

/* HEALTHCARE */
.health{background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(212,175,90,.18),transparent 60%),linear-gradient(180deg,var(--green-950),var(--ink));padding:140px 6vw;position:relative;overflow:hidden}
.health::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--gold-500),transparent)}
.health-symbol{position:absolute;right:-3vw;top:8%;font-family:'Cormorant Garamond',serif;font-size:24vw;font-weight:600;color:rgba(212,175,90,.04);line-height:1;pointer-events:none;user-select:none}
.health-head{max-width:920px;margin-bottom:80px;position:relative;z-index:2}
.health-eyebrow{display:inline-flex;align-items:center;gap:12px;font-size:.72rem;letter-spacing:5px;text-transform:uppercase;color:var(--gold-400);margin-bottom:24px;font-weight:400}
.health-eyebrow::before,.health-eyebrow::after{content:'';width:30px;height:1px;background:var(--gold-500)}
.health h2{font-size:clamp(2.6rem,6vw,5rem);margin-bottom:28px;letter-spacing:-1px}
.health h2 em{font-style:italic;font-weight:400}
.health-lead{font-size:1.2rem;color:rgba(247,243,232,.82);font-weight:300;max-width:780px;text-align:justify;hyphens:auto;margin-bottom:32px}
.health-quote{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-style:italic;color:var(--gold-300);max-width:760px;padding-left:24px;border-left:2px solid var(--gold-500)}
.health-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px;background:rgba(212,175,90,.12);position:relative;z-index:2}
.h-card{background:var(--green-900);padding:48px 40px;transition:all .4s ease;position:relative;overflow:hidden}
.h-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:2px;background:linear-gradient(90deg,var(--gold-500),var(--gold-300));transform:scaleX(0);transform-origin:left;transition:transform .5s ease}
.h-card:hover{background:var(--green-800)}
.h-card:hover::before{transform:scaleX(1)}
.h-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;border:1px solid var(--gold-500);border-radius:50%;margin-bottom:24px;font-family:'Cormorant Garamond',serif;font-style:italic;color:var(--gold-400);font-size:1.2rem}
.h-card h3{font-size:1.45rem;color:var(--gold-300);margin-bottom:14px}
.h-card p{font-size:.96rem;color:rgba(247,243,232,.75);font-weight:300;text-align:justify;hyphens:auto}

/* AREAS */
.areas{background:var(--green-900)}
.areas-head{max-width:720px;margin-bottom:64px}
.areas h2{font-size:clamp(2.2rem,4.5vw,3.6rem);margin-bottom:18px}
.areas-head p{color:rgba(247,243,232,.72);font-weight:300;text-align:justify;hyphens:auto}
.areas-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:rgba(212,175,90,.1)}
.area-card{background:var(--green-800);padding:36px 28px;transition:all .4s ease;position:relative;min-height:200px}
.area-card:hover{background:var(--green-700)}
.area-num{font-family:'Cormorant Garamond',serif;font-size:.95rem;color:var(--gold-500);letter-spacing:2px}
.area-card h3{font-size:1.2rem;margin:14px 0 12px;color:var(--cream)}
.area-card p{font-size:.86rem;color:rgba(247,243,232,.65);font-weight:300;line-height:1.55;text-align:justify;hyphens:auto}

/* DIFFERENTIATORS */
.diff{background:var(--green-800);padding:120px 6vw}
.diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.diff h2{font-size:clamp(2.2rem,4.5vw,3.4rem);margin-bottom:20px}
.diff-text p{color:rgba(247,243,232,.8);font-weight:300;margin-bottom:18px;text-align:justify;hyphens:auto;font-size:1.02rem}
.diff-list{display:flex;flex-direction:column;gap:28px}
.diff-item{display:flex;gap:22px;align-items:flex-start;padding-bottom:24px;border-bottom:1px solid rgba(212,175,90,.15)}
.diff-item:last-child{border-bottom:none}
.diff-num{font-family:'Cormorant Garamond',serif;font-size:2.2rem;color:var(--gold-400);font-weight:600;line-height:1;min-width:60px}
.diff-item h4{font-size:1.2rem;color:var(--cream);margin-bottom:8px;font-weight:500}
.diff-item p{font-size:.92rem;color:rgba(247,243,232,.7);font-weight:300;text-align:justify;hyphens:auto;margin:0}

/* JOURNEY */
.journey{background:var(--green-900)}
.journey h2{font-size:clamp(2.2rem,4.5vw,3.6rem);margin-bottom:48px}
.journey-text{max-width:920px}
.journey-text p{color:rgba(247,243,232,.85);font-weight:300;font-size:1.08rem;margin-bottom:22px;text-align:justify;hyphens:auto;line-height:1.75}
.journey-text p:first-of-type{font-size:1.18rem;color:var(--cream)}
.sectors{margin-top:48px;padding-top:36px;border-top:1px solid rgba(212,175,90,.18);display:flex;flex-wrap:wrap;gap:12px;align-items:center}
.sectors-label{font-size:.72rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold-500);margin-right:14px}
.sector-tag{font-size:.82rem;color:var(--cream);padding:8px 16px;border:1px solid rgba(212,175,90,.3);border-radius:30px;letter-spacing:.5px;transition:all .3s ease}
.sector-tag:hover{border-color:var(--gold-400);background:rgba(212,175,90,.08)}

/* EDUCATION */
.education{background:var(--green-800)}
.edu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:56px}
.edu-card{border:1px solid rgba(212,175,90,.22);padding:38px 32px;transition:all .4s ease;background:rgba(8,31,20,.3)}
.edu-card:hover{border-color:var(--gold-400);transform:translateY(-6px)}
.edu-year{font-family:'Cormorant Garamond',serif;font-size:2.2rem;color:var(--gold-400);font-weight:600}
.edu-card h3{font-size:1.22rem;margin:10px 0 8px;color:var(--cream)}
.edu-card p{font-size:.86rem;color:rgba(247,243,232,.65);font-weight:300}
.langs{margin-top:60px;display:flex;align-items:center;gap:30px;flex-wrap:wrap;padding-top:40px;border-top:1px solid rgba(212,175,90,.15)}
.langs .label{font-size:.74rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold-500)}
.lang-pill{font-size:.95rem;color:var(--cream);letter-spacing:1px}
.lang-pill em{color:var(--gold-400);font-style:normal;font-size:.76rem;display:block;letter-spacing:1px;margin-top:2px}

/* CONTACT */
.contact{background:radial-gradient(ellipse 70% 60% at 50% 0%,rgba(212,175,90,.14),transparent 60%),linear-gradient(180deg,var(--green-800),var(--ink));text-align:center;padding:140px 6vw}
.contact h2{font-size:clamp(2.2rem,5vw,4rem);margin-bottom:24px;max-width:900px;margin-inline:auto}
.contact h2 em{font-style:italic}
.contact > .reveal > p{max-width:580px;margin:0 auto 44px;color:rgba(247,243,232,.78);font-weight:300;font-size:1.08rem}
.contact-info{display:flex;justify-content:center;gap:50px;flex-wrap:wrap;margin-top:60px}
.ci-item{text-align:center}
.ci-item .label{font-size:.68rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold-500);margin-bottom:8px}
.ci-item a,.ci-item span{color:var(--cream);text-decoration:none;font-size:1.02rem;letter-spacing:.5px;transition:color .3s}
.ci-item a:hover{color:var(--gold-300)}

/* FOOTER */
footer{background:var(--ink);padding:50px 6vw;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;border-top:1px solid rgba(212,175,90,.15)}
footer p{font-size:.76rem;color:rgba(247,243,232,.5);letter-spacing:1px}

/* RESPONSIVE */
@media(max-width:900px){
  .nav-links{position:fixed;top:0;right:-100%;height:100vh;width:78%;background:var(--green-950);flex-direction:column;justify-content:center;align-items:center;gap:32px;transition:right .4s ease;border-left:1px solid rgba(212,175,90,.2)}
  .nav-links.open{right:0}
  .burger{display:flex;z-index:101}
  .about-grid,.diff-grid{grid-template-columns:1fr;gap:50px}
  .about-side{position:static}
  .health-grid{grid-template-columns:1fr}
  .areas-grid{grid-template-columns:1fr 1fr}
  .edu-grid{grid-template-columns:1fr}
  .contact-info{gap:32px}
  .logo-tagline,.logo-divider{display:none}
  section{padding:90px 6vw}
}
@media(max-width:560px){.areas-grid{grid-template-columns:1fr}}
</style>
</head>
<body>

<nav id="nav">
  <a href="#top" class="logo-clp" onclick="scrollTo({top:0,behavior:'smooth'})">
    <span class="logo-monogram gold-text">CLP</span>
    <span class="logo-divider"></span>
    <span class="logo-tagline">Advocacia<br>Estratégica</span>
  </a>
  <ul class="nav-links" id="navlinks">
    <li><a href="#sobre" onclick="closeMenu()">Sobre</a></li>
    <li><a href="#saude" onclick="closeMenu()">Saúde</a></li>
    <li><a href="#areas" onclick="closeMenu()">Áreas</a></li>
    <li><a href="#trajetoria" onclick="closeMenu()">Trajetória</a></li>
    <li><a href="#contato" onclick="closeMenu()">Contato</a></li>
  </ul>
  <button class="burger" onclick="toggleMenu()" aria-label="Menu"><span></span><span></span><span></span></button>
</nav>

<header class="hero" id="top">
  <div class="hero-mark gold-text">CLP</div>
  <div class="hero-content">
    <div class="hero-eyebrow">Advocacia Empresarial · Atuação em Saúde</div>
    <h1>CLP<br><em class="gold-text">Advocacia Estratégica.</em></h1>
    <p class="hero-sub">Atuação consultiva e contenciosa em todas as áreas do Direito, com dedicação ao Direito Empresarial voltado à profissionalização e à prevenção jurídica no setor da Saúde — abrangendo a estruturação jurídica de hospitais, clínicas, laboratórios e sociedades médicas. <strong>Cuidar de quem cuida de nós</strong> é o propósito que orienta nossa atuação.</p>
    <div class="hero-cta">
      <a href="#contato" class="btn btn-primary">Entre em contato</a>
      <a href="#saude" class="btn btn-ghost">Direito da Saúde</a>
    </div>
  </div>
  <div class="scroll-hint"><span></span>Role para descobrir</div>
</header>

<section class="about" id="sobre">
  <div class="about-grid">
    <div class="about-side reveal">
      <div class="portrait">
        <img src="cristina-retrato.jpg" alt="Cristina Loschiavo Pepino" loading="lazy">
      </div>
      <div class="section-label">A Sócia Fundadora</div>
      <h2 class="gold-text">Cristina<br>Loschiavo<br>Pepino</h2>
      <div class="about-divider"></div>
      <p class="about-role">Advogada · Sócia Fundadora<br>Direito Empresarial · Societário<br>Compliance · Saúde</p>
      <div class="oab gold-text">OAB/SP nº 254.069</div>
      <div class="about-stats">
        <div><div class="stat-num gold-text">20+</div><div class="stat-label">Anos de trajetória</div></div>
        <div><div class="stat-num gold-text">7</div><div class="stat-label">Setores de atuação</div></div>
        <div><div class="stat-num gold-text">2</div><div class="stat-label">Idiomas de trabalho</div></div>
      </div>
    </div>
    <div class="about-text reveal">
      <p>Com mais de 20 anos de trajetória na advocacia, Cristina Loschiavo Pepino dedica-se ao Direito Empresarial, com vivência construída ao longo de carreira executiva em departamentos jurídicos de empresas nacionais e multinacionais.</p>
      <p>Antes de fundar a CLP Advocacia Estratégica, atuou como executiva jurídica em companhias de diferentes setores — alimentação, tecnologia, indústria fonográfica, varejo, hotelaria e saúde —, conduzindo operações de fusões e aquisições, contratos internacionais e questões regulatórias junto a órgãos como ANAC, ANVISA e CVM, com participação em Conselhos de Administração e Assembleias.</p>
      <p>Esse repertório executivo, somado à formação acadêmica em Direito Empresarial pela FGV Law e em Direito Processual Civil pela Unisul/LFG, fundamenta a atuação da CLP Advocacia Estratégica em todas as áreas do Direito, com atenção particular ao setor da saúde — área que demanda compreensão simultânea das exigências regulatórias, societárias, tributárias e éticas que regem hospitais, clínicas, laboratórios e profissionais médicos.</p>
      <p class="lead">"O conhecimento técnico do Direito ganha sentido quando dialoga com a realidade de quem nos procura."</p>
      <div class="portrait-secondary">
        <img src="cristina-poltrona.jpg" alt="Cristina Loschiavo Pepino no escritório" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="health" id="saude">
  <div class="health-symbol gold-text">+</div>
  <div class="health-head reveal">
    <div class="health-eyebrow">Especialização</div>
    <h2 class="gold-text">Direito Empresarial<br><em>aplicado à Saúde.</em></h2>
    <p class="health-lead">Atendemos médicos, sociedades médicas, hospitais, clínicas, laboratórios e grupos de saúde com uma compreensão integrada das exigências regulatórias, societárias, tributárias e éticas que governam o setor.</p>
    <p class="health-quote">"O setor da saúde demanda uma advocacia que compreenda tanto a complexidade da atividade econômica quanto a sensibilidade da relação médico-paciente."</p>
  </div>
  <div class="health-grid">
    <div class="h-card reveal">
      <div class="h-icon">i</div>
      <h3>Estruturação de Hospitais, Clínicas e Laboratórios</h3>
      <p>Acompanhamento jurídico desde a concepção do projeto até a operação plena, com elaboração de contratos sociais, regimentos internos, governança corporativa e regularização junto aos órgãos competentes.</p>
    </div>
    <div class="h-card reveal">
      <div class="h-icon">ii</div>
      <h3>Sociedades Médicas e Holdings</h3>
      <p>Constituição e estruturação de sociedades médicas, holdings patrimoniais e sucessórias para profissionais da saúde, com planejamento societário aderente aos regimes fiscais aplicáveis ao setor.</p>
    </div>
    <div class="h-card reveal">
      <div class="h-icon">iii</div>
      <h3>Compliance Regulatório</h3>
      <p>Adequação às normas da ANVISA, ANS, CFM e demais conselhos profissionais, com elaboração de programas de integridade, políticas internas e gestão de riscos regulatórios específicos da saúde.</p>
    </div>
    <div class="h-card reveal">
      <div class="h-icon">iv</div>
      <h3>Contratos com Operadoras e Fornecedores</h3>
      <p>Negociação e revisão de contratos com operadoras de planos de saúde, fornecedores de insumos médicos, equipamentos e tecnologias, com atenção ao equilíbrio econômico e à segurança jurídica das partes.</p>
    </div>
    <div class="h-card reveal">
      <div class="h-icon">v</div>
      <h3>Publicidade Médica e Ética Profissional</h3>
      <p>Análise de conformidade publicitária à luz da Resolução CFM nº 2.336/2023 e defesa em processos ético-disciplinares perante os Conselhos Regionais e Federal de Medicina.</p>
    </div>
    <div class="h-card reveal">
      <div class="h-icon">vi</div>
      <h3>Telemedicina, LGPD e Saúde Digital</h3>
      <p>Estruturação de operações de telemedicina, adequação à LGPD com proteção qualificada de dados sensíveis em saúde e estratégias jurídicas para startups e plataformas healthtech.</p>
    </div>
  </div>
</section>

<section class="areas" id="areas">
  <div class="areas-head reveal">
    <div class="section-label">Áreas de atuação</div>
    <h2 class="gold-text">Atuação consultiva e contenciosa<br>em todas as áreas do Direito.</h2>
    <p>Para além do Direito da Saúde, a CLP atua em diferentes áreas relevantes ao ambiente empresarial, patrimonial e familiar, atendendo empresas, sócios, profissionais e famílias.</p>
  </div>
  <div class="areas-grid">
    <div class="area-card reveal"><div class="area-num">01</div><h3>Direito Empresarial</h3><p>Consultoria estratégica e contenciosa para empresas de diversos portes e segmentos.</p></div>
    <div class="area-card reveal"><div class="area-num">02</div><h3>Direito Societário</h3><p>Constituição, estruturação, M&A e assessoria a sócios nacionais e estrangeiros.</p></div>
    <div class="area-card reveal"><div class="area-num">03</div><h3>Contratos Estratégicos</h3><p>Elaboração, negociação e revisão de contratos nacionais e internacionais.</p></div>
    <div class="area-card reveal"><div class="area-num">04</div><h3>Compliance & Governança</h3><p>Programas de integridade, gestão de riscos e suporte a processos de auditoria.</p></div>
    <div class="area-card reveal"><div class="area-num">05</div><h3>Direito Imobiliário</h3><p>Incorporações, condominial, locações, due diligence e regularização de imóveis.</p></div>
    <div class="area-card reveal"><div class="area-num">06</div><h3>Família e Sucessões</h3><p>Planejamento sucessório, holdings familiares, divórcios consensuais e inventários.</p></div>
    <div class="area-card reveal"><div class="area-num">07</div><h3>Trabalhista</h3><p>Atuação consultiva e contenciosa em relações de trabalho e demandas individuais.</p></div>
    <div class="area-card reveal"><div class="area-num">08</div><h3>Direito do Consumidor</h3><p>Defesa de direitos individuais e suporte a empresas em relações de consumo.</p></div>
  </div>
</section>

<section class="diff">
  <div class="diff-grid">
    <div class="diff-text reveal">
      <div class="section-label">Princípios</div>
      <h2 class="gold-text">Princípios que orientam<br>nossa atuação.</h2>
      <p>A atuação da CLP Advocacia Estratégica é construída sobre quatro princípios que estruturam o trabalho do escritório e a relação com seus clientes.</p>
    </div>
    <div class="diff-list reveal">
      <div class="diff-item"><div class="diff-num gold-text">01</div><div><h4>Compreensão do negócio</h4><p>Trajetória executiva em departamentos jurídicos de empresas, com leitura das realidades operacionais e setoriais que envolvem cada demanda.</p></div></div>
      <div class="diff-item"><div class="diff-num gold-text">02</div><div><h4>Fundamentação técnica</h4><p>Atuação pautada em legislação vigente, doutrina e jurisprudência consolidada, com pareceres e peças sempre fundamentados em fontes oficiais.</p></div></div>
      <div class="diff-item"><div class="diff-num gold-text">03</div><div><h4>Atendimento dedicado</h4><p>Comunicação direta com o cliente e acompanhamento integral das matérias, com clareza nas explicações técnicas e nas etapas processuais.</p></div></div>
      <div class="diff-item"><div class="diff-num gold-text">04</div><div><h4>Sigilo profissional</h4><p>Tratamento confidencial das informações compartilhadas pelo cliente, em observância às exigências éticas e legais que regem a advocacia.</p></div></div>
    </div>
  </div>
</section>

<section class="journey" id="trajetoria">
  <div class="reveal">
    <div class="section-label">Trajetória profissional</div>
    <h2 class="gold-text">Mais de duas décadas<br>em advocacia corporativa.</h2>
  </div>
  <div class="journey-text reveal">
    <p>Trajetória construída ao longo de mais de vinte anos na advocacia, com atuação consolidada em departamentos jurídicos de empresas nacionais e multinacionais. A vivência executiva abrangeu setores diversos da economia, com responsabilidade direta sobre operações de fusões e aquisições, contratos internacionais, governança corporativa, compliance e questões regulatórias junto a órgãos como ANAC, ANVISA e CVM, incluindo participação em Conselhos de Administração e Assembleias de companhias abertas.</p>
    <p>Esse percurso permitiu o desenvolvimento de uma atuação que combina rigor técnico, leitura estratégica das demandas corporativas e compreensão das exigências regulatórias específicas de cada setor — repertório que hoje fundamenta o trabalho consultivo e contencioso oferecido pelo escritório.</p>
    <p>Em 2019, foi fundada a CLP Advocacia Estratégica, dedicada à atuação em todas as áreas do Direito, com atenção particular ao Direito Empresarial da Saúde — abrangendo a estruturação jurídica de hospitais, clínicas, laboratórios e sociedades médicas, bem como o assessoramento de profissionais da área.</p>
    <div class="sectors">
      <span class="sectors-label">Setores de atuação</span>
      <span class="sector-tag">Saúde</span>
      <span class="sector-tag">Tecnologia</span>
      <span class="sector-tag">Financeiro</span>
      <span class="sector-tag">Alimentação</span>
      <span class="sector-tag">Indústria Fonográfica</span>
      <span class="sector-tag">Varejo</span>
      <span class="sector-tag">Hotelaria</span>
      <span class="sector-tag">Construção Civil</span>
      <span class="sector-tag">Imobiliário</span>
    </div>
  </div>
</section>

<section class="education" id="formacao">
  <div class="reveal">
    <div class="section-label">Formação acadêmica</div>
    <h2 class="gold-text">Formação acadêmica<br>e especialização.</h2>
  </div>
  <div class="edu-grid">
    <div class="edu-card reveal"><div class="edu-year gold-text">2016</div><h3>Direito Empresarial</h3><p>Pós-graduação · FGV Law</p></div>
    <div class="edu-card reveal"><div class="edu-year gold-text">2008</div><h3>Direito Processual Civil</h3><p>Pós-graduação · Unisul / Rede LFG</p></div>
    <div class="edu-card reveal"><div class="edu-year gold-text">2005</div><h3>Direito</h3><p>Graduação · Faculdade de Direito de São Bernardo do Campo</p></div>
  </div>
  <div class="langs reveal">
    <span class="label">Idiomas</span>
    <span class="lang-pill">Português <em>Nativo</em></span>
    <span class="lang-pill">Inglês <em>Fluente</em></span>
  </div>
</section>

<section class="contact" id="contato">
  <div class="reveal">
    <div class="section-label" style="justify-content:center">Atendimento</div>
    <h2 class="gold-text">Entre em <em>contato.</em></h2>
    <p>Para conhecer melhor a atuação do escritório ou solicitar uma consulta, utilize um dos canais abaixo.</p>
    <a href="https://wa.me/5511997103699" class="btn btn-primary">Falar pelo WhatsApp</a>
    <div class="contact-info">
      <div class="ci-item"><div class="label">Telefone</div><a href="tel:+5511997103699">+55 11 99710-3699</a></div>
      <div class="ci-item"><div class="label">WhatsApp</div><a href="https://wa.me/5511994693426">+55 11 99469-3426</a></div>
      <div class="ci-item"><div class="label">Localização</div><span>São Paulo · SP · Brasil</span></div>
    </div>
  </div>
</section>

<footer>
  <a href="#top" class="logo-clp">
    <span class="logo-monogram gold-text">CLP</span>
    <span class="logo-divider"></span>
    <span class="logo-tagline">Advocacia<br>Estratégica</span>
  </a>
  <p>© 2026 CLP Advocacia Estratégica · Cristina Loschiavo Pepino · OAB/SP nº 254.069</p>
</footer>

<script>
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>40)});
function toggleMenu(){document.getElementById('navlinks').classList.toggle('open')}
function closeMenu(){document.getElementById('navlinks').classList.remove('open')}
const io=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*70);io.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
</script>
</body>
</html>
