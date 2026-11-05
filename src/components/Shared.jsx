import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Reveal({children,className=''}){return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.55,ease:'easeOut'}}>{children}</motion.div>}
export function SectionHead({eyebrow,title,copy,light=false}){return <div className={`section-head ${light?'light':''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
export function PageHero({eyebrow,title,copy,image}){return <section className="page-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,5,5,.94),rgba(5,5,5,.38)),url(${image||'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85'})`}}><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{copy&&<p>{copy}</p>}</div></section>}
export function ProgramCard({item}){return <article className="program-card"><div className="program-img" style={{backgroundImage:`url(${item.image})`}}><span>{item.n}</span></div><div className="program-copy"><small>{item.tag}</small><h3>{item.name}</h3><p>{item.desc}</p><Link to="/contact" className="text-link">ENQUIRE NOW <ArrowUpRight size={16}/></Link></div></article>}
