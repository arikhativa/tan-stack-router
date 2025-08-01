import { Checkbox } from "@/components/ui/checkbox";
import { useBookIsGood } from "@/hooks/useBookIsGood";
import { useIsGoodMutation } from "@/hooks/useIsGoodMutation";

interface Props {
    id: string
}

export function IsGoodCell({ id }: Props) {
    console.log('IsGoodCell ', id);
    const { data: isGood, isLoading } = useBookIsGood(id)

    const { mutate } = useIsGoodMutation(id)

    if (isLoading) return <p>loading</p>
    if (isGood === undefined) return <p>No data</p>

    return <Checkbox
        className=""
        checked={isGood}
        onCheckedChange={(checked) => {
            mutate({ id, isGood: !!checked })
        }}
    />
}

