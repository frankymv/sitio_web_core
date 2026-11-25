import { ArrowRight, ArrowUpRight, ShieldCheck, Code2, Smartphone, Globe2, Database, Cloud, Check, PlayCircle, Sparkles, Workflow, Headphones, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import {getContent,fallbackProjects,fallbackTestimonials,fallbackClients,fallbackFaq} from "@/lib/content";

import { cacheLife } from 'next/cache';

export async function CurrentYear() {
  'use cache';
  cacheLife('days'); // Guarda el valor en caché y lo revalida diariamente

  return <>{new Date().getFullYear()}</>;
}


const services=[
 {icon:Code2,title:"Sistemas a medida",desc:"Creamos plataformas que se adaptan a tus procesos: ventas, inventario, gestión, reportes y automatización."},
 {icon:Globe2,title:"Diseño y desarrollo web",desc:"Sitios corporativos, portales y tiendas digitales rápidos, accesibles y optimizados para buscadores."},
 {icon:Smartphone,title:"Aplicaciones móviles",desc:"Experiencias móviles para Android y iOS que acercan tus servicios a tus clientes."},
 {icon:ShieldCheck,title:"Ciberseguridad",desc:"Evaluación de riesgos, buenas prácticas, protección de información y acompañamiento preventivo."},
 {icon:Database,title:"Datos e integración",desc:"Centraliza información, conecta plataformas y convierte datos en decisiones útiles."},
 {icon:Cloud,title:"Consultoría y soporte",desc:"Acompañamiento tecnológico, modernización, mantenimiento y capacitación para tu equipo."}
];
const steps=[["01","Descubrimos","Entendemos tus objetivos, usuarios y procesos."],["02","Diseñamos","Definimos una solución clara, segura y escalable."],["03","Desarrollamos","Construimos, probamos y validamos contigo."],["04","Acompañamos","Publicamos, capacitamos y damos soporte."]];
export default async function Home(){
 const [projects,testimonials,clients,faqs,videos]=await Promise.all([
  getContent("projects",fallbackProjects),getContent("testimonials",fallbackTestimonials),getContent("clients",fallbackClients.map((name,i)=>({id:String(i),name}))),getContent("faqs",fallbackFaq),getContent("videos",[])
 ]);
return <>

<Navbar/>
<main>
    <section id="inicio" className="relative overflow-hidden pb-24 pt-36 md:pt-44 section bg-white">
        <div className="container relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
            <div>
            <h1 className="max-w-3xl text-5xl text-[oklch(0%_0_0)] font-black leading-[1.04] tracking-[-.055em] md:text-7xl">
                Impulsamos tu negocio con <span className="gradient-text-white">soluciones digitales.</span>
            </h1>
            <p className="muted-white mt-7 max-w-xl text-lg leading-8 ">
                Transformamos ideas y procesos en tecnología útil: consultoría, sistemas a medida, aplicaciones móviles, desarrollo web y ciberseguridad.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contacto" className="btn btn-primary-white">
                Cuéntanos tu proyecto <ArrowUpRight size={17} />
                </a>
            </div>
            </div>

            <div className="relative mx-auto w-full max-w-[800px]">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-violet-500/25 to-cyan-400/10 blur-2xl" />
            <img 
                src="/images/data-analytics-dashboard.jpg" 
                alt="Soluciones digitales para negocios" 
                className="relative z-10 w-full h-auto rounded-3xl object-cover shadow-xl"
            />
            </div>
        </div>
    </section>




    <section id="servicios" className="section bg-[#0d1524]">
        <div className="container">
            <div className="max-w-2xl">
                <h2 className="section-title">Lo que  <span className="gradient-text">hacemos.</span>
                </h2>
                <p className="muted mt-4 leading-7">Acompañamos a empresas y organizaciones en cada etapa de su evolución digital, desde la idea hasta la implementación.</p>
            </div>
            <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=><article key={s.title} className="glass card group transition hover:-translate-y-1 hover:border-violet-300/40">
                <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-200"><s.icon size={23}/>
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="muted mt-3 text-sm leading-6">{s.desc}</p>
                <a href="#contacto" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">Conocer más <ArrowUpRight size={15}/></a></article>)}
            </div>
        </div>
    </section>


    <section id="portafolio" className="section bg-white">
        <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-5">
                <div>
                    <h2 className="section-title-white">Ideas transformadas en  <span className="gradient-text-white">Proyectos.</span></h2>
                </div>
                </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{projects.map((p:any,i:number)=><article key={p.id||i} className="glass overflow-hidden rounded-3xl">
            <div className="grid-bg relative grid h-48 place-items-center overflow-hidden bg-gradient-to-br from-violet-500/20 to-cyan-500/10">{p.image_url?<img src={p.image_url} alt={p.title} className="h-full w-full object-cover"/>:
                <div className="text-center">
                    <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/5 text-cyan-200">{i===1?<Smartphone size={30}/>:i===2?<Globe2 size={30}/>:<Workflow size={30}/>}
                    </div>
                        <span className="text-xs tracking-[.2em] text-slate-400">PROYECTO DIGITAL</span>
                    </div>}
                </div>
                
                <div className="grid-bg bg-[#0d1524] p-6 ">
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">{p.category||"Desarrollo"}</p>
                    <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                    <p className="muted mt-3 text-sm leading-6">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{(p.tags||[]).map((tag:string)=><span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-300">{tag}</span>)}
                    </div>
                </div>
            </article>)}
            </div>
        </div>
    </section>







    <section id="contacto" className="section ">
        <div className="container grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
                <h2 className="section-title text-4xl md:text-5xl">Es momento de hablar <span className="gradient-text">Contactanos.</span></h2>
                <p className="muted mt-5 leading-7">Cuéntanos qué necesitas mejorar, automatizar o crear. Analizaremos tu idea y te orientaremos sobre el camino tecnológico más adecuado.</p>
            </div>
            <ContactForm/>
        </div>
    </section>

    </main>
 
    <footer className="border-t border-white/10 py-9">
        <div className="container flex flex-col justify-between gap-5 text-sm text-slate-400 md:flex-row">
            <div>
                <span className="font-extrabold tracking-wide text-white">SISTEMAS<span className="text-cyan-300">.</span> DIGITAL</span>
                <p className="mt-2 text-xs">ChapinCORE</p>
            </div>
            <div className="flex flex-wrap gap-5 text-white">
                <a href="#servicios">Servicios</a>
                <a href="#portafolio">Portafolio</a>
                <a href="#contacto">Contacto</a>
                <a href="/admin/login">Administración</a>
            </div>
            
                <p className="text-xs">
                © <CurrentYear /> ChapinCORE. Todos los derechos reservados.
                </p>
        </div>
    </footer>
</>;
}