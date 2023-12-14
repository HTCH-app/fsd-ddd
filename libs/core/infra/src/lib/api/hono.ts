import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { addNoteCommand } from '../commands/add-note-command'
import { AddNoteUseCaseDtoSchema } from '@fsd-ddd/application';

export const notesApp = new Hono()
  .post(
    '/',
    zValidator(
      'json',
      AddNoteUseCaseDtoSchema
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