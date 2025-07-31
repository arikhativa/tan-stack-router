import { booksAuthorQueryOptions } from "@/queryOptions/booksAuthorQueryOptions"
import { useQuery } from "@tanstack/react-query"

export function LeadAuthor() {
    console.log('LeadAuthor');
    const { data, isSuccess } = useQuery(booksAuthorQueryOptions())

    let author = ""
    if (isSuccess) {
        author = data.books[0].author
    }
    return <p>lead author: {author}</p>

}