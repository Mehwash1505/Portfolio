// // components/motion/Stagger.tsx
"use client"
import { motion } from "framer-motion"

/*
  Used for lists: projects, blog posts
  Creates a professional cascading effect
*/
export function Stagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } }
      }}
    >
      {children}
    </motion.div>
  )
}
