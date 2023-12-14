import { z } from 'zod'

export const ListNotesUseCaseDtoSchema = z.object({
    ownerId: z.string()
});

export type ListNotesUseCaseDto = z.infer<typeof ListNotesUseCaseDtoSchema>;