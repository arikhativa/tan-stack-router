import { GET_LOCATIONS } from '@/queries/location';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lead/$id')({
  component: RouteComponent,
  errorComponent: ({ error }) => <p>Hey these is err:    {error.message}</p>,
  pendingComponent: () => <p>Loading specific data...</p>,
  loader: async ({ params, context }) => {
    const { data } = await context.apolloClient.query({
      query: GET_LOCATIONS
      // variables: { id: params.id }
    });
    return data;
  }

})

function RouteComponent() {
  const { id } = Route.useParams()
  const loaderData = Route.useLoaderData();
  console.log('loaderData', loaderData);
  return (
    <div>
      <p>lead id: {id}</p>
      {/* <p>lead name: {loaderData[0].title}</p> */}
    </div>
  )
}
