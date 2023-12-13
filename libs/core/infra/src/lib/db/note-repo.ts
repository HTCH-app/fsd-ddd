import { Note, NoteRepoTrait } from "@fsd-ddd/domain";
import { IResult } from "types-ddd";

export class InMemoryNoteRepo implements NoteRepoTrait {
    save(note: Note): Promise<IResult<void>> {
        throw new Error("Method not implemented.");
    }
}