import { AddNoteUseCase, AddNoteUseCaseDto, AddNoteUseCaseResponse } from '@fsd-ddd/application'
import { notesRepo } from '../instances';
import { IResult } from 'rich-domain';

const useCase = new AddNoteUseCase({
    notesRepo
});

export const addNoteCommand = async (dto: AddNoteUseCaseDto): Promise<IResult<AddNoteUseCaseResponse>> => {
    return useCase.execute(dto);
}