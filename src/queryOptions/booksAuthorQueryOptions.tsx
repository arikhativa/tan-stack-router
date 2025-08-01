import { graphqlClient } from '@/main'
import { GET_BOOKS_A } from '@/graphql/queries/books'
import { queryOptions } from '@tanstack/react-query'
import type { BooksAuthor } from '@/graphql/types/books'

export const booksAuthorQueryOptions = (id?: string) =>
    queryOptions({
        queryKey: ['booksAuthor', id],
        queryFn: () => graphqlClient.request<BooksAuthor>(GET_BOOKS_A),
    })