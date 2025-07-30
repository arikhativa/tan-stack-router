import { AppSidebar } from '@/components/AppSidebar'
import { Providers } from '@/components/Providers'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Providers>
        <AppSidebar />
        <Outlet />
      </Providers>
      <TanStackRouterDevtools />
    </>
  ),
})
