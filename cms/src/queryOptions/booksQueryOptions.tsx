import { GET_BOOKS } from '@/graphql/queries/books'
import { queryOptions } from '@tanstack/react-query'
import type { Books } from '@/graphql/types/books'
import { setGraphQLHeaders } from '@/lib/utils'
import type { RouterContext } from '@/App'

export const booksQueryOptions = (context: RouterContext) =>
    queryOptions({
        queryKey: ['books'],
        queryFn: () => context.graphqlClient.request<Books>(GET_BOOKS, setGraphQLHeaders(context.auth.getToken)),
    })