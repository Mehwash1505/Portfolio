import FadeIn from "../components/motion/FadeIn"
import Container from "../components/ui/Container"

export default function HomePage() {
  return (
    <Container>
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Frontend Engineer <br/> 
            <span className="text-neutral-300">UI Systems Architect</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-xl text-neutral-400 text-base leading-relaxed">
            I design and build scalable frontend systems with strong UX foundations,
            performance discipline, and production-grade architecture.
          </p>
        </FadeIn>
      </section>
    </Container>
  )
}
