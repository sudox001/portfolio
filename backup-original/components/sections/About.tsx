'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { AboutSectionProps } from "@/types"

export function About({ content, image }: AboutSectionProps) {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-white mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          {content.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-300 leading-relaxed mb-6 text-lg"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/20"
          >
            <Image
              src={image}
              alt="Profile"
              fill
              className="object-cover"
              sizes="256px"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
