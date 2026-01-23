import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_PATH = path.join(process.cwd(), "src/content/blog")

export function getAllPosts() { 
  const files = fs.readdirSync(BLOG_PATH)

  return files.map(file => {
    const slug = file.replace(".mdx", "")
    const fileContent = fs.readFileSync(
      path.join(BLOG_PATH, file),
      "utf-8"
    )

    const { data } = matter(fileContent)

    return {
      slug,
      title: data.title,
      date: data.date
    }
  })
}
