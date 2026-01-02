import * as React from 'react'
import * as styles from '../styles/mediaCatalog.module.css'
import { supabase, MEDIA_STATES, MEDIA_TYPES, isSupabaseConfigured } from '../lib/supabase'
import { getGenreOptions } from '../lib/genres'

// Sample data for all media types
const getAllSampleData = () => {
  return [
    // Books
    { id: 'b1', title: 'The Medium is the Message', media_type: 'book', state: 'consumed', author: 'Marshall McLuhan', notes: 'Foundational text on media theory', genre: 'non-fiction', stayed_with_me: true, multimedia: false },
    { id: 'b2', title: 'Understanding Media', media_type: 'book', state: 'consumed', author: 'Marshall McLuhan', notes: 'Extensions of ourselves', genre: 'non-fiction', stayed_with_me: false, multimedia: false },
    { id: 'b3', title: 'The Shallows', media_type: 'book', state: 'orbiting', author: 'Nicholas Carr', notes: 'How the internet is changing our brains', genre: 'non-fiction', stayed_with_me: false, multimedia: false },
    { id: 'b4', title: 'Amusing Ourselves to Death', media_type: 'book', state: 'in_queue', author: 'Neil Postman', notes: null, genre: 'non-fiction', stayed_with_me: false, multimedia: false },
    { id: 'b5', title: 'The Attention Merchants', media_type: 'book', state: 'suggested', author: 'Tim Wu', notes: null, genre: 'non-fiction', stayed_with_me: false, multimedia: false },
    { id: 'b6', title: 'The Hunger Games', media_type: 'book', state: 'consumed', author: 'Suzanne Collins', notes: null, genre: 'sci-fi', stayed_with_me: false, multimedia: true },
    // TV Shows
    { id: 't1', title: 'Severance', media_type: 'tv_show', state: 'consumed', author: null, notes: 'Brilliant exploration of work-life boundaries', genre: 'drama', stayed_with_me: true, multimedia: false },
    { id: 't2', title: 'The Bear', media_type: 'tv_show', state: 'consumed', author: null, notes: 'Kitchen chaos and human connection', genre: 'comedy', stayed_with_me: true, multimedia: false },
    { id: 't3', title: 'Station Eleven', media_type: 'tv_show', state: 'orbiting', author: null, notes: 'Post-apocalyptic storytelling', genre: 'drama', stayed_with_me: false, multimedia: false },
    { id: 't4', title: 'Reservation Dogs', media_type: 'tv_show', state: 'in_queue', author: null, notes: null, genre: 'comedy', stayed_with_me: false, multimedia: false },
    { id: 't5', title: 'Andor', media_type: 'tv_show', state: 'suggested', author: null, notes: 'Star Wars for adults', genre: 'sci-fi', stayed_with_me: false, multimedia: false },
    // Games
    { id: 'g1', title: 'Stray', media_type: 'game', state: 'consumed', author: null, notes: 'Cat game with beautiful atmosphere', genre: 'adventure', stayed_with_me: true, multimedia: false },
    { id: 'g2', title: 'Journey', media_type: 'game', state: 'consumed', author: null, notes: 'Meditative multiplayer experience', genre: 'adventure', stayed_with_me: true, multimedia: false },
    { id: 'g3', title: 'Disco Elysium', media_type: 'game', state: 'orbiting', author: null, notes: 'Detective RPG with incredible writing', genre: 'mystery', stayed_with_me: false, multimedia: false },
    { id: 'g4', title: 'Cocoon', media_type: 'game', state: 'in_queue', author: null, notes: null, genre: 'puzzle', stayed_with_me: false, multimedia: false },
    { id: 'g5', title: 'Viewfinder', media_type: 'game', state: 'suggested', author: null, notes: 'Photography puzzle game', genre: 'puzzle', stayed_with_me: false, multimedia: false },
    // Movies
    { id: 'm1', title: 'Everything Everywhere All At Once', media_type: 'movie', state: 'consumed', author: 'Daniels', notes: 'Multiverse done right', genre: 'sci-fi', stayed_with_me: true, multimedia: false },
    { id: 'm2', title: 'Parasite', media_type: 'movie', state: 'consumed', author: 'Bong Joon-ho', notes: 'Class commentary through genre', genre: 'thriller', stayed_with_me: true, multimedia: false },
    { id: 'm3', title: 'The Fabelmans', media_type: 'movie', state: 'orbiting', author: 'Steven Spielberg', notes: 'Personal storytelling', genre: 'drama', stayed_with_me: false, multimedia: false },
    { id: 'm4', title: 'Aftersun', media_type: 'movie', state: 'in_queue', author: null, notes: null, genre: 'drama', stayed_with_me: false, multimedia: false },
    { id: 'm5', title: 'Tár', media_type: 'movie', state: 'suggested', author: null, notes: 'Conducting and power dynamics', genre: 'drama', stayed_with_me: false, multimedia: false },
    { id: 'm6', title: 'The Hunger Games', media_type: 'movie', state: 'consumed', author: 'Gary Ross', notes: null, genre: 'sci-fi', stayed_with_me: false, multimedia: true },
  ]
}

const MediaCatalog = () => {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [draggedItem, setDraggedItem] = React.useState(null)
  const [usingSampleData, setUsingSampleData] = React.useState(false)
  
  // Filter states
  const [selectedMediaType, setSelectedMediaType] = React.useState('all')
  const [selectedState, setSelectedState] = React.useState('all')
  const [selectedGenre, setSelectedGenre] = React.useState('all')
  const [stayedWithMeOnly, setStayedWithMeOnly] = React.useState(false)

  // Fetch all media items
  React.useEffect(() => {
    fetchAllMediaItems()
  }, [])

  const fetchAllMediaItems = async () => {
    if (!isSupabaseConfigured()) {
      setLoading(true)
      setTimeout(() => {
        setItems(getAllSampleData())
        setUsingSampleData(true)
        setLoading(false)
      }, 500)
      return
    }

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('media_items')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setItems(data || [])
      setUsingSampleData(false)
    } catch (error) {
      console.error('Error fetching media items:', error)
      setItems(getAllSampleData())
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
        setItems(items)
      }
    }

    setDraggedItem(null)
  }

  const toggleStayedWithMe = async (item) => {
    setItems(items.map(i =>
      i.id === item.id ? { ...i, stayed_with_me: !i.stayed_with_me } : i
    ))

    if (isSupabaseConfigured() && supabase) {
      try {
        const { error } = await supabase
          .from('media_items')
          .update({ stayed_with_me: !item.stayed_with_me })
          .eq('id', item.id)

        if (error) throw error
      } catch (error) {
        console.error('Error toggling stayed with me:', error)
        setItems(items)
      }
    }
  }

  // Apply filters
  const getFilteredItems = () => {
    let filtered = [...items]

    if (selectedMediaType !== 'all') {
      filtered = filtered.filter(item => item.media_type === selectedMediaType)
    }

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

  const allColumns = [
    { key: MEDIA_STATES.SUGGESTED, label: 'Suggested' },
    { key: MEDIA_STATES.IN_QUEUE, label: 'In Queue' },
    { key: MEDIA_STATES.ORBITING, label: 'Orbiting' },
    { key: MEDIA_STATES.CONSUMED, label: 'Consumed' }
  ]

  // Filter columns to only show those with items
  const visibleColumns = allColumns.filter(column => {
    const items = getItemsByState(column.key)
    return items.length > 0
  })

  const mediaTypeOptions = [
    { value: 'all', label: 'All Types' },
    { value: MEDIA_TYPES.BOOK, label: 'Books' },
    { value: MEDIA_TYPES.TV_SHOW, label: 'TV Shows' },
    { value: MEDIA_TYPES.GAME, label: 'Games' },
    { value: MEDIA_TYPES.MOVIE, label: 'Movies' }
  ]

  const genreOptions = getGenreOptions()

  const getMediaTypeLabel = (type) => {
    const option = mediaTypeOptions.find(opt => opt.value === type)
    return option ? option.label : type
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Loading catalog...</p>
      </div>
    )
  }

  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.pageTitle}>Media Catalog</h1>
      
      {usingSampleData && (
        <div className={styles.sampleDataNotice}>
          Using sample data - Connect Supabase to use your own media items
        </div>
      )}

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Media Type:</label>
          <select
            className={styles.filterSelect}
            value={selectedMediaType}
            onChange={(e) => setSelectedMediaType(e.target.value)}
          >
            {mediaTypeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

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
              setSelectedMediaType('all')
              setSelectedGenre('all')
              setStayedWithMeOnly(false)
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      {visibleColumns.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No items match your current filters.</p>
          <button
            className={styles.clearFilters}
            onClick={() => {
              setSelectedMediaType('all')
              setSelectedGenre('all')
              setStayedWithMeOnly(false)
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div 
          className={styles.kanbanBoard}
          style={{ gridTemplateColumns: `repeat(${visibleColumns.length}, 1fr)` }}
        >
          {visibleColumns.map(column => (
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
                    <div className={styles.cardTitleRow}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <span className={styles.mediaTypeBadge}>
                        {getMediaTypeLabel(item.media_type)}
                      </span>
                    </div>
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
      )}
    </div>
  )
}

export default MediaCatalog

