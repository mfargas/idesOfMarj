import * as React from 'react'
import * as styles from '../styles/mediaKanban.module.css'
import { supabase, MEDIA_STATES, isSupabaseConfigured } from '../lib/supabase'
import { getGenreOptions } from '../lib/genres'

// Sample data for testing
const getSampleData = (mediaType) => {
  const sampleData = {
    book: [
      { id: '1', title: 'The Medium is the Message', media_type: 'book', state: 'consumed', author: 'Marshall McLuhan', notes: 'Foundational text on media theory', genre: 'non-fiction', stayed_with_me: true, multimedia: false },
      { id: '2', title: 'Understanding Media', media_type: 'book', state: 'consumed', author: 'Marshall McLuhan', notes: 'Extensions of ourselves', genre: 'non-fiction', stayed_with_me: false, multimedia: false },
      { id: '3', title: 'The Shallows', media_type: 'book', state: 'orbiting', author: 'Nicholas Carr', notes: 'How the internet is changing our brains', genre: 'non-fiction', stayed_with_me: false, multimedia: false },
      { id: '4', title: 'Amusing Ourselves to Death', media_type: 'book', state: 'in_queue', author: 'Neil Postman', notes: null, genre: 'non-fiction', stayed_with_me: false, multimedia: false },
      { id: '5', title: 'The Attention Merchants', media_type: 'book', state: 'suggested', author: 'Tim Wu', notes: null, genre: 'non-fiction', stayed_with_me: false, multimedia: false },
      { id: '6', title: 'The Hunger Games', media_type: 'book', state: 'consumed', author: 'Suzanne Collins', notes: null, genre: 'sci-fi', stayed_with_me: false, multimedia: true },
    ],
    tv_show: [
      { id: '1', title: 'Severance', media_type: 'tv_show', state: 'consumed', author: null, notes: 'Brilliant exploration of work-life boundaries', genre: 'drama', stayed_with_me: true, multimedia: false },
      { id: '2', title: 'The Bear', media_type: 'tv_show', state: 'consumed', author: null, notes: 'Kitchen chaos and human connection', genre: 'comedy', stayed_with_me: true, multimedia: false },
      { id: '3', title: 'Station Eleven', media_type: 'tv_show', state: 'orbiting', author: null, notes: 'Post-apocalyptic storytelling', genre: 'drama', stayed_with_me: false, multimedia: false },
      { id: '4', title: 'Reservation Dogs', media_type: 'tv_show', state: 'in_queue', author: null, notes: null, genre: 'comedy', stayed_with_me: false, multimedia: false },
      { id: '5', title: 'Andor', media_type: 'tv_show', state: 'suggested', author: null, notes: 'Star Wars for adults', genre: 'sci-fi', stayed_with_me: false, multimedia: false },
    ],
    game: [
      { id: '1', title: 'Stray', media_type: 'game', state: 'consumed', author: null, notes: 'Cat game with beautiful atmosphere', genre: 'adventure', stayed_with_me: true, multimedia: false },
      { id: '2', title: 'Journey', media_type: 'game', state: 'consumed', author: null, notes: 'Meditative multiplayer experience', genre: 'adventure', stayed_with_me: true, multimedia: false },
      { id: '3', title: 'Disco Elysium', media_type: 'game', state: 'orbiting', author: null, notes: 'Detective RPG with incredible writing', genre: 'mystery', stayed_with_me: false, multimedia: false },
      { id: '4', title: 'Cocoon', media_type: 'game', state: 'in_queue', author: null, notes: null, genre: 'puzzle', stayed_with_me: false, multimedia: false },
      { id: '5', title: 'Viewfinder', media_type: 'game', state: 'suggested', author: null, notes: 'Photography puzzle game', genre: 'puzzle', stayed_with_me: false, multimedia: false },
    ],
    movie: [
      { id: '1', title: 'Everything Everywhere All At Once', media_type: 'movie', state: 'consumed', author: 'Daniels', notes: 'Multiverse done right', genre: 'sci-fi', stayed_with_me: true, multimedia: false },
      { id: '2', title: 'Parasite', media_type: 'movie', state: 'consumed', author: 'Bong Joon-ho', notes: 'Class commentary through genre', genre: 'thriller', stayed_with_me: true, multimedia: false },
      { id: '3', title: 'The Fabelmans', media_type: 'movie', state: 'orbiting', author: 'Steven Spielberg', notes: 'Personal storytelling', genre: 'drama', stayed_with_me: false, multimedia: false },
      { id: '4', title: 'Aftersun', media_type: 'movie', state: 'in_queue', author: null, notes: null, genre: 'drama', stayed_with_me: false, multimedia: false },
      { id: '5', title: 'Tár', media_type: 'movie', state: 'suggested', author: null, notes: 'Conducting and power dynamics', genre: 'drama', stayed_with_me: false, multimedia: false },
      { id: '6', title: 'The Hunger Games', media_type: 'movie', state: 'consumed', author: 'Gary Ross', notes: null, genre: 'sci-fi', stayed_with_me: false, multimedia: true },
    ]
  }
  return sampleData[mediaType] || []
}

const MediaKanban = ({ mediaType, title }) => {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [draggedItem, setDraggedItem] = React.useState(null)
  const [usingSampleData, setUsingSampleData] = React.useState(false)
  
  // Filter states
  const [selectedGenre, setSelectedGenre] = React.useState('all')
  const [stayedWithMeOnly, setStayedWithMeOnly] = React.useState(false)

  // Fetch media items filtered by type
  React.useEffect(() => {
    fetchMediaItems()
  }, [mediaType])

  const fetchMediaItems = async () => {
    if (!isSupabaseConfigured()) {
      // Use sample data
      setLoading(true)
      setTimeout(() => {
        setItems(getSampleData(mediaType))
        setUsingSampleData(true)
        setLoading(false)
      }, 500) // Simulate loading
      return
    }

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('media_items')
        .select('*')
        .eq('media_type', mediaType)
        .order('created_at', { ascending: false })

      if (error) throw error
      setItems(data || [])
      setUsingSampleData(false)
    } catch (error) {
      console.error('Error fetching media items:', error)
      // Fallback to sample data on error
      setItems(getSampleData(mediaType))
      setUsingSampleData(true)
    } finally {
      setLoading(false)
    }
  }

  const handleDragStart = (e, item) => {
    setDraggedItem(item)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = async (e, newState) => {
    e.preventDefault()
    if (!draggedItem) return

    if (draggedItem.state === newState) {
      setDraggedItem(null)
      return
    }

    // Update local state immediately
    setItems(items.map(item =>
      item.id === draggedItem.id ? { ...item, state: newState } : item
    ))

    // Only save to Supabase if configured
    if (isSupabaseConfigured() && supabase) {
      try {
        const { error } = await supabase
          .from('media_items')
          .update({ state: newState })
          .eq('id', draggedItem.id)

        if (error) throw error
      } catch (error) {
        console.error('Error updating media item:', error)
        // Revert on error
        setItems(items)
      }
    }

    setDraggedItem(null)
  }

  const toggleStayedWithMe = async (item) => {
    // Update local state immediately
    setItems(items.map(i =>
      i.id === item.id ? { ...i, stayed_with_me: !i.stayed_with_me } : i
    ))

    // Only save to Supabase if configured
    if (isSupabaseConfigured() && supabase) {
      try {
        const { error } = await supabase
          .from('media_items')
          .update({ stayed_with_me: !item.stayed_with_me })
          .eq('id', item.id)

        if (error) throw error
      } catch (error) {
        console.error('Error toggling stayed with me:', error)
        // Revert on error
        setItems(items)
      }
    }
  }

  // Apply filters
  const getFilteredItems = () => {
    let filtered = [...items]

    if (selectedGenre !== 'all') {
      filtered = filtered.filter(item => item.genre === selectedGenre)
    }

    if (stayedWithMeOnly) {
      filtered = filtered.filter(item => item.stayed_with_me === true)
    }

    return filtered
  }

  const getItemsByState = (state) => {
    const filtered = getFilteredItems()
    return filtered.filter(item => item.state === state)
  }

  const genreOptions = getGenreOptions()

  const columns = [
    { key: MEDIA_STATES.SUGGESTED, label: 'Suggested' },
    { key: MEDIA_STATES.IN_QUEUE, label: 'In Queue' },
    { key: MEDIA_STATES.ORBITING, label: 'Orbiting' },
    { key: MEDIA_STATES.CONSUMED, label: 'Consumed' }
  ]

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Loading {title}...</p>
      </div>
    )
  }

  return (
    <div className={styles.kanbanContainer}>
      <h1 className={styles.pageTitle}>{title}</h1>
      {usingSampleData && (
        <div className={styles.sampleDataNotice}>
          Using sample data - Connect Supabase to use your own media items
        </div>
      )}

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Genre:</label>
          <select
            className={styles.filterSelect}
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genreOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={stayedWithMeOnly}
              onChange={(e) => setStayedWithMeOnly(e.target.checked)}
              className={styles.filterCheckbox}
            />
            Stayed With Me Only
          </label>
        </div>

        <div className={styles.filterGroup}>
          <button
            className={styles.clearFilters}
            onClick={() => {
              setSelectedGenre('all')
              setStayedWithMeOnly(false)
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className={styles.kanbanBoard}>
        {columns.map(column => (
          <div
            key={column.key}
            className={styles.column}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.key)}
          >
            <h2 className={styles.columnTitle}>{column.label}</h2>
            <div className={styles.columnContent}>
              {getItemsByState(column.key).map(item => (
                <div
                  key={item.id}
                  className={`${styles.card} ${item.stayed_with_me ? styles.stayedWithMe : ''}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item)}
                >
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <button
                      className={`${styles.stayedButton} ${item.stayed_with_me ? styles.active : ''}`}
                      onClick={() => toggleStayedWithMe(item)}
                      aria-label={item.stayed_with_me ? 'Remove from Stayed With Me' : 'Mark as Stayed With Me'}
                    >
                      ♥
                    </button>
                  </div>
                  {item.author && (
                    <p className={styles.cardAuthor}>by {item.author}</p>
                  )}
                  {item.notes && (
                    <p className={styles.cardNotes}>{item.notes}</p>
                  )}
                  <div className={styles.cardBadges}>
                    {item.stayed_with_me && (
                      <div className={styles.stayedBadge}>Stayed With Me</div>
                    )}
                    {item.multimedia && (
                      <div className={styles.multimediaBadge}>Multimedia</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MediaKanban

