import { booksAuthorQueryOptions } from "@/queryOptions/booksAuthorQueryOptions";
import { useQuery } from "@tanstack/react-query";

export function useBookAuthor(id: string) {
    return useQuery({
        ...booksAuthorQueryOptions(),
        select: (data) => data.books.find((book) => book.id === id)?.author || "",
    })
}