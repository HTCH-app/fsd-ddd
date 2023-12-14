import { client } from '@fsd-ddd/web/shared/api'
import { useQuery } from '@tanstack/react-query'
import { queryKey } from '../lib/query-key';

export const useNotesListQuery = () => {
    const query = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
            const res = await client.notes.listForOwnerId.$get({
                json: {
                    ownerId: 'ownerId'
                }
            })
            return await res.json()
        },
    })

    return query;
}