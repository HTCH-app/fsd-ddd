'use client';

import { FC } from "react";
import { useAddNoteButton } from "./use-add-note-button";

export const AddNoteButton:FC = () => {
    const {handleClick} = useAddNoteButton()
    return <button onClick={handleClick}>Add Note</button>
}