import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useAuth, useUser } from '@clerk/clerk-react';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/_authenticated')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isLoaded, isSignedIn } = useAuth()
  const { user } = useUser()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      console.log('E',);
      // TODO
      window.location.href = '/login'
    }
  }, [isLoaded, isSignedIn])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">Access Denied</h2>
          <p className="text-gray-600 mt-2">Please sign in to access this page.</p>
        </div>
      </div>
    )
  }

  return <SidebarProvider>
    <AppSidebar />
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900">
        Welcome back, {user?.firstName}!
      </h2>
    </div>
    <Outlet />
  </SidebarProvider>
}
