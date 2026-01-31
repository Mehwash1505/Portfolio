// app/blog/page.tsx
import { getAllPosts } from "../../lib/blog" 
import Container from "../../components/ui/Container"
import BlogList from "./BlogList"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <Container>
      <h1 className="text-3xl font-semibold">Blog</h1>
      <BlogList posts={posts} />
    </Container>
  )
}
