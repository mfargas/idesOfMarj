import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(includeFuture = false) {
  // Get all markdown files from the blog directory
  const fileNames = fs.readdirSync(postsDirectory)
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time to start of day
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove .md extension to get slug
      const slug = fileName.replace(/\.md$/, '')
      
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      
      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents)
      
      // Combine the data with the slug (date stays as string)
      return {
        slug,
        content,
        ...data
      }
    })
    .filter((post) => {
      // Only show posts that are explicitly published
      if (post.published !== true) {
        return false
      }
      
      // If a date is set, only show if the date is today or in the past
      if (post.date) {
        const postDate = new Date(post.date)
        postDate.setHours(0, 0, 0, 0)
        if (postDate > today) {
          return false
        }
      }
      
      return true
    })
  
  // Sort posts by date (newest first) - compare as strings
  return allPostsData.sort((a, b) => {
    const dateA = a.date || '0000-01-01'
    const dateB = b.date || '0000-01-01'
    if (dateA < dateB) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, '')
        }
      }
    })
}

