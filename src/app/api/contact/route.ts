import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
export async function POST(req:Request){
 try{
  const body=await req.json();
  const {name,email,message}=body;
  if(!name||!email||!message)return NextResponse.json({error:"Completa nombre, correo y mensaje."},{status:400});
  if(supabase){
   const {error}=await supabase.from("contact_messages").insert([{name,email,phone:body.phone||"",service:body.service||"",message,status:"nuevo"}]);
   if(error)throw error;
  }else{
   console.warn("Solicitud de contacto (configura Supabase para almacenarla):",body);
  }
  return NextResponse.json({ok:true});
 }catch(e){console.error(e);return NextResponse.json({error:"No se pudo guardar el mensaje. Verifica la configuración."},{status:500});}
}