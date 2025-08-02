import { AppSidebar } from '@/components/AppSidebar'
import { Providers } from '@/components/Providers'
import type { RouterContext } from '@/main'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'



export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: () => <div>404 Not Found</div>,
})

function RootComponent() {
  return (
    <>
      <Providers>
        <AppSidebar />
        <Outlet />
      </Providers>
      <TanStackRouterDevtools />
    </>
  )
}
