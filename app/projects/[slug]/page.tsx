import Container from "../../../components/ui/Container"
import { getProjectBySlug } from "../../../lib/mdx" 
import type { ReactNode } from "react"

type ProjectFrontmatter = {
  title: string
}

export default async function ProjectCaseStudy({
  params
}: {
  params: { slug: string }
}) {
  const { content, frontmatter } = await getProjectBySlug(params.slug)

  const fm = frontmatter as ProjectFrontmatter

  return (
    <Container>
      <article className="prose prose-invert max-w-none">
        <h1>{fm.title}</h1>
        {content as ReactNode}
      </article>
    </Container>
  )
}