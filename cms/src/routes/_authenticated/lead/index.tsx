import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/lead/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>

        <p>Hello /lead/!</p>
        <p>add a lead id in the url</p>

    </div>
}
