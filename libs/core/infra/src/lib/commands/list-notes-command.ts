import { ListNotesUseCase, ListNotesUseCaseDto } from '@fsd-ddd/application'
import { noteToModelAdapter, notesRepo } from '../instances';
import { IResult } from 'rich-domain';
import { NoteModel } from '../adapters';

const useCase = new ListNotesUseCase<NoteModel>({
    notesRepo, presenter: noteToModelAdapter
});

export const listNotesCommand = async (dto: ListNotesUseCaseDto): Promise<IResult<NoteModel[]>> => {
    return useCase.execute(dto);
}