import type { AppType } from '@fsd-ddd/hono-router'
import { hc } from 'hono/client'

export const client = hc<AppType>('').api