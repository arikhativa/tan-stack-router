import { ClerkProvider } from "@clerk/clerk-react";
import { PUBLISHABLE_KEY } from "@/constants/env";
// import { Theme, useTheme } from "@/components/ui/theme-provider";

interface Props {
  children: React.ReactNode;
}

export function ClerkWrapperProvider({ children }: Props) {
  // const { theme } = useTheme();
  // const [clerkTheme, setTheme] = useState(themeToClerkTheme(theme));

  // useEffect(() => {
  //   setTheme(themeToClerkTheme(theme));
  // }, [theme]);

  return (
    <ClerkProvider
      // appearance={{
      // baseTheme: clerkTheme,
      // }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/" // TODO change to constant obj
    >
      {children}
    </ClerkProvider>
  );
}

// function themeToClerkTheme(t: Theme) {
//   return t === "dark" ? dark : undefined;
// }
