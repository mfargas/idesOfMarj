import { getAllPosts } from '../../lib/blog'

export default function handler(req, res) {
  const posts = getAllPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0] ?? null

  if (!featured) {
    return res.status(200).json(null)
  }

  // Return only what the menu needs
  res.status(200).json({
    slug:     featured.slug,
    title:    featured.title,
    excerpt:  featured.excerpt ?? null,
    category: featured.category ?? null,
    coverImage: featured.coverImage ?? null,
  })
}
