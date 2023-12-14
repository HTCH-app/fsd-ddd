import { NoteRepoTrait } from "@fsd-ddd/domain";
import { Fail, IUseCase, Ok, Result } from "rich-domain";
import { AddNoteUseCaseDto } from "./add-note-usecase-dto";

export interface Deps {
	notesRepo: NoteRepoTrait;
}

export class AddNoteUseCase implements IUseCase<AddNoteUseCaseDto, Result<void>>{

	constructor(
		protected readonly deps: Deps
	) { }

	async execute(data: AddNoteUseCaseDto): Promise<Result<void, string>> {
		try {
			// Do Stuff with data etc.
			// Do Stuff with this.deps.notesRepo etc.
			return Ok();
		} catch (error) {
			return Fail('Something went wrong', 'INTERNAL_SERVER_ERROR');
		}
	};
}

