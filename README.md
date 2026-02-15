# Smart Bookmarks

## Overview
A full-stack bookmark manager built with Next.js App Router and Supabase.

## Tech Stack
- Next.js (App Router)
- Supabase (Auth, Database, Realtime)
- PostgreSQL
- Tailwind CSS

## Features
- Google OAuth authentication
- Secure user-specific bookmarks using Row Level Security
- Realtime updates across tabs
- Clean and responsive UI

## Auth & Security
- Supabase Google OAuth
- HttpOnly cookies
- Row Level Security using auth.uid()

## Realtime
- Postgres changes subscription
- router.refresh() for server component revalidation

## Challenges Faced
- App Router auth session handling
- RLS policy debugging
- Realtime self-event behavior
