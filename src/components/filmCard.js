import * as React from 'react'
import * as styles from '../styles/filmCard.module.css'

const FULL = '★'
const HALF = '½'
const EMPTY = '☆'

function renderStars(rating) {
  if (!rating && rating !== 0) return null
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return FULL.repeat(full) + (half ? HALF : '') + EMPTY.repeat(Math.max(0, empty))
}

function formatDate(str) {
  if (!str) return ''
  const d = new Date(str + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

const FilmCard = ({ film }) => {
  const stars = renderStars(film.memberRating)
  const href = film.link || 'https://letterboxd.com/marjiela'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      aria-label={`${film.filmTitle}${film.filmYear ? ` (${film.filmYear})` : ''} — view on Letterboxd`}
    >
      <article className={styles.card}>
        {/* ── Poster ── */}
        <div className={styles.poster}>
          {film.poster ? (
            <img
              src={film.poster}
              alt={`${film.filmTitle} poster`}
              className={styles.posterImg}
              loading="lazy"
            />
          ) : (
            <div className={styles.posterPlaceholder}>
              <span className={styles.placeholderTitle}>{film.filmTitle}</span>
            </div>
          )}

          {/* rating badge */}
          {stars && (
            <span
              className={styles.ratingBadge}
              aria-label={`Rated ${film.memberRating} out of 5`}
            >
              {stars}
            </span>
          )}

          {/* rewatch indicator */}
          {film.rewatch && (
            <span className={styles.rewatchBadge} aria-label="Rewatch">↺</span>
          )}

          {/* review hover overlay */}
          {film.review && (
            <div className={styles.reviewOverlay} aria-hidden="true">
              <p className={styles.reviewText}>
                {film.review.length > 200
                  ? film.review.slice(0, 200) + '…'
                  : film.review}
              </p>
            </div>
          )}
        </div>

        {/* ── Info ── */}
        <div className={styles.info}>
          <h3 className={styles.title}>
            {film.filmTitle}
            {film.filmYear && (
              <span className={styles.year}> {film.filmYear}</span>
            )}
          </h3>
          {film.watchedDate && (
            <span className={styles.date}>{formatDate(film.watchedDate)}</span>
          )}
        </div>
      </article>
    </a>
  )
}

export default FilmCard
