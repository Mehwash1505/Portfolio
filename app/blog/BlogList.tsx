"use client"

import FadeIn from "../../components/motion/FadeIn"
import Link from "next/link"

type Post = {
  slug: string
  title: string
  date: string
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="mt-10 space-y-6">
      {posts.map(post => (
        <FadeIn key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl">{post.title}</h2>
            <p className="text-neutral-400">{post.date}</p>
          </Link>
        </FadeIn>
      ))}
    </div>
  )
}
