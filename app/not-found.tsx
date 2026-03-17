import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-csb-bg">
      <div className="container-custom text-center max-w-lg">
        <div className="text-8xl font-bold font-display text-teal-500 mb-4">404</div>
        <h1 className="text-2xl font-bold font-display text-navy-700 mb-3">
          Page not found
        </h1>
        <p className="text-csb-gray leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to a place that does.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link href="/get-involved" className="btn-secondary">
            Get Involved <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
