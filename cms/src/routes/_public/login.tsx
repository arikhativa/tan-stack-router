import { createFileRoute } from '@tanstack/react-router'
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

export const Route = createFileRoute('/_public/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <article className="flex-1 flex flex-col gap-12 text-center items-center justify-center ltr">
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </article>
  );
}
