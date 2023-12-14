import { Note, NoteRepoTrait } from "@fsd-ddd/domain";
import { Combine, Fail, IAdapter, IUseCase, Ok, Result } from "rich-domain";
import { ListNotesUseCaseDto } from "./list-notes-usecase-dto";

export interface ListNotesDeps<T> {
	notesRepo: NoteRepoTrait;
	presenter: IAdapter<Note, T>;
}

export class ListNotesUseCase<T> implements IUseCase<ListNotesUseCaseDto, Result<T[]>>{

	constructor(protected readonly deps: ListNotesDeps<T>) { }

	async execute(_data: ListNotesUseCaseDto): Promise<Result<T[], string>> {
		try {
			const result = await this.deps.notesRepo.fetchList();
			if (result.isFail()) return Fail(result.error(), 'INTERNAL_SERVER_ERROR');
			const notes = result.value();
			if (notes.length === 0) return Ok([]);

			const models = notes.map(note => note.toObject(this.deps.presenter)) as T[];
			return Ok(models);
		} catch (error) {
			return Fail('Something went wrong', 'INTERNAL_SERVER_ERROR');
		}
	};
}

