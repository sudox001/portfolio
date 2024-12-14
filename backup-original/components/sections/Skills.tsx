'use client'

import { motion } from "framer-motion"
import { SkillsSectionProps } from "@/types"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const categoryColors = {
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-green-500 to-emerald-500",
  devops: "from-orange-500 to-red-500",
  other: "from-purple-500 to-pink-500"
}

const levelIndicator = {
  beginner: "w-1/3",
  intermediate: "w-2/3",
  advanced: "w-full"
}

export function Skills({ skills }: SkillsSectionProps) {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white capitalize mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400 capitalize">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${
                          categoryColors[skill.category]
                        } ${levelIndicator[skill.level]}`}
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
