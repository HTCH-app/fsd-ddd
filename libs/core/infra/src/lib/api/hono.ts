import { Hono } from 'hono/quick'
import { HTTPException } from 'hono/http-exception'
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
      if (result.isFail()) throw new HTTPException(400, { message: result.error() })

      return c.json(
        {
          ok: true,
          message: 'Created!',
        },
        201
      )
    }
  )