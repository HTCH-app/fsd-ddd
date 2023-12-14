import { Note } from "@fsd-ddd/domain";
import { IAdapter, Ok, Result } from "rich-domain";

export interface NoteModel {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

export class NoteToModelAdapter implements IAdapter<Note, NoteModel>{
    build(data: Note): Result<NoteModel> {
        const model = data.toObject() as NoteModel
        return Ok(model)
    }
}