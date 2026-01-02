// Supabase client setup
// Replace with your Supabase project URL and anon key
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only create client if credentials are provided
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabase !== null
}

// Media types
export const MEDIA_TYPES = {
  BOOK: 'book',
  TV_SHOW: 'tv_show',
  GAME: 'game',
  MOVIE: 'movie'
}

// Media states
export const MEDIA_STATES = {
  CONSUMED: 'consumed',
  IN_QUEUE: 'in_queue',
  ORBITING: 'orbiting',
  SUGGESTED: 'suggested'
}

