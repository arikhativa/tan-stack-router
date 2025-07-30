import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lead/$id')({
  component: RouteComponent,
  errorComponent: () => <p>asderror</p>,
  pendingComponent: () => <p>Loading specific data...</p>,
  loader: async ({ params }) => {
    if (params.id === "11") {
      throw new Error()
    }
    return { name: "yyy" }
  }

})

function RouteComponent() {
  const { id } = Route.useParams()
  const loaderData = Route.useLoaderData();
  return (
    <div>
      <p>lead id: {id}</p>
      <p>lead name: {loaderData.name}</p>
    </div>
  )
}
