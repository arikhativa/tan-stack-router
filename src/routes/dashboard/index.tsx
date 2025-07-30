import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className=' flex justify-center bg-pink-300'>
      <p className=' self-center'>Hello "/dashboard/"!</p>
    </div>
  )
}
