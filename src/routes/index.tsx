import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div >
      {/* <p>welcome :)</p> */}
      <Link
        to="/lead"
      >
        to to lead
      </Link>
    </div>
  )
}
