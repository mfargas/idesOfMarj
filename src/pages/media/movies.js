import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import FilmCard from '../../components/filmCard'
import * as styles from '../../styles/movieDiary.module.css'
import * as cardStyles from '../../styles/postCard.module.css'

const MovieDiary = () => {
  const [films, setFilms] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch('/api/letterboxd')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then((data) => {
        setFilms(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <Seo
        title="Film Diary"
        description="Films watched and logged on Letterboxd."
      />

      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>FILM DIARY</h1>
          <div className={styles.headerMeta}>
            <span className={styles.pageDesc}>Logged on Letterboxd</span>
            <a
              href="https://letterboxd.com/marjiela"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lbLink}
            >
              @marjiela ↗
            </a>
          </div>
        </header>

        {loading && (
          <div className={styles.state}>
            <span className={styles.stateText}>Loading diary…</span>
          </div>
        )}

        {!loading && error && (
          <div className={styles.state}>
            <span className={styles.stateText}>
              Couldn't load the diary right now — try refreshing.
            </span>
          </div>
        )}

        {!loading && !error && films.length === 0 && (
          <div className={styles.state}>
            <span className={styles.stateText}>
              No films logged yet — check back soon.
            </span>
          </div>
        )}

        {!loading && !error && films.length > 0 && (
          <div className={cardStyles.grid}>
            {films.map((film, i) => (
              <FilmCard key={film.link || film.filmTitle + i} film={film} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default MovieDiary
