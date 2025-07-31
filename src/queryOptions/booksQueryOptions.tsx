import { graphqlClient } from '@/main'
import { GET_BOOKS } from '@/graphql/queries/books'
import { queryOptions } from '@tanstack/react-query'
import type { Books } from '@/graphql/types/books'

export const booksQueryOptions = () =>
    queryOptions({
        queryKey: ['books'],
        queryFn: () => graphqlClient.request<Books>(GET_BOOKS),
    })