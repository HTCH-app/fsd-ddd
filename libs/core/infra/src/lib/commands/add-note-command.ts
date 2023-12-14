import { AddNoteUseCase, AddNoteUseCaseDto } from '@fsd-ddd/application'
import { notesRepo } from '../instances';
import { IResult } from 'types-ddd';

const useCase = new AddNoteUseCase({
    notesRepo
});

export const addNoteCommand = async (dto: AddNoteUseCaseDto): Promise<IResult<void>> => {
    return useCase.execute(dto);
}