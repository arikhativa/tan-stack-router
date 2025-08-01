
export type Book = {
    id: string
    title: string
}

export type BookAuthor = {
    id: string
    author: string
}

export type BookIsGood = {
    id: string
    isGood: boolean
}

export type Books = {
    books: Book[]
}

export type BooksAuthor = {
    books: BookAuthor[]
}

export type BooksIsGood = {
    books: BookIsGood[]
}