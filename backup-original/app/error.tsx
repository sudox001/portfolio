'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="max-w-md p-8 bg-gray-800/50 rounded-lg backdrop-blur-sm space-y-6 text-center">
        <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>
        <p className="text-gray-300">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <div className="flex justify-center gap-4">
          <Button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="text-white hover:bg-white/10"
          >
            Refresh page
          </Button>
        </div>
      </div>
    </div>
  )
}
