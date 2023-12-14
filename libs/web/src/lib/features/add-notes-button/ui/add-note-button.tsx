'use client';

import { FC } from "react";
import { useAddNoteButton } from "./use-add-note-button";

export const AddNoteButton: FC = () => {
    const { handleClick, isPending } = useAddNoteButton()
    return <button disabled={isPending} onClick={handleClick}>Add Note
        {isPending ? <>…</> : null}
    </button>
}