
import type { ColumnDef } from "@tanstack/react-table"
import { AuthorCell } from './AuthorCell';

export type BookCol = {
    id: string
    title: string
    author?: string
}

export const columns: ColumnDef<BookCol>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "author",
        header: "Author",
        cell: ({ row }) => {
            return <AuthorCell id={row.getValue("id")} />
        }
    },
]