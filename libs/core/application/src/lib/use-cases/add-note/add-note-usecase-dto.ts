import { z } from 'zod'

export const AddNoteUseCaseDtoSchema = z.object({
	content: z.string().min(4).max(1000),
});

export type AddNoteUseCaseDto = z.infer<typeof AddNoteUseCaseDtoSchema>;