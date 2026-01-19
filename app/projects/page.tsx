import Container from "../../components/ui/Container"
import FadeIn from "../../components/motion/FadeIn"
import Link from "next/link"
import { projects } from "../../lib/projects"

export default function ProjectsPage() {
  return (
    <Container>
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-semibold">
          Selected Projects
        </h1>
        <p className="mt-4 max-w-xl text-neutral-400">
          Case studies focused on architecture, trade-offs, and real-world constraints.
        </p>
      </FadeIn>

      <div className="mt-12 space-y-8">
        {projects.map(project => (
          <FadeIn key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="block rounded-xl border border-neutral-800 p-6 hover:border-neutral-600 transition"
            >
              <h2 className="text-xl font-medium">{project.title}</h2>
              <p className="mt-2 text-neutral-400">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-neutral-700 px-3 py-1 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}
