create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null check (role in ('parent', 'staff', 'admin')),
  agency_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.families (
  id uuid primary key default gen_random_uuid(),
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  caregiver_name text,
  primary_client_name text,
  case_note text,
  assigned_course_slug text,
  created_at timestamptz not null default now()
);

create unique index if not exists families_parent_user_id_idx
on public.families(parent_user_id);

create table if not exists public.family_children (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  child_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.staff_family_assignments (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  staff_user_id uuid not null references auth.users(id) on delete cascade,
  assigned_at timestamptz not null default now(),
  unique (family_id, staff_user_id)
);

create table if not exists public.daily_logs (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  day_number integer check (day_number between 1 and 21),
  session_title text,
  log_date date not null default current_date,
  what_happened text,
  connection_used text,
  reward_used text,
  follow_through text,
  learned text,
  tomorrow_focus text,
  created_at timestamptz not null default now()
);

create table if not exists public.attendance_logs (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  session_title text,
  session_date date not null default current_date,
  status text,
  learned text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.assessment_submissions (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families(id) on delete cascade,
  assessment_type text,
  ratings jsonb not null default '{}'::jsonb,
  strengths text,
  growth_area text,
  family_change text,
  created_at timestamptz not null default now()
);

create table if not exists public.completion_records (
  family_id uuid primary key references public.families(id) on delete cascade,
  completed_sessions integer not null default 0,
  certificate_unlocked boolean not null default false,
  completed_at timestamptz,
  certificate_name text
);

alter table public.profiles enable row level security;
alter table public.families enable row level security;
alter table public.family_children enable row level security;
alter table public.staff_family_assignments enable row level security;
alter table public.daily_logs enable row level security;
alter table public.attendance_logs enable row level security;
alter table public.assessment_submissions enable row level security;
alter table public.completion_records enable row level security;

drop policy if exists "profiles_self_select" on public.profiles;
create policy "profiles_self_select"
on public.profiles
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "profiles_self_insert" on public.profiles;
create policy "profiles_self_insert"
on public.profiles
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update"
on public.profiles
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "families_parent_full_access" on public.families;
create policy "families_parent_full_access"
on public.families
for all
to authenticated
using (parent_user_id = auth.uid())
with check (parent_user_id = auth.uid());

drop policy if exists "families_staff_read_only" on public.families;
create policy "families_staff_read_only"
on public.families
for select
to authenticated
using (
  exists (
    select 1
    from public.staff_family_assignments sfa
    where sfa.family_id = families.id
      and sfa.staff_user_id = auth.uid()
  )
);

drop policy if exists "children_parent_full_access" on public.family_children;
create policy "children_parent_full_access"
on public.family_children
for all
to authenticated
using (
  exists (
    select 1
    from public.families f
    where f.id = family_children.family_id
      and f.parent_user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.families f
    where f.id = family_children.family_id
      and f.parent_user_id = auth.uid()
  )
);

drop policy if exists "children_staff_read_only" on public.family_children;
create policy "children_staff_read_only"
on public.family_children
for select
to authenticated
using (
  exists (
    select 1
    from public.staff_family_assignments sfa
    where sfa.family_id = family_children.family_id
      and sfa.staff_user_id = auth.uid()
  )
);

drop policy if exists "staff_assignments_self_read" on public.staff_family_assignments;
create policy "staff_assignments_self_read"
on public.staff_family_assignments
for select
to authenticated
using (staff_user_id = auth.uid());

drop policy if exists "daily_logs_parent_full_access" on public.daily_logs;
create policy "daily_logs_parent_full_access"
on public.daily_logs
for all
to authenticated
using (
  exists (
    select 1 from public.families f
    where f.id = daily_logs.family_id
      and f.parent_user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.families f
    where f.id = daily_logs.family_id
      and f.parent_user_id = auth.uid()
  )
);

drop policy if exists "daily_logs_staff_read_only" on public.daily_logs;
create policy "daily_logs_staff_read_only"
on public.daily_logs
for select
to authenticated
using (
  exists (
    select 1
    from public.staff_family_assignments sfa
    where sfa.family_id = daily_logs.family_id
      and sfa.staff_user_id = auth.uid()
  )
);

drop policy if exists "attendance_parent_full_access" on public.attendance_logs;
create policy "attendance_parent_full_access"
on public.attendance_logs
for all
to authenticated
using (
  exists (
    select 1 from public.families f
    where f.id = attendance_logs.family_id
      and f.parent_user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.families f
    where f.id = attendance_logs.family_id
      and f.parent_user_id = auth.uid()
  )
);

drop policy if exists "attendance_staff_read_only" on public.attendance_logs;
create policy "attendance_staff_read_only"
on public.attendance_logs
for select
to authenticated
using (
  exists (
    select 1
    from public.staff_family_assignments sfa
    where sfa.family_id = attendance_logs.family_id
      and sfa.staff_user_id = auth.uid()
  )
);

drop policy if exists "assessment_parent_full_access" on public.assessment_submissions;
create policy "assessment_parent_full_access"
on public.assessment_submissions
for all
to authenticated
using (
  exists (
    select 1 from public.families f
    where f.id = assessment_submissions.family_id
      and f.parent_user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.families f
    where f.id = assessment_submissions.family_id
      and f.parent_user_id = auth.uid()
  )
);

drop policy if exists "assessment_staff_read_only" on public.assessment_submissions;
create policy "assessment_staff_read_only"
on public.assessment_submissions
for select
to authenticated
using (
  exists (
    select 1
    from public.staff_family_assignments sfa
    where sfa.family_id = assessment_submissions.family_id
      and sfa.staff_user_id = auth.uid()
  )
);

drop policy if exists "completion_parent_full_access" on public.completion_records;
create policy "completion_parent_full_access"
on public.completion_records
for all
to authenticated
using (
  exists (
    select 1 from public.families f
    where f.id = completion_records.family_id
      and f.parent_user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.families f
    where f.id = completion_records.family_id
      and f.parent_user_id = auth.uid()
  )
);

drop policy if exists "completion_staff_read_only" on public.completion_records;
create policy "completion_staff_read_only"
on public.completion_records
for select
to authenticated
using (
  exists (
    select 1
    from public.staff_family_assignments sfa
    where sfa.family_id = completion_records.family_id
      and sfa.staff_user_id = auth.uid()
  )
);
