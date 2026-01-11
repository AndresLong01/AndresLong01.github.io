export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'external'
  | 'menu'
  | 'close'
  | 'sun'
  | 'moon'

export type SocialLink = { label: string; href: string; icon: IconName }

export type SkillGroup = { title: string; items: string[] }

export type Project = {
  name: string
  description: string
  stack: string[]
  highlights?: string[]
  links?: { demo?: string; repo?: string }
  media: {
    image: string
    video?: string
    avgColor?: string
  }
}

export type Experience = {
  company: string
  role: string
  start: string
  end: string
  location?: string
  bullets: string[]
}
