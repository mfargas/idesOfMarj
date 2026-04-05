/**
 * GET /api/letterboxd
 *
 * Fetches marjiela's Letterboxd diary RSS feed, parses each entry,
 * and enriches it with TMDB poster art.
 *
 * Env vars required:
 *   TMDB_API_KEY  — v3 API key from developers.themoviedb.org
 *
 * Results are cached in-process for 1 hour to avoid hammering either API.
 */

const LB_RSS = 'https://letterboxd.com/marjiela/rss/'

let _cache = null
let _cacheAt = 0
const CACHE_TTL = 60 * 60 * 1000 // 1 hour

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (_cache && Date.now() - _cacheAt < CACHE_TTL) {
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json(_cache)
  }

  try {
    const rssRes = await fetch(LB_RSS, {
      headers: { 'User-Agent': 'MARJIELA/1.0 (personal site; marjoreefargas@github)' },
    })
    if (!rssRes.ok) throw new Error(`RSS ${rssRes.status}`)

    const xml = await rssRes.text()
    const entries = parseRSS(xml)
    const films = await Promise.all(entries.map(enrichWithTMDB))

    _cache = films
    _cacheAt = Date.now()

    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).json(films)
  } catch (err) {
    console.error('[/api/letterboxd]', err.message)
    if (_cache) return res.status(200).json(_cache) // serve stale rather than fail
    return res.status(500).json({ error: 'Failed to fetch diary' })
  }
}

// ─── RSS parser ────────────────────────────────────────────────────────────

function parseRSS(xml) {
  const entries = []
  const itemRx = /<item>([\s\S]*?)<\/item>/g
  let m

  while ((m = itemRx.exec(xml)) !== null) {
    const block = m[1]
    const filmTitle = getTag(block, 'letterboxd:filmTitle')
    if (!filmTitle) continue

    entries.push({
      filmTitle,
      filmYear: parseInt(getTag(block, 'letterboxd:filmYear'), 10) || null,
      memberRating: parseFloat(getTag(block, 'letterboxd:memberRating')) || null,
      watchedDate: getTag(block, 'letterboxd:watchedDate'),
      rewatch: getTag(block, 'letterboxd:rewatch') === 'Yes',
      link: (block.match(/<link>([^<]+)<\/link>/) || [])[1]?.trim() ?? '',
      review: stripHtml(getCdata(block, 'description')),
    })
  }
  return entries
}

/** Extract text content from a tag — handles both CDATA and plain text */
function getTag(xml, name) {
  const esc = name.replace(':', String.raw`\:`)
  const cd = xml.match(new RegExp(`<${esc}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${esc}>`, 'i'))
  if (cd) return cd[1].trim()
  const plain = xml.match(new RegExp(`<${esc}[^>]*>([^<]*)<\\/${esc}>`, 'i'))
  return plain ? plain[1].trim() : ''
}

/** Extract CDATA content from a tag */
function getCdata(xml, name) {
  const m = xml.match(new RegExp(`<${name}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${name}>`, 'i'))
  return m ? m[1].trim() : ''
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s{2,}/g, ' ')
    .trim()
}

// ─── TMDB enrichment ───────────────────────────────────────────────────────

async function enrichWithTMDB(entry) {
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) return { ...entry, poster: null }

  try {
    const q = encodeURIComponent(entry.filmTitle)
    const year = entry.filmYear ? `&year=${entry.filmYear}` : ''
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${q}${year}&language=en-US&page=1&include_adult=false`
    const res = await fetch(url)
    const json = await res.json()
    const film = json.results?.[0]
    if (!film) return { ...entry, poster: null }

    return {
      ...entry,
      poster: film.poster_path
        ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
        : null,
      tmdbId: film.id,
    }
  } catch {
    return { ...entry, poster: null }
  }
}
