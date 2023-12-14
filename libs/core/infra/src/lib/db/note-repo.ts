import { Note, NoteRepoTrait } from "@fsd-ddd/domain";
import { ID, IResult, Ok } from "rich-domain";

export class InMemoryNoteRepo implements NoteRepoTrait {
    list = [
        Note.create({
            id: ID.create(),
        }).value(),
        Note.create({
            id: ID.create(),
        }).value(),
        Note.create({
            id: ID.create(),
        }).value()
    ]

    async fetchList(): Promise<IResult<Note[]>> {
        return Ok(this.list)
    }

    async save(note: Note): Promise<IResult<void>> {
        this.list.push(note);
        return Ok();
    }
}