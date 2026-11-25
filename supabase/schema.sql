-- Ejecuta este script en Supabase > SQL Editor.
create extension if not exists pgcrypto;
create table if not exists public.projects (
 id uuid primary key default gen_random_uuid(), title text not null, category text, description text,
 image_url text, tags text[] default '{}', active boolean default true, created_at timestamptz default now()
);
create table if not exists public.clients (
 id uuid primary key default gen_random_uuid(), name text not null, logo_url text,
 active boolean default true, created_at timestamptz default now()
);
create table if not exists public.testimonials (
 id uuid primary key default gen_random_uuid(), name text not null, role text, company text, quote text not null,
 active boolean default true, created_at timestamptz default now()
);
create table if not exists public.videos (
 id uuid primary key default gen_random_uuid(), title text not null, description text, embed_url text not null,
 active boolean default true, created_at timestamptz default now()
);
create table if not exists public.faqs (
 id uuid primary key default gen_random_uuid(), question text not null, answer text not null,
 active boolean default true, created_at timestamptz default now()
);
create table if not exists public.contact_messages (
 id uuid primary key default gen_random_uuid(), name text not null, email text not null, phone text,
 service text, message text not null, status text default 'nuevo', created_at timestamptz default now()
);
-- RLS: lectura pública solo de contenido activo.
alter table public.projects enable row level security;
alter table public.clients enable row level security;
alter table public.testimonials enable row level security;
alter table public.videos enable row level security;
alter table public.faqs enable row level security;
alter table public.contact_messages enable row level security;
do $$ declare t text; begin
 foreach t in array array['projects','clients','testimonials','videos','faqs'] loop
  execute format('drop policy if exists "public read active" on public.%I',t);
  execute format('create policy "public read active" on public.%I for select using (active = true)',t);
  execute format('drop policy if exists "admin manage content" on public.%I',t);
  execute format('create policy "admin manage content" on public.%I for all to authenticated using (true) with check (true)',t);
 end loop;
end $$;
-- El formulario público puede insertar mensajes, pero no leerlos.
drop policy if exists "public submit contact" on public.contact_messages;
create policy "public submit contact" on public.contact_messages for insert with check (true);
drop policy if exists "admin read contacts" on public.contact_messages;
create policy "admin read contacts" on public.contact_messages for select to authenticated using (true);
