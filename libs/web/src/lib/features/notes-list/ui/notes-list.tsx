'use client'
import { FC } from "react"
import { useNotesListQuery } from "../api/use-notes-list-query"



export const NotesList: FC = () => {
    const query = useNotesListQuery()
    const notes = query.data?.notes

    return <pre>{JSON.stringify(query.data?.notes, null, 2)}</pre>
}