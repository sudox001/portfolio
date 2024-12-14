export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced'
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface Toast {
  id: string
  title: string
  description?: string
  type?: 'default' | 'success' | 'error' | 'warning'
  duration?: number
}

export interface NavItem {
  title: string
  href: string
}

// Component specific types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

// Section specific types
export interface HeroSectionProps {
  name: string
  title: string
  description: string
  socialLinks: SocialLink[]
}

export interface AboutSectionProps {
  content: string
  image?: string
}

export interface SkillsSectionProps {
  skills: Skill[]
}

export interface ProjectsSectionProps {
  projects: Project[]
}

export interface ContactSectionProps {
  email: string
  phone?: string
}
