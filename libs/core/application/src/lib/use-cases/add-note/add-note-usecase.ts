import { Note, NoteRepoTrait } from "@fsd-ddd/domain";
import { Fail, ID, IUseCase, Ok, Result } from "rich-domain";
import { AddNoteUseCaseDto } from "./add-note-usecase-dto";

export interface AddNoteUseCaseDeps {
	notesRepo: NoteRepoTrait;
}

export type AddNoteUseCaseResponse = void;

export class AddNoteUseCase implements IUseCase<AddNoteUseCaseDto, Result<AddNoteUseCaseResponse>>{

	constructor(
		protected readonly deps: AddNoteUseCaseDeps
	) { }

	async execute(data: AddNoteUseCaseDto): Promise<Result<AddNoteUseCaseResponse, string>> {
		try {
			const id = ID.create()
			const noteResult = Note.create({
				id,
			})
			if (noteResult.isFail()) return Fail(noteResult.error(), 'BAD_REQUEST');
			const note = noteResult.value();

			const saveResult = await this.deps.notesRepo.save(note);
			if (saveResult.isFail()) return Fail(saveResult.error(), 'INTERNAL_SERVER_ERROR');

			return Ok();
		} catch (error) {
			return Fail('Something went wrong', 'INTERNAL_SERVER_ERROR');
		}
	};
}

