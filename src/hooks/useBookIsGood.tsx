import { booksIsGoodQueryOptions } from "@/queryOptions/booksIsGoodQueryOptions";
import { useQuery } from "@tanstack/react-query";

export function useBookIsGood(id: string) {
    return useQuery({
        ...booksIsGoodQueryOptions(id),
        select: (data) => data.books.find((book) => book.id === id)?.isGood,
    })
}