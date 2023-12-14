import { app } from '@fsd-ddd/hono-router'
import { handle } from 'hono/vercel'

export const runtime = 'edge';

const handler = handle(app)

export { handler as GET, handler as POST };