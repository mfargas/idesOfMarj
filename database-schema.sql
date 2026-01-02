-- Media Kanban Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor

-- Create the media_items table
CREATE TABLE IF NOT EXISTS media_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('book', 'tv_show', 'game', 'movie')),
  state TEXT NOT NULL CHECK (state IN ('suggested', 'in_queue', 'orbiting', 'consumed')),
  author TEXT, -- For books, can be used for creator/director for other types
  notes TEXT, -- Optional notes about the media
  genre TEXT, -- Genre of the media (comedy, drama, sci-fi, etc.)
  stayed_with_me BOOLEAN DEFAULT FALSE,
  multimedia BOOLEAN DEFAULT FALSE, -- Flag for items that exist in multiple formats
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_media_items_type ON media_items(media_type);
CREATE INDEX IF NOT EXISTS idx_media_items_state ON media_items(state);
CREATE INDEX IF NOT EXISTS idx_media_items_stayed_with_me ON media_items(stayed_with_me);
CREATE INDEX IF NOT EXISTS idx_media_items_genre ON media_items(genre);
CREATE INDEX IF NOT EXISTS idx_media_items_multimedia ON media_items(multimedia);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_media_items_updated_at
  BEFORE UPDATE ON media_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE media_items ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow all operations (adjust based on your auth needs)
-- For now, allowing all operations. You may want to restrict this based on user authentication
CREATE POLICY "Allow all operations on media_items" ON media_items
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Optional: Insert some sample data
-- INSERT INTO media_items (title, media_type, state, author, notes) VALUES
--   ('The Medium is the Message', 'book', 'consumed', 'Marshall McLuhan', 'Foundational text on media theory'),
--   ('Severance', 'tv_show', 'consumed', NULL, 'Brilliant exploration of work-life boundaries'),
--   ('Stray', 'game', 'orbiting', NULL, 'Cat game with beautiful atmosphere'),
--   ('Everything Everywhere All At Once', 'movie', 'consumed', 'Daniels', 'Multiverse done right');

