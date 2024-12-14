'use client'

import { ReactNode, Suspense } from 'react'
import { MotionProvider } from './motion-provider'
import { ToastProvider } from '../ui/toast/toast-context'

// Loading fallbacks for better UX
const MotionFallback = () => <div className="animate-pulse bg-muted/50 rounded-lg h-full" />
const ToastFallback = () => null

interface ClientProvidersProps {
  children: ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    // Use React 18's Suspense for better loading states
    <Suspense fallback={<MotionFallback />}>
      <MotionProvider>
        <Suspense fallback={<ToastFallback />}>
          <ToastProvider>
            {children}
          </ToastProvider>
        </Suspense>
      </MotionProvider>
    </Suspense>
  )
}

// Add error boundary for better error handling
ClientProviders.displayName = 'ClientProviders'
