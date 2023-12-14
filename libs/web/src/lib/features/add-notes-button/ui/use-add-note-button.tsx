import { useCallback } from "react";
import { client } from '@fsd-ddd/web/shared/api'
import { useMutation } from '@tanstack/react-query'
import { InferRequestType, InferResponseType } from "hono";

export const useAddNoteButton = () => {
    const { $post } = client.notes
    const mutation = useMutation<
        InferResponseType<typeof $post>,
        Error,
        InferRequestType<typeof $post>['json']
    >({
        mutationFn: async (dto) => {
            const res = await $post({
                json: dto
            })
            return await res.json()
        },
    })

    const handleClick = useCallback(() => {
        mutation.mutate({
            content: 'New Note Content'
        })
    }, []);
    return { handleClick, ...mutation };
}