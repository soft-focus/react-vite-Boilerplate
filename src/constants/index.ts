import { env } from '@/lib/env'

export const APP_CONFIG = {
  name: env.appName,
  version: '1.0.0',
  description: 'Modern React starter template with TypeScript, Vite, and Tailwind CSS',
  author: 'Your Name',
  repository: 'https://github.com/yourusername/echo-starter',
  url: env.appUrl,
} as const

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as const

export const META = {
  title: 'Echo - Modern React Starter Template',
  description: 'A production-ready React starter template built with modern tools and best practices.',
  keywords: ['react', 'typescript', 'vite', 'tailwind', 'starter', 'template'],
} as const 