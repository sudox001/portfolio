'use client'

import { motion } from "framer-motion"
import { SkillsSectionProps } from "../../types"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

const categoryColors = {
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-green-500 to-emerald-500",
  devops: "from-orange-500 to-red-500",
  other: "from-purple-500 to-pink-500"
}

const getProgressWidth = (level: string) => {
  switch (level) {
    case 'beginner':
      return '33%'
    case 'intermediate':
      return '66%'
    case 'advanced':
      return '100%'
    default:
      return '0%'
  }
}

export function Skills({ skills }: SkillsSectionProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-8 sm:space-y-12"
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delayChildren: categoryIndex * 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <motion.h3 
                variants={item}
                className="text-lg sm:text-xl font-semibold text-white capitalize mb-3 sm:mb-4"
              >
                {category}
              </motion.h3>
              <div className="space-y-3 sm:space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    custom={index}
                    className={`
                      skill-card bg-gray-800/50 rounded-lg p-3 sm:p-4 backdrop-blur-sm 
                      hover:bg-gray-800/70 transition-all duration-300
                      border border-gray-700/30 hover:border-gray-600/50
                      ${skill.category === 'frontend' 
                        ? 'hover:shadow-blue' 
                        : skill.category === 'backend'
                        ? 'hover:shadow-green'
                        : 'hover:shadow-orange'}
                    `}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-gray-400 capitalize">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: getProgressWidth(skill.level) }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.8,
                          delay: 0.2 + (index * 0.1),
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className={`h-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
