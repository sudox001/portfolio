'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ProjectsSectionProps } from "../../types"
import { Button } from "../ui/button"
import { Github, ExternalLink } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Projects({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8 sm:space-y-12"
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of the projects I've worked on
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50 flex flex-col"
            >
              <div className="relative aspect-[16/9] sm:aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {project.githubUrl && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-2 hover:bg-[#333]/90 hover:border-[#333] transition-all duration-300 text-xs sm:text-sm h-8 sm:h-9"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Code
                      </Button>
                    </motion.div>
                  )}
                  {project.liveUrl && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-2 hover:bg-blue-600/90 hover:border-blue-600 transition-all duration-300 text-xs sm:text-sm h-8 sm:h-9"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Live Demo
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
