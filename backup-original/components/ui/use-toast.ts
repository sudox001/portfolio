import { useState, useEffect } from 'react'

export interface ToastProps {
  title: string
  description?: string
  duration?: number
}

export function useToast() {
  const [toast, setToast] = useState<ToastProps | null>(null)

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, toast.duration || 3000)

      return () => clearTimeout(timer)
    }
  }, [toast])

  return {
    toast: (props: ToastProps) => setToast(props),
    Toast: () => toast && (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-md shadow-lg">
        <h3 className="font-semibold">{toast.title}</h3>
        {toast.description && <p className="text-sm mt-1">{toast.description}</p>}
      </div>
    ),
  }
}

