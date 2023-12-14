import { Aggregate, IResult, Ok, type UID } from 'rich-domain'

export interface NoteProps {
    id?: UID;
    createdAt?: Date;
    updatedAt?: Date;
}

// extends to Aggregate
export class Note extends Aggregate<NoteProps>{
    private constructor(props: NoteProps) {
        super(props);
    }

    public static create(props: NoteProps): IResult<Note> {
        return Ok(new Note(props));
    }
}

