import { SidebarProvider } from "./ui/sidebar";

type Props = React.PropsWithChildren

export function Providers({ children }: Props) {
  return <>
    <SidebarProvider>
      {children}
    </SidebarProvider>
  </>
}