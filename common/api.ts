export const API_PREFIX = '/api'

export const API_ROUTES = {
  health: '/health',
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
    wsTicket: '/auth/ws-ticket',
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

/** Query param that carries the one-time chat ticket on the WebSocket URL. */
export const WS_TICKET_PARAM = 'ticket'

