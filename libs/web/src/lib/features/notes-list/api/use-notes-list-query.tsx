import { client } from '@fsd-ddd/web/shared/api'
import { useQuery } from '@tanstack/react-query'
import { queryKey } from '../lib/query-key';


export const useNotesListQuery = () => {
    const query = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
            const { $get } = client.notes.listForOwnerId
            const res = await $get({
                json: {
                    ownerId: 'ownerId'
                }
            })
            const json = await res.json()
            return json
        },
    })
    return query;
}