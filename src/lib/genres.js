// Common genres for media items
export const GENRES = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Thriller',
  'Western',
  'Non-Fiction',
  'Fiction',
  'Historical',
  'Musical',
  'Sports',
  'War',
  'Superhero',
  'Indie',
  'Experimental'
]

export const getGenreOptions = () => {
  return [
    { value: 'all', label: 'All Genres' },
    ...GENRES.map(genre => ({ value: genre.toLowerCase(), label: genre }))
  ]
}

