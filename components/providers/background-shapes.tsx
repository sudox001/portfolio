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
          <div className="floating-shape absolute top-[15%] left-[20%] w-32 h-32 rounded-2xl animate-float">
            <div className="absolute inset-0 bg-gradient-subtle from-purple-500/50 to-pink-500/50 rounded-2xl" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-2xl animate-glow" />
          </div>

          {/* Top right blue shape */}
          <div className="floating-shape absolute top-[25%] right-[20%] w-40 h-40 rounded-full animate-float-delayed">
            <div className="absolute inset-0 bg-gradient-subtle from-blue-500/50 to-cyan-500/50 rounded-full" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-full animate-glow" />
          </div>

          {/* Bottom left indigo shape */}
          <div className="floating-shape absolute bottom-[20%] left-[25%] w-36 h-36 transform rotate-45 animate-float-reverse">
            <div className="absolute inset-0 bg-gradient-subtle from-indigo-500/50 to-violet-500/50" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm animate-glow" />
          </div>

          {/* Bottom right teal shape */}
          <div className="floating-shape absolute top-[60%] right-[30%] w-28 h-28 rounded-lg transform -rotate-12 animate-float-slow">
            <div className="absolute inset-0 bg-gradient-subtle from-teal-500/50 to-emerald-500/50 rounded-lg" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-lg animate-glow" />
          </div>

          {/* Center accent shape */}
          <div className="floating-shape absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-[2rem] animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="absolute inset-0 bg-gradient-subtle from-fuchsia-500/40 to-rose-500/40 rounded-[2rem]" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-[2rem] animate-glow" />
          </div>

          {/* New small orange shape */}
          <div className="floating-shape absolute top-[20%] right-[35%] w-20 h-20 rounded-lg animate-float-subtle">
            <div className="absolute inset-0 bg-gradient-subtle from-orange-500/40 to-amber-500/40 rounded-lg" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-lg animate-glow" />
          </div>

          {/* New tiny red shape */}
          <div className="floating-shape absolute bottom-[35%] right-[25%] w-16 h-16 rounded-full animate-float-micro">
            <div className="absolute inset-0 bg-gradient-subtle from-red-500/40 to-rose-500/40 rounded-full" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-full animate-glow" />
          </div>

          {/* New small lime shape */}
          <div className="floating-shape absolute top-[65%] left-[15%] w-24 h-24 rounded-[1.5rem] animate-float-subtle" style={{ animationDelay: '0.75s' }}>
            <div className="absolute inset-0 bg-gradient-subtle from-lime-500/40 to-green-500/40 rounded-[1.5rem]" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-[1.5rem] animate-glow" />
          </div>

          {/* New tiny sky shape */}
          <div className="floating-shape absolute top-[30%] left-[40%] w-12 h-12 rounded-lg animate-float-micro" style={{ animationDelay: '1.25s' }}>
            <div className="absolute inset-0 bg-gradient-subtle from-sky-500/40 to-blue-500/40 rounded-lg" />
            <div className="absolute inset-0 bg-glass-gradient backdrop-blur-sm rounded-lg animate-glow" />
          </div>
        </div>
      </div>
    </div>
  )
}
