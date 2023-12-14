import { Note, NoteRepoTrait } from "@fsd-ddd/domain";
import { IResult } from "rich-domain";

export class InMemoryNoteRepo implements NoteRepoTrait {
    save(note: Note): Promise<IResult<void>> {
        throw new Error("Method not implemented.");
    }
}