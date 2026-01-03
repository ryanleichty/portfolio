import { promises as fs } from 'fs'
import path from 'path'

const SITE_URL = 'https://ryanleichty.com'

async function getPostSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  })
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(dir, path.join(entry.parentPath, entry.name))
      return path.dirname(relativePath)
    })
    .map((slug) => slug.replace(/\\/g, '/'))
}

export default async function sitemap() {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'writing')
  const slugs = await getPostSlugs(postsDirectory)

  const posts = slugs.map((slug) => ({
    url: `${SITE_URL}/writing/${slug}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ['', '/work'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts]
}
