'use client';

import { FC } from "react";
import { useAddNoteButtonMutation } from "../api/use-add-note-button-mutation";

export const AddNoteButton: FC = () => {
    const { handleClick, isPending } = useAddNoteButtonMutation()
    return <button disabled={isPending} onClick={handleClick}>Add Note
        {isPending ? <>…</> : null}
    </button>
}