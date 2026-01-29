// // components/ui/Container.tsx
export default function Container({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {children}
    </div>
  )
}  
