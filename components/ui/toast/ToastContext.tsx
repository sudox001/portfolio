import React, { createContext, useContext, useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Toast } from '@/types'
import { X } from 'lucide-react'

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])

    // Auto remove toast after duration
    setTimeout(() => {
      removeToast(id)
    }, toast.duration || 3000)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className={`
                min-w-[300px] rounded-lg p-4 shadow-lg
                ${
                  toast.type === 'error'
                    ? 'bg-red-600 text-white'
                    : toast.type === 'success'
                    ? 'bg-green-600 text-white'
                    : toast.type === 'warning'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-800 text-white'
                }
              `}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-medium">{toast.title}</h4>
                  {toast.description && (
                    <p className="mt-1 text-sm opacity-90">{toast.description}</p>
                  )}
                </div>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
