export type ProjectMeta = {
  slug: string
  title: string
  summary: string
  tech: string[]
}

export const projects: ProjectMeta[] = [ 
  {
    slug: "ai-monitoring",
    title: "AI Monitoring Dashboard",
    summary:
      "A real-time observability system for production AI models, focused on drift detection, latency, and confidence decay.",
    tech: ["Next.js", "TypeScript", "WebSockets", "D3", "Tailwind"]
  }
]
