'use client'

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "../ui/button"
import { TypewriterText } from "../ui/TypewriterText"
import { HeroSectionProps } from "../../types"
import { SOCIAL_LINKS } from "../../constants/data"
import { Github, Gitlab, Linkedin } from "lucide-react"

const iconMap = {
  Github,
  Gitlab,
  Linkedin,
}

const socialColors = {
  GitHub: "hover:bg-[#333]/90 hover:border-[#333]",
  GitLab: "hover:bg-[#FC6D26]/90 hover:border-[#FC6D26]",
  LinkedIn: "hover:bg-[#0A66C2]/90 hover:border-[#0A66C2]",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export function Hero({ name, title, description, socialLinks }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  const typingDuration = name.length * 0.15

  return (
    <section className="@container relative min-h-[90vh] flex items-center">
      <div className="w-full max-w-5xl mx-auto text-center py-12 sm:py-16 md:py-24 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <div 
            className="absolute inset-0 -z-10 bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-2xl"
            style={{ transform: 'translate3d(0,0,0)' }}
            aria-hidden="true"
          />
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <TypewriterText
              text={name}
              className="bg-clip-text text-transparent bg-gradient-conic from-blue-400 via-purple-500 to-blue-400"
              delay={shouldReduceMotion ? 0 : 150}
              cursorClassName="bg-purple-400"
            />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 font-medium"
          >
            {title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 text-gray-300 max-w-2xl mx-auto px-4 sm:px-6"
          >
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 px-4"
          >
            {SOCIAL_LINKS.map((link: { platform: string; icon: string; url: string }, index: number) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={link.platform}
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                  whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                  className="relative group w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className={`
                      w-full sm:w-auto
                      text-white border-2 
                      transition-all duration-300 
                      focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2
                      text-sm sm:text-base
                      py-2 sm:py-3
                      ${socialColors[link.platform as keyof typeof socialColors]}
                    `}
                    onClick={() => window.open(link.url, "_blank")}
                    aria-label={`Visit ${link.platform} profile`}
                  >
                    <Icon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    <span>{link.platform}</span>
                    
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity rounded-md" />
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
        
        {!shouldReduceMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: typingDuration + 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-10 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
              aria-hidden="true"
            >
              <div className="w-1 h-2 bg-gray-400 rounded-full mx-auto" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
