create extension if not exists pgcrypto;

create table if not exists public.memories (
  id uuid primary key default gen_random_uuid(),
  path text not null,
  media_type text not null default 'image',
  source_name text not null default 'Bronwyn',
  created_at timestamptz not null default now()
);

create table if not exists public.stories (
  owner text primary key check (owner in ('bronwyn','ntokozo')),
  path text not null,
  media_type text not null default 'image',
  liked boolean not null default false,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null
);

alter table public.memories enable row level security;
alter table public.stories enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'memories' and policyname = 'Public read memories'
  ) then
    create policy "Public read memories" on public.memories for select using (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'memories' and policyname = 'Public insert memories'
  ) then
    create policy "Public insert memories" on public.memories for insert with check (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'stories' and policyname = 'Public read stories'
  ) then
    create policy "Public read stories" on public.stories for select using (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'stories' and policyname = 'Public insert stories'
  ) then
    create policy "Public insert stories" on public.stories for insert with check (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'stories' and policyname = 'Public update stories'
  ) then
    create policy "Public update stories" on public.stories for update using (true) with check (true);
  end if;
end
$$;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'relationship-media',
  'relationship-media',
  true,
  52428800,
  array['image/jpeg','image/png','image/webp','image/heic','video/mp4','video/quicktime','video/webm']
)
on conflict (id) do nothing;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage' and tablename = 'objects' and policyname = 'Public read relationship media'
  ) then
    create policy "Public read relationship media" on storage.objects for select using (bucket_id = 'relationship-media');
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage' and tablename = 'objects' and policyname = 'Public upload relationship media'
  ) then
    create policy "Public upload relationship media" on storage.objects for insert with check (bucket_id = 'relationship-media');
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage' and tablename = 'objects' and policyname = 'Public update relationship media'
  ) then
    create policy "Public update relationship media" on storage.objects for update using (bucket_id = 'relationship-media') with check (bucket_id = 'relationship-media');
  end if;
end
$$;


create table if not exists public.locations (
  owner text primary key check (owner in ('ntokozo')),
  latitude double precision not null,
  longitude double precision not null,
  accuracy double precision,
  is_active boolean not null default true,
  updated_at timestamptz not null default now()
);

alter table public.locations enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'locations' and policyname = 'Public read locations'
  ) then
    create policy "Public read locations" on public.locations for select using (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'locations' and policyname = 'Public insert locations'
  ) then
    create policy "Public insert locations" on public.locations for insert with check (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'locations' and policyname = 'Public update locations'
  ) then
    create policy "Public update locations" on public.locations for update using (true) with check (true);
  end if;
end
$$;
