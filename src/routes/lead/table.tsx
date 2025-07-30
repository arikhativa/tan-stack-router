import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lead/table')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/lead/asdsad"!</div>
}
