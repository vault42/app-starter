import { RocketLaunchIcon } from '@phosphor-icons/react/dist/ssr'
import { Greet } from '@/components/greet'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8 flex flex-col items-center justify-center space-y-12">
      <div className="fixed top-8 right-8">
        <ModeToggle />
      </div>

      {/* Header Section */}
      <section className="text-center space-y-4 max-w-2xl">
        <div className="inline-flex items-center justify-center p-3 bg-zinc-900 dark:bg-zinc-100 rounded-2xl shadow-xl mb-4">
          <RocketLaunchIcon size={32} className="text-white dark:text-black" weight="duotone" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Next.js 16 + Tauri 2.0
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          A high-performance desktop app starter template with seamless frontend-backend communication.
        </p>
      </section>

      {/* Greet Section */}
      <Greet />
    </main>
  )
}
