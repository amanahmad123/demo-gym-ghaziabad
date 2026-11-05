import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Check, Dumbbell, MoveUpRight, ShieldCheck, Sparkles, Timer, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { programs, plans, faqs, site } from '../data/site.js';
import { Reveal, SectionHead, ProgramCard } from '../components/Shared.jsx';

const highlights = [
  { icon: Dumbbell, title: 'Train with purpose', copy: 'A focused space to build strength, stamina and confidence.' },
  { icon: Users, title: 'Your pace. Your goals.', copy: 'A welcoming start for beginners and experienced lifters alike.' },
  { icon: ShieldCheck, title: 'Progress with guidance', copy: 'Ask about coaching and a routine that fits your lifestyle.' },
];

export default function Home() {
  return <>
    <section className="hero hero-premium">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-content container">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>GHAZIABAD · TRAINING FOR REAL LIFE</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .7 }}>EARN YOUR<br/><em>STRONG.</em></motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38, duration: .6 }}>Not another quick fix. A better relationship with training, built one session at a time. Find your focus at DEMO GYM.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .52, duration: .55 }}>
          <Link to="/contact" className="btn btn-primary">BOOK A FREE INTRO <ArrowUpRight size={18}/></Link>
          <Link to="/programs" className="btn btn-outline">EXPLORE TRAINING <MoveUpRight size={16}/></Link>
        </motion.div>
        <div className="hero-proof"><span className="proof-dot"/> YOUR NEXT CHAPTER STARTS HERE <span className="proof-divider"/> <a href={`tel:${site.phoneLink}`}>CALL {site.phone}</a></div>
      </div>
      <div className="hero-side-label">STRENGTH · CONDITIONING · COMMUNITY</div>
      <a href="#intro" className="scroll-cue"><ArrowDown size={16}/> SCROLL TO EXPLORE</a>
      <div className="hero-index">01 <span>/</span> 04</div>
    </section>

    <section className="brand-ribbon" aria-label="Our approach"><div>SHOW UP <i>✳</i> GET STRONGER <i>✳</i> STAY CONSISTENT <i>✳</i> REPEAT <i>✳</i> SHOW UP <i>✳</i> GET STRONGER <i>✳</i></div></section>

    <section className="section intro-section container" id="intro">
      <Reveal><div className="intro-image premium-intro-image"><img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=88" alt="Strength training floor with modern gym equipment" loading="lazy"/><div className="image-stamp">BUILT FOR<br/><b>THE LONG RUN.</b></div><span className="image-caption">01 — THE DEMO GYM TRAINING FLOOR</span></div></Reveal>
      <Reveal><div className="intro-copy"><span className="eyebrow">WELCOME TO DEMO GYM</span><h2>MAKE YOUR<br/><em>MOVE.</em></h2><p>Good training should feel challenging, considered and worth coming back for. DEMO GYM is a Ghaziabad-focused fitness club for people who want to build a stronger routine, move better and feel more capable in everyday life.</p><ul className="check-list"><li><Check/> A welcoming environment for every starting point</li><li><Check/> Strength, conditioning and purposeful movement</li><li><Check/> Clear membership and enquiry options</li></ul><Link to="/about" className="text-link">THE DEMO GYM APPROACH <ArrowUpRight size={16}/></Link></div></Reveal>
    </section>

    <section className="section values-band"><div className="container values-band-grid">{highlights.map(({icon:Icon,title,copy},i)=><Reveal key={title}><article className="highlight-card"><span className="highlight-number">0{i+1}</span><Icon size={25} strokeWidth={1.5}/><h3>{title}</h3><p>{copy}</p></article></Reveal>)}</div></section>

    <section className="section programs-section"><div className="container"><div className="section-row"><SectionHead eyebrow="FIND YOUR FOCUS" title={<>TRAIN WITH<br/><em>INTENTION.</em></>} copy="Different goals. Different starting points. One place to make meaningful progress."/><Link to="/programs" className="btn btn-outline">ALL PROGRAMS <ArrowUpRight size={17}/></Link></div><div className="program-grid">{programs.slice(0,3).map(x=><Reveal key={x.n}><ProgramCard item={x}/></Reveal>)}</div></div></section>

    <section className="statement statement-premium"><div className="statement-bg"/><div className="container statement-inner"><span className="eyebrow">THE DEMO GYM STANDARD · NO SHORTCUTS</span><h2>CONSISTENCY<br/><em>CHANGES</em><br/>EVERYTHING.</h2><p>Big changes rarely happen in one day. They happen when you keep showing up for yourself.</p><Link to="/contact" className="btn btn-primary">TAKE THE FIRST STEP <ArrowUpRight size={17}/></Link></div><div className="statement-mark">DEMO GYM<span>.</span></div></section>

    <section className="section pricing-preview container"><div className="section-row"><SectionHead eyebrow="SIMPLE. CLEAR. FLEXIBLE." title={<>INVEST IN<br/><em>YOURSELF.</em></>} copy="Explore sample membership options. Contact the team to confirm current prices, offers and inclusions."/><Link to="/membership" className="text-link">VIEW ALL MEMBERSHIPS <ArrowUpRight size={16}/></Link></div><div className="price-grid">{plans.map((p,i)=><Reveal key={p.name}><div className={`price-card ${p.popular?'featured':''}`}>{p.popular&&<span className="popular-tag">MEMBER FAVOURITE</span>}<span className="price-number">0{i+1} / MEMBERSHIP</span><h3>{p.name}</h3><p>{p.desc}</p><div className="price">{p.price}<small>{p.period}</small></div><ul>{p.features.map(f=><li key={f}><Check size={15}/>{f}</li>)}</ul><Link to="/contact" className={p.popular?'btn btn-primary':'btn btn-outline'}>ASK ABOUT THIS PLAN <ArrowUpRight size={16}/></Link></div></Reveal>)}</div><p className="fine-print">Prices and inclusions are sample content and must be confirmed by DEMO GYM before publication.</p></section>

    <section className="section container faq-preview"><div className="section-row"><SectionHead eyebrow="GOOD TO KNOW" title={<>START WITH<br/><em>CLARITY.</em></>} copy="A few quick answers before you make your first visit."/><Link to="/faq" className="text-link">ALL FAQs <ArrowUpRight size={16}/></Link></div><div className="faq-list">{faqs.slice(0,3).map(([q,a])=><details className="faq-item" key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

    <section className="contact-strip"><div className="container contact-strip-inner"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>LET'S GET<br/><em>YOU MOVING.</em></h2><p>Call or WhatsApp DEMO GYM to ask about a visit, membership or training options in Ghaziabad.</p></div><div className="contact-strip-actions"><a className="btn btn-dark" href={`tel:${site.phoneLink}`}>CALL {site.phone} <ArrowUpRight size={17}/></a><a className="btn btn-light-outline" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hi DEMO GYM, I would like to enquire about a trial visit and membership in Ghaziabad.')}`} target="_blank" rel="noreferrer">WHATSAPP US <ArrowUpRight size={17}/></a></div><Sparkles className="strip-spark" size={90} strokeWidth={.7}/></div></section>
  </>;
}
