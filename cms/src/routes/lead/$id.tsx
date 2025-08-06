import { LeadAuthor } from '@/components/LeadAuthor';
import { booksQueryOptions } from '@/queryOptions/booksQueryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lead/$id')({
  component: RouteComponent,
  errorComponent: ({ error }) => <p>Hey these is err:    {error.message}</p>,
  pendingComponent: () => <p>Loading specific data...</p>,
  loader: async ({ context }) => {
    return context.queryClient.ensureQueryData(booksQueryOptions())
  }
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { data } = useSuspenseQuery(booksQueryOptions())

  const title = data.books[0].title

  return (
    <div>
      <p>lead id: {id}</p>
      <p>lead title: {title}</p>
      <LeadAuthor />
    </div>
  )
}
