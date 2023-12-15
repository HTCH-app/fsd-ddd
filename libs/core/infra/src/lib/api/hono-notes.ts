import { Hono } from 'hono/quick'
import { HTTPException } from 'hono/http-exception'
import { zValidator } from '@hono/zod-validator'
import { addNoteCommand, listNotesCommand } from '../commands'
import { AddNoteUseCaseDtoSchema, ListNotesUseCaseDtoSchema } from '@fsd-ddd/application';

export const notesApp = new Hono()
  .get(
    '/listForOwnerId',
    async (c) => {
      const result = await listNotesCommand({
        ownerId: 'fakes-owner-id'
      })
      if (result.isFail()) throw new HTTPException(400, { message: result.error() })
      const notes = result.value()
      return c.json(
        {
          ok: true,
          notes
        },
      )
    }
  )
  .post(
    '/addNote',
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