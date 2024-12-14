import { Project, Skill, NavItem, SocialLink } from '@/types'
import { Github, Gitlab, Linkedin, Mail } from 'lucide-react'

export const SITE_CONFIG = {
  name: 'Sudo',
  title: 'Full-Stack Developer & Problem Solver',
  description: 'I\'m a passionate full-stack developer with a love for clean code and innovative solutions.',
  url: 'https://portfolio.dev', // Replace with your actual domain
  ogImage: 'https://portfolio.dev/og.jpg',
  links: {
    github: 'https://github.com/yourusername',
    gitlab: 'https://gitlab.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },
}

export const NAV_ITEMS: NavItem[] = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: SITE_CONFIG.links.github,
    icon: 'Github',
  },
  {
    platform: 'GitLab',
    url: SITE_CONFIG.links.gitlab,
    icon: 'Gitlab',
  },
  {
    platform: 'LinkedIn',
    url: SITE_CONFIG.links.linkedin,
    icon: 'Linkedin',
  },
]

export const SKILLS: Skill[] = [
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 'advanced',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'advanced',
  },
  {
    name: 'React',
    category: 'frontend',
    level: 'advanced',
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 'advanced',
  },
  {
    name: 'Python',
    category: 'backend',
    level: 'intermediate',
  },
  {
    name: 'Docker',
    category: 'devops',
    level: 'intermediate',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of the project and the technologies used.',
    imageUrl: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.demo',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of the project and the technologies used.',
    imageUrl: '/placeholder.svg',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.demo',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A brief description of the project and the technologies used.',
    imageUrl: '/placeholder.svg',
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.demo',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A brief description of the project and the technologies used.',
    imageUrl: '/placeholder.svg',
    technologies: ['Vue.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project4',
    liveUrl: 'https://project4.demo',
  },
]

export const CONTACT_CONFIG = {
  email: 'hello@portfolio.dev',
  phone: '+1 (555) 123-4567',
  formEndpoint: '/api/contact', // Replace with your actual form endpoint
}
