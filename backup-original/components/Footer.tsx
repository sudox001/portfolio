'use client'

import { motion } from "framer-motion"
import { Github, Gitlab, Linkedin, Mail, Phone } from "lucide-react"
import { SITE_CONFIG, SOCIAL_LINKS, CONTACT_CONFIG } from "@/constants/data"

const iconMap = {
  Github,
  Gitlab,
  Linkedin,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-900/50 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <a 
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                {CONTACT_CONFIG.email}
              </a>
              {CONTACT_CONFIG.phone && (
                <p className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2" />
                  {CONTACT_CONFIG.phone}
                </p>
              )}
            </div>
            <div className="flex space-x-4 mt-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
