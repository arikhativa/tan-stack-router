import { AppSidebar } from '@/components/AppSidebar'
import { Providers } from '@/components/Providers'
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  // context: () => ({
  //   apolloClient: undefined! as ApolloClient<NormalizedCacheObject>
  // }),
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
