"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
export default function ContactForm(){
 const [busy,setBusy]=useState(false),[done,setDone]=useState(false),[error,setError]=useState("");
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();setBusy(true);setError("");setDone(false);
  const form=e.currentTarget;const payload=Object.fromEntries(new FormData(form).entries());
  try{const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const j=await r.json();if(!r.ok)throw new Error(j.error||"No fue posible enviar.");setDone(true);form.reset();}
  catch(err:any){setError(err.message||"Ocurrió un error. Intenta nuevamente.");}
  finally{setBusy(false);}
 }
 return <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-8">
  {done&&<div className="mb-5 flex gap-2 rounded-xl bg-emerald-400/10 p-3 text-sm text-emerald-300"><CheckCircle2 size={18}/> ¡Mensaje enviado! Nos pondremos en contacto contigo.</div>}
  {error&&<p className="mb-4 text-sm text-rose-300">{error}</p>}
  <div className="grid gap-4 sm:grid-cols-2">
   <label className="text-sm text-slate-300">Nombre completo<input required name="name" className="field mt-2" placeholder="Tu nombre"/></label>
   <label className="text-sm text-slate-300">Correo electrónico<input required type="email" name="email" className="field mt-2" placeholder="correo@empresa.com"/></label>
   <label className="text-sm text-slate-300">Teléfono / WhatsApp<input name="phone" className="field mt-2" placeholder="+502 0000-0000"/></label>
   <label className="text-sm text-slate-300">Servicio de interés<select name="service" className="field mt-2"><option>Consultoría tecnológica</option><option>Sistema a medida</option><option>Desarrollo web</option><option>Aplicación móvil</option><option>Ciberseguridad</option><option>Otro</option></select></label>
  </div>
  <label className="mt-4 block text-sm text-slate-300">Cuéntanos sobre tu proyecto<textarea required name="message" rows={4} className="field mt-2 resize-y" placeholder="¿Qué necesitas resolver?"/></label>
  <button disabled={busy} className="btn btn-primary mt-5 w-full disabled:opacity-60">{busy?"Enviando...":"Enviar solicitud"} <Send size={16}/></button>
  <p className="mt-3 text-center text-xs text-slate-500">Tus datos serán utilizados únicamente para atender tu solicitud.</p>
 </form>
}