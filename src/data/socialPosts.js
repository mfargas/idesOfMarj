/**
 * Social & video post data for MARJIELA
 *
 * type: 'video' — links out to TikTok or IG, never to an internal page
 *
 * coverImage   — path relative to /public (e.g. '/images/posts/tk-001.jpg')
 *                or a full external URL; null shows the amber gradient placeholder
 * previewVideo — optional short mp4 for hover-play (relative to /public)
 *                e.g. '/videos/previews/tk-001.mp4'
 *                When null the card just shows the cover image
 * externalUrl  — full URL to the actual TikTok / IG post
 */

const socialPosts = [
  {
    id: 'tk-004',
    type: 'video',
    platform: 'tiktok',
    title: 'Live action vs animation — same story, different truth',
    category: 'Animation',
    date: '2025-02-05',
    coverImage: null,
    previewVideo: null,
    externalUrl: 'https://www.tiktok.com/@marjiela_',
    published: true,
  },
  {
    id: 'ig-004',
    type: 'video',
    platform: 'instagram',
    title: 'The medium IS the message — here is what that actually means',
    category: 'Media Studies',
    date: '2025-01-28',
    coverImage: null,
    previewVideo: null,
    externalUrl: 'https://www.instagram.com/marjiela_',
    published: true,
  },
]

export default socialPosts
