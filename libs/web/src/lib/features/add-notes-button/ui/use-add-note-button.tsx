import { useCallback } from "react";
import { client } from '@fsd-ddd/web/shared/api'

export const useAddNoteButton = () => {
    
    const handleClick = useCallback(() => {
        client.notes.$post({
            json: {
                content: 'New Note Content'
            }
        }).then((result) => console.log(result));
    }, []);
    return { handleClick };
}