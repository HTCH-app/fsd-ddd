'use client'
import { FC } from "react"
import { useNotesListQuery } from "../api/use-notes-list-query"

export const NotesList: FC = () => {
    const query = useNotesListQuery()

    return <pre>{JSON.stringify(query.data?.notes, null, 2)}</pre>
}