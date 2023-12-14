import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { addNoteCommand } from '../commands/add-note-command'
import 'server-only';

export const notesApp = new Hono()
  .post(
    '/',
    zValidator(
      'json',
      z.object({
        content: z.string(),
      })
    ),
    async (c) => {
      const dto = c.req.valid('json')
      const result = await addNoteCommand(dto)
      if (result.isFail()) return c.json({ ok: false, message: result.error() }, 400)

      return c.json(
        {
          ok: true,
          message: 'Created!',
        },
        201
      )
    }
  )