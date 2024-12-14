'use client'

import { motion } from "framer-motion"
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

export function Hero({ name, title, description, socialLinks }: HeroSectionProps) {
  // Calculate delays based on typing time
  const typingDuration = name.length * 0.15 // 150ms per character
  const contentDelay = typingDuration + 0.5 // Start content animations after typing + 0.5s

  return (
    <section className="w-full max-w-5xl mx-auto text-center py-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-6xl font-bold mb-6">
          <TypewriterText
            text={name}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            delay={150}
            cursorClassName="bg-purple-400"
          />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: contentDelay }}
          className="text-2xl mb-8 text-gray-200"
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: contentDelay + 0.2 }}
          className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: contentDelay + 0.4 }}
          className="flex justify-center space-x-4"
        >
          {SOCIAL_LINKS.map((link: { platform: string; icon: string; url: string }, index: number) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={link.platform}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: contentDelay + 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className={`text-white border-2 transition-all duration-300 ${
                      socialColors[link.platform as keyof typeof socialColors]
                    }`}
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    <Icon className="mr-2 h-5 w-5" />
                    {link.platform}
                  </Button>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: contentDelay + 1 }}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full p-1"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}
