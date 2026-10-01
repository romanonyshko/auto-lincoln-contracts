export const API_PREFIX = '/api'

export const API_ROUTES = {
  health: '/health',
  dashboard: '/dashboard',
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
  },
} as const

export const AUTH_COOKIE_NAME = 'al_session'

