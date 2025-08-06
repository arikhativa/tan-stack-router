import { useUser } from '@clerk/clerk-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/lead/')({
    component: RouteComponent,
})

function RouteComponent() {
    const { user } = useUser()

    return <div>
        <p>Hello /lead/!</p>
        <p>add a lead id in the url</p>
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
                Welcome back, {user?.firstName}!
            </h2>
        </div>

    </div>
}
