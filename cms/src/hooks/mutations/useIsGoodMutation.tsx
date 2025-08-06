// import type { BookIsGood } from '@/graphql/types/books'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { BOOKS_UPDATE_IS_GOOD } from '@/graphql/mutations/books'
// import { BOOKS_IS_GOOD } from '@/queryOptions/booksIsGoodQueryOptions'

// export const useIsGoodMutation = (id: string) => {
//     const queryClient = useQueryClient()
//     const mutationFn = async (variables: BookIsGood) => {
//         return graphqlClient.request<BookIsGood>(BOOKS_UPDATE_IS_GOOD, variables)
//     }

//     return useMutation({
//         mutationKey: [BOOKS_IS_GOOD, id],
//         mutationFn,
//         onSuccess: (_data) => {
//             queryClient.invalidateQueries({ queryKey: [BOOKS_IS_GOOD, id] });
//         },
//         onError: (error) => {
//             console.error(error.message);
//         }
//     })
// }