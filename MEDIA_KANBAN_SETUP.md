# Media Kanban System Setup

## Overview

This is a unified Media Kanban system that tracks Books, TV Shows, Games, and Movies across four states:
- **Suggested** - Media that's been recommended or discovered
- **In Queue** - Media you plan to consume next
- **Orbiting** - Media you're currently engaging with
- **Consumed** - Media you've finished

Each item can optionally be marked with a ♥ "Stayed With Me" flag to indicate personal resonance.

## Database Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be fully provisioned

### 2. Run Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the contents of `database-schema.sql`
3. Click **Run** to execute the schema

This will create:
- `media_items` table with all necessary columns
- Indexes for performance
- Row Level Security policies
- Automatic timestamp updates

### 3. Get Your Supabase Credentials

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy your **Project URL** and **anon/public key**

### 4. Set Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Pages

The system creates four filtered views:

- `/media/books` - Books Log
- `/media/tv-shows` - TV Shows Log  
- `/media/games` - Games Log
- `/media/movies` - Movies Log

Each page shows only items of that media type, organized in the Kanban board.

## Features

### Drag and Drop
- Drag items between columns to change their state
- Changes are automatically saved to Supabase

### Stayed With Me Flag
- Click the ♥ button on any card to mark it as personally resonant
- Cards with this flag get a special border and badge
- This is separate from any ranking or review system

### Notes
- Each media item can have optional notes
- Use this to capture thoughts, quotes, or observations

## Database Schema

The `media_items` table has the following structure:

- `id` - UUID primary key
- `title` - Text (required)
- `media_type` - Enum: 'book', 'tv_show', 'game', 'movie'
- `state` - Enum: 'suggested', 'in_queue', 'orbiting', 'consumed'
- `author` - Text (optional, for creator/director/etc)
- `notes` - Text (optional)
- `stayed_with_me` - Boolean (default: false)
- `created_at` - Timestamp
- `updated_at` - Timestamp (auto-updated)

## Adding Items

You can add items directly through Supabase:
1. Go to **Table Editor** → `media_items`
2. Click **Insert** → **Insert row**
3. Fill in the required fields

Or you can add a form component later to add items through the UI.

## Installation

After setting up Supabase, install the Supabase client:

```bash
npm install @supabase/supabase-js
```

The package.json has already been updated with this dependency.

