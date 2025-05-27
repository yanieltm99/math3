import React from "react";
import { ThemeProvider } from "./lib/providers/theme-provider";
import { FontSizeProvider } from "./lib/providers/font-size-content";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <FontSizeProvider>{children}</FontSizeProvider>
    </ThemeProvider>
  );
}
