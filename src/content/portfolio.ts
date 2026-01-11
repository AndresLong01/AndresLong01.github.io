import type { Experience, Project, SkillGroup, SocialLink } from '../types'

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

export const site = {
  name: 'Andres Long',
  role: 'Software Engineer (Frontend Focus) | Game Developer',
  headline: 'I build performant web apps and solve problems.',
  location: 'Houston, TX. USA',
  email: 'andreslong95@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/AndresLong01', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andres-a-long/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:andreslong95@gmail.com', icon: 'mail' },
  ] satisfies SocialLink[],
}

export const about: string[] = [
  `I’m a frontend-focused software engineer and part-time game developer who enjoys solving problems and turning them into clean, shippable projects that actually hold up over time.`,
  `On the web side, I spend most of my time working with JavaScript/TypeScript and Vue, often inside large codebases where performance, correctness, and maintainability really matter. On the game side, I build gameplay, rendering, and VFX systems in Godot, with prior experience in Unreal and Unity.`,
  `I tend to gravitate toward work where I can own systems end-to-end and iterate quickly. Whether that’s modernizing old UI patterns or experimenting with shaders and effects, I like staying hands-on and close to the problem.`,
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Proficient',
    items: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'TypeScript',
      'Vue.js',
      'Node.js',
      'MongoDB',
      'React',
      'Next.js',
      'Python',
      'GDScript',
      'Git',
      'AI-assisted dev (ChatGPT, Claude, Codex, Cursor)',
    ],
  },
  {
    title: 'Exposure',
    items: ['Firebase', 'Unity', 'C#', 'AWS', 'Ruby', 'Express', 'SQL', 'Rails'],
  },
  {
    title: 'Also worked with',
    items: [
      'Legacy frontend systems',
      'Performance + maintainability',
      'UI architecture',
      'Gameplay systems',
      'Shaders',
      'VFX / particles',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Unannounced Project',
    description:
      'Currently in production. I can’t share public details yet, but I’m building core gameplay, tools, and VFX/shader tech for a new title.',
    stack: ['Godot 4.5', 'GDScript', 'Shaders', 'VFX Systems', 'Tooling'],
    highlights: [
      'Production gameplay + rendering systems',
      'Performance-focused shader/VFX pipeline',
      'Reusable tooling to speed up iteration for a small team',
    ],
    media: {
      image: '/projects/nomatter.jpg',
      avgColor: '#5c1212',
    },
  },
  {
    name: 'Craft Survival',
    description:
      '2D platformer/adventure prototype inspired by Terraria, built in Godot 4.3 with a focus on reusable item/component architecture.',
    stack: ['Godot 4.3', 'GDScript', 'Shaders', 'UI Systems'],
    highlights: [
      'World generation + mining + block placement loop',
      'Item selection UI (equipped item from a resource set)',
      'Tile shadowing via shaders',
    ],
    links: {
      repo: 'https://github.com/AndresLong01/survival-rpg',
    },
    media: {
      image: '/projects/craft.png',
      video: '/projects/craft.mp4',
      avgColor: '#043927',
    }
  },
  {
    name: 'Refulgence',
    description:
      '2D platformer/adventure prototype built in Godot 4.2 focused on state machines and expressive combat + traversal.',
    stack: ['Godot 4.2', 'GDScript', 'Shaders', 'Particles/VFX'],
    highlights: [
      'State machines for player + enemies',
      'Spring-based water simulation (shader-driven) + particle systems',
      'Combo system and multiple player skills',
    ],
    links: {
      repo: 'https://github.com/AndresLong01/refulgence',
    },
    media: {
      image: '/projects/refulgence.png',
      video: '/projects/refulgence.mp4',
      avgColor: '#d47149',
    }
  },
  {
    name: 'No Matter',
    description:
      'Unity (C#) prototype exploring class archetypes, async gameplay flow, and game state management.',
    stack: ['Unity', 'C#'],
    highlights: [
      'Multiple class archetypes',
      'Asynchronous systems using Coroutines',
      'Game state management',
    ],
    links: {
      repo: 'https://github.com/AndresLong01/No-Matter-Prototype',
    },
    media: {
      image: '/projects/nomatter.jpg',
      video: '',
      avgColor: '#7c3aed',
    }
  },
]

export const experience: Experience[] = [
  {
    company: 'SpyFu and Rivalflow',
    role: 'Software Engineer (Frontend Focus)',
    start: 'May 2023',
    end: 'Current',
    location: 'Houston, TX. USA',
    bullets: [
      'Frontend engineer supporting two production web applications with 1,000+ active users, working primarily in JavaScript, Vue 2, SCSS, and legacy frontend systems.',
      'Maintained and extended a ~20-year-old codebase, modernizing UI behavior while safely integrating with legacy technologies including CSHTML-rendered static pages and custom in-house frameworks.',
      'Joined during pre-launch crunch for RivalFlow v1.0; delivered frontend tickets ~10× faster than team average and became a top contributor within the frontend domain.',
      'Helped launch RivalFlow 1.0, an SEO intelligence platform combining competitive analysis with AI-driven (ChatGPT) content recommendations.',
      'Contributed to post-launch scaling and major feature releases, balancing rapid delivery with maintainability in a legacy environment.',
      'Supported rapid growth to ~$1.14M ARR (~$95.3K MRR) within the first year post-launch.',
    ],
  },
  {
    company: 'PlayKigai',
    role: 'Contract Software Engineer / Lead Game Developer',
    start: 'July 2024',
    end: 'Current',
    location: 'Remote (Contract)',
    bullets: [
      'Contracted across three game development projects, contributing to both early prototyping and production-phase systems.',
      'Worked with Unreal Engine (Blueprints, AngelScript) before shifting focus to Godot; currently developing a production project in Godot 4.5.',
      'Lead developer on a 3-person team, responsible for technical direction, task breakdown, and implementation across gameplay, rendering, and effects.',
      'Hands-on development in GDScript, custom shaders, and VFX systems with an emphasis on performance, visual clarity, and maintainability.',
      'Contributed beyond engineering into product development, front-end concepting, and AI-driven features while consistently delivering at a high pace.',
    ],
  },
  {
    company: 'Trilogy Education Services',
    role: 'Teaching Assistant / Tutor',
    start: 'June 2020',
    end: 'May 2023',
    location: 'Houston, TX. USA',
    bullets: [
      'Supported instruction across 22 modules in a Full Stack Development bootcamp as a substitute teacher and technical mentor.',
      'Solved a wide range of technical problems daily to improve student comprehension; exceeded key metrics like programming support and engagement by ~5% on average.',
      'Graded full-scale Full Stack projects using MySQL, NoSQL, React, and GraphQL.',
      'Managed classroom Git repositories and added ~18 code challenges weekly to match curriculum needs.',
      'Provided 100+ students with personalized tutoring, helping improve performance and increasing average grades by ~10% through schedule planning and targeted support.',
    ],
  },
]