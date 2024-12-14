'use client'

import { ReactNode } from 'react'
import { MotionProvider } from './motion-provider'
import { ToastProvider } from '@/components/ui/toast/toast-context'

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </MotionProvider>
  )
}
