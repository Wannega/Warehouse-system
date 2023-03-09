"use client";

import { lightTheme, GlobalStyle } from "@themes";
import { ThemeProvider } from "styled-components";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@lib/registry";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StyledComponentsRegistry>
            <ThemeProvider theme={lightTheme}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
