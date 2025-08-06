import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GraphQLClient } from 'graphql-request'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { VITE_BACKEND_URL } from './constants/env.ts'
import { useClerkAuth, type ClerkAuth } from './hooks/useClerkAuth.tsx'

const queryClient = new QueryClient()

export const graphqlClient = new GraphQLClient(VITE_BACKEND_URL)

export type RouterContext = {
    queryClient: QueryClient
    graphqlClient: GraphQLClient
    auth: ClerkAuth
}

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const router = createRouter({
    routeTree,
    context: {
        graphqlClient: graphqlClient,
        queryClient,
        auth: {} as ClerkAuth // NOTE: this will be set in useClerkAuth
    },
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
})

export default function App() {
    const auth = useClerkAuth()

    // TODO: better spinner
    if (auth.isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                Loading...
            </div>
        )
    }

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} context={{ auth }} />
        </QueryClientProvider>
    )
}
