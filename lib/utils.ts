import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mouse follow effect for glassmorphism shapes
export function initMouseFollow() {
  if (typeof window === 'undefined') return

  const shapes = document.querySelectorAll('.floating-shape')
  
  const handleMouseMove = (event: MouseEvent) => {
    shapes.forEach((shape) => {
      const rect = shape.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      
      ;(shape as HTMLElement).style.setProperty('--mouse-x', `${x}%`)
      ;(shape as HTMLElement).style.setProperty('--mouse-y', `${y}%`)
    })
  }

  // Throttle the mousemove event for better performance
  let frameId: number
  const throttledMouseMove = (event: MouseEvent) => {
    if (frameId) return
    
    frameId = requestAnimationFrame(() => {
      handleMouseMove(event)
      frameId = 0
    })
  }

  window.addEventListener('mousemove', throttledMouseMove)

  // Cleanup function
  return () => {
    window.removeEventListener('mousemove', throttledMouseMove)
    if (frameId) {
      cancelAnimationFrame(frameId)
    }
  }
}
