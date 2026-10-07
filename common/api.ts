export const API_PREFIX = '/api'

export const API_ROUTES = {
  health: '/health',
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
  },
  dashboard: '/dashboard',
  categories: '/categories',
  carmakers: '/carmakers',
  carmakerModels: (id: string | undefined) => `/carmakers/${id}/models`,
  models: '/models',
  modelEngines: (id: string | undefined) => `/models/${id}/engines`,
  parts: '/parts',
} as const

export const WS_ROUTES = {
  chat: '/ws/chat',
} as const

export const AUTH_COOKIE_NAME = 'al_session'

