import { AddNoteButton } from "@fsd-ddd/web/features/add-notes-button"
import { NotesList } from "@fsd-ddd/web/features/notes-list"
import { FC } from "react"

export const NotesWidget: FC = () => {
    return <div>
        <AddNoteButton />
        <NotesList />
    </div>
}