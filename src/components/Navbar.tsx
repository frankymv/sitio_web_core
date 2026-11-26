"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links=[["Inicio","#inicio"],["Servicios","#servicios"],["Portafolio","#portafolio"],["Contacto","#contacto"]];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[var(--color-negro)] backdrop-blur-xl">
    <nav className="container flex h-[76px] items-center justify-between">
        <a href="#" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br  font-black text-lg">N</span>
            <span className="font-extrabold tracking-wide">SISTEMAS
                <small className="block -mt-1 text-[9px] font-semibold tracking-[.24em] text-[var(--color-naranja)]">ChapinCORE</small>
            </span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-white md:flex">{links.map(([n,h])=><a key={n} className="hover:text-[var(--color-naranja)]" href={h}>{n}</a>)}
            <a className="btn btn-primary-dark !py-2.5 !text-xs" href="#contacto">Hablemos <ArrowUpRight size={15}/></a>
        </div>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Abrir menú">{open?<X/>:<Menu/>}</button>
    </nav>
    {open&&<div >{links.map(([n,h])=><a onClick={()=>setOpen(false)} key={n} href={h}>{n}</a>)}</div>}
    </header>
}