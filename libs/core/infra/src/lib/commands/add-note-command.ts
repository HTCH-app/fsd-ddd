import { AddNoteUseCase, AddNoteUseCaseDto } from '@fsd-ddd/application'
import { notesRepo } from '../instances';

const useCase = new AddNoteUseCase({
    notesRepo
});

export const addNoteCommand = async (dto: AddNoteUseCaseDto): Promise<void> => {
    const result = await useCase.execute(dto);
    if (result.isFail()) throw new Error(result.error());
}