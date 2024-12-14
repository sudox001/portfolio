import { Suspense } from 'react'
import { SectionLoading } from './loading'

// Components
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

// Data
import { SITE_CONFIG, SKILLS, PROJECTS, CONTACT_CONFIG, SOCIAL_LINKS } from '@/constants/data'

export default function Home() {
  return (
    <>
      <Suspense fallback={<SectionLoading />}>
        <Hero
          name={SITE_CONFIG.name}
          title={SITE_CONFIG.title}
          description={SITE_CONFIG.description}
          socialLinks={SOCIAL_LINKS}
        />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <About
          content={`I'm a passionate full-stack developer with a love for creating elegant, efficient solutions to complex problems. With expertise in modern web technologies and a keen eye for detail, I bring ideas to life through clean, maintainable code.

My journey in software development has equipped me with a diverse skill set, from front-end development using React and Next.js to back-end systems with Node.js and Python. I believe in writing code that not only works but is also a joy to maintain.

When I'm not coding, I'm constantly learning new technologies and best practices to stay at the forefront of web development. I'm particularly interested in performance optimization, accessibility, and creating delightful user experiences.`}
        />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <Skills skills={SKILLS} />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <Projects projects={PROJECTS} />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <Contact
          email={CONTACT_CONFIG.email}
          phone={CONTACT_CONFIG.phone}
        />
      </Suspense>
    </>
  )
}
