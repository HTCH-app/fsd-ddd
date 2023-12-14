import { z } from 'zod'

export const AddNoteUseCaseDtoSchema = z.object({
	content: z
		.string()
		.min(4, 'Too short. Try writing a bit more for your note.')
		.max(1000, 'Too long. Try writing a bit less for your note.'),
});

export type AddNoteUseCaseDto = z.infer<typeof AddNoteUseCaseDtoSchema>;