import { useBookAuthor } from "@/hooks/useBookAuthor";

interface Props {
    id: string
}

export function AuthorCell({ id }: Props) {
    console.log('R AuthorCell: ', id);
    const { data: author, isLoading } = useBookAuthor(id)


    if (isLoading) return <p>loading</p>
    if (!author) return <p>No author</p>

    return <p>{author}</p>
}

