import { createFileRoute, Link, useBlocker } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {


  const { proceed, reset, status } = useBlocker({
    shouldBlockFn: () => true,
    withResolver: true,
  })


  return (
    <div >
      {/* <p>welcome :)</p> */}

      <Link
        to="/lead"
      >
        to to lead
      </Link>
      {status === 'blocked' && (
        <div>
          <p>Are you sure you want to leave?</p>
          <button onClick={proceed}>Yes</button>
          <button onClick={reset}>No</button>
        </div>
      )}
    </div>
  )
}
