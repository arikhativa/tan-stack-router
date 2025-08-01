
import type { ColumnDef } from "@tanstack/react-table"

export type BookCol = {
    id: string
    title: string
    author?: string
}

export const columns: ColumnDef<BookCol>[] = [
    {
        accessorKey: "id",
        header: "Reference Key",
    },
    {
        accessorKey: "title",
        header: "Book Title",
    },
    {
        accessorKey: "author",
        header: "Author",
    },
]