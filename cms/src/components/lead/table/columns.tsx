
import type { ColumnDef } from "@tanstack/react-table"
import { AuthorCell } from './AuthorCell';
import { IsGoodCell } from "./IsGoodCell";

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
    {
        accessorKey: "isGood",
        header: "IsGood",
        cell: ({ row }) => {
            return (
                <div className="flex">
                    <IsGoodCell id={row.getValue("id")} />
                </div>
            )
        }
    },
]