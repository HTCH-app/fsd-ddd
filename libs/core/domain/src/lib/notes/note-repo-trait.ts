import { IResult } from "types-ddd";
import { Note } from "./note.aggregate-root";

export interface NoteRepoTrait {
    save(note: Note): Promise<IResult<void>>;
}