import { supabase } from "@/lib/supabase";

export async function getContent(table: string, fallback: any[] = []) {
  if (!supabase) return fallback;
  const { data, error } = await supabase.from(table).select("*").eq("active", true).order("created_at", { ascending: false });
  return error || !data?.length ? fallback : data;
}

export const fallbackProjects = [
 {id:"p1",title:"Sistema de gestión comercial",category:"Sistemas a medida",description:"Control de ventas, inventario, clientes y reportes desde una sola plataforma.",image_url:"",tags:["Laravel","Web","Dashboard"]},
 {id:"p2",title:"Aplicación móvil de servicios",category:"Aplicaciones móviles",description:"Una experiencia móvil intuitiva para conectar clientes y equipos de trabajo.",image_url:"",tags:["Flutter","Android","iOS"]},
 {id:"p3",title:"Portal institucional",category:"Diseño web",description:"Sitio corporativo moderno, rápido y optimizado para convertir visitas en oportunidades.",image_url:"",tags:["Next.js","SEO","Responsive"]},
 {id:"p4",title:"Sistema de  comercial",category:"Sistemas a medida",description:"Control de ventas, inventario, clientes y reportes desde una sola plataforma.",image_url:"",tags:["Laravel","Web","Dashboard"]},
 {id:"p5",title:"Aplicación móvil de ",category:"Aplicaciones móviles",description:"Una experiencia móvil intuitiva para conectar clientes y equipos de trabajo.",image_url:"",tags:["Flutter","Android","iOS"]},
 {id:"p6",title:"Portal ",category:"Diseño web",description:"Sitio corporativo moderno, rápido y optimizado para convertir visitas en oportunidades.",image_url:"",tags:["Next.js","SEO","Responsive"]}
];
export const fallbackTestimonials = [
 {id:"t1",name:"Cliente empresarial",role:"Dirección general",company:"Empresa de servicios",quote:"Transformaron una necesidad operativa en una solución clara, práctica y fácil de utilizar."},
 {id:"t2",name:"Coordinación administrativa",role:"Administración",company:"Organización local",quote:"La comunicación fue constante y el sistema se adaptó a nuestro flujo de trabajo."}
];
export const fallbackClients = ["Empresas comerciales","Instituciones educativas","Emprendimientos","Organizaciones y profesionales"];
export const fallbackFaq = [
 {id:"f1",question:"¿Desarrollan sistemas adaptados a mi empresa?",answer:"Sí. Analizamos tus procesos y diseñamos una solución a medida, con módulos y reportes según tus necesidades."},
 {id:"f2",question:"¿También ofrecen soporte y mantenimiento?",answer:"Sí. Podemos acompañarte con capacitación, mantenimiento, mejoras y soporte después de la entrega."},
 {id:"f3",question:"¿Cómo solicito una cotización?",answer:"Completa el formulario de contacto con una breve descripción de tu proyecto y nos comunicaremos contigo."}
];
