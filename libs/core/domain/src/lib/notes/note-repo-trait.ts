import { IResult } from "rich-domain";
import { Note } from "./note.aggregate-root";

export interface NoteRepoTrait {
    fetchList(): Promise<IResult<Note[]>>;
    save(note: Note): Promise<IResult<void>>;
}