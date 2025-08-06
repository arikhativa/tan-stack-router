import { columns } from '@/components/lead/table/columns'
import { DataTable } from '@/components/lead/table/data-table'
import { booksQueryOptions } from '@/queryOptions/booksQueryOptions'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/lead/table')({
  component: RouteComponent,
  loader: async ({ context }) => {
    return context.queryClient.ensureQueryData(booksQueryOptions())
  }
})

function RouteComponent() {
  console.log('R Table');

  const { data } = useSuspenseQuery(booksQueryOptions())

  return <div className=' bg-purple-500 p-10'>
    <DataTable columns={columns} data={data.books} />
  </div>
}
