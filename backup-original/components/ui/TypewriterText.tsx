'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  cursorClassName?: string
}

export function TypewriterText({ 
  text, 
  className = "", 
  delay = 80,
  cursorClassName = "bg-blue-400"
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [currentIndex, text, delay])

  return (
    <span className={`relative inline-block ${className}`}>
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isTypingComplete ? [0, 1] : 1 }}
        transition={{
          duration: 0.6,
          repeat: isTypingComplete ? Infinity : 0,
          repeatType: "reverse"
        }}
        className={`absolute -right-[4px] inline-block h-[1em] w-[3px] rounded-full ${cursorClassName}`}
        style={{ top: '0.1em' }}
      />
    </span>
  )
}
