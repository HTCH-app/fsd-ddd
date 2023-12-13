'use client';

import { FC, useCallback } from "react";

export const AddNoteButton:FC = () => {
    const handleClick = useCallback(() => {
        console.log('Add Note Button Clicked')
    }, [])
    return <button onClick={handleClick}>Add Note</button>
}