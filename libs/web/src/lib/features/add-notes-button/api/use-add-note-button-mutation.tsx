import { client } from '@fsd-ddd/web/shared/api'
import { InferRequestType, InferResponseType } from "hono";
import { mutationKey } from "../lib/mutation-key";
import { queryKey as notesListQueryKey } from '@fsd-ddd/web/features/notes-list'
import { useCallback } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAddNoteButtonMutation = () => {
    const { $post } = client.notes.addNote
    const queryClient = useQueryClient()
    const mutation = useMutation<
        InferResponseType<typeof $post>,
        Error,
        InferRequestType<typeof $post>['json']
    >({
        mutationKey: [mutationKey],
        mutationFn: async (dto) => {
            const res = await $post({
                json: dto
            })
            return await res.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [notesListQueryKey] })
        }
    })

    const handleClick = useCallback(() => {
        mutation.mutate({
            content: 'New Note Content'
        })
    }, []);
    return { handleClick, ...mutation };
}