'use client'

import { useEffect } from 'react'
import { initMouseFollow } from '../../lib/utils'

export function BackgroundShapes() {
  useEffect(() => {
    const cleanup = initMouseFollow()
    return cleanup
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-subtle from-background/95 to-background/80"
        style={{ 
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      >
        <div className="absolute inset-0">
          {/* Top left purple shape */}
          <div className="floating-shape absolute top-1/4 left-1/4 w-32 h-32 rounded-2xl animate-float">
            <div className="absolute inset-0 bg-gradient-subtle from-purple-500/50 to-pink-500/50 rounded-2xl" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-2xl animate-glow" />
          </div>

          {/* Top right blue shape */}
          <div className="floating-shape absolute top-1/3 right-1/4 w-40 h-40 rounded-full animate-float-delayed">
            <div className="absolute inset-0 bg-gradient-subtle from-blue-500/50 to-cyan-500/50 rounded-full" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-full animate-glow" />
          </div>

          {/* Bottom left indigo shape */}
          <div className="floating-shape absolute bottom-1/4 left-1/3 w-36 h-36 transform rotate-45 animate-float-reverse">
            <div className="absolute inset-0 bg-gradient-subtle from-indigo-500/50 to-violet-500/50" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm animate-glow" />
          </div>

          {/* Bottom right teal shape */}
          <div className="floating-shape absolute top-2/3 right-1/3 w-28 h-28 rounded-lg transform -rotate-12 animate-float-slow">
            <div className="absolute inset-0 bg-gradient-subtle from-teal-500/50 to-emerald-500/50 rounded-lg" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-lg animate-glow" />
          </div>

          {/* Center accent shape */}
          <div 
            className="floating-shape absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-[2rem] animate-float" 
            style={{ animationDelay: '1.5s' }}
          >
            <div className="absolute inset-0 bg-gradient-subtle from-fuchsia-500/40 to-rose-500/40 rounded-[2rem]" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-[2rem] animate-glow" />
          </div>
        </div>
      </div>
    </div>
  )
}
