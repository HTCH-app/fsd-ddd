import { IResult } from "rich-domain";
import { Note } from "./note.aggregate-root";

export interface NoteRepoTrait {
    save(note: Note): Promise<IResult<void>>;
}