import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"

const ROOT = process.cwd() 

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(ROOT, "content/projects", `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf-8")

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: false
            }
          ]
        ]
      }
    }
  })

  return { content, frontmatter }
}
