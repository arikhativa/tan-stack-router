import { graphqlClient } from '@/main'
import { GET_BOOKS_IS_GOOD } from '@/graphql/queries/books'
import { queryOptions } from '@tanstack/react-query'
import type { BooksIsGood } from '@/graphql/types/books'

export const BOOKS_IS_GOOD = "booksIsGood"

export const booksIsGoodQueryOptions = (id?: string) =>
    queryOptions({
        queryKey: [BOOKS_IS_GOOD, id],
        queryFn: () => graphqlClient.request<BooksIsGood>(GET_BOOKS_IS_GOOD),
        refetchInterval: 1 * 1000,
        refetchIntervalInBackground: true,
        staleTime: 0,
        refetchOnWindowFocus: false,
    })