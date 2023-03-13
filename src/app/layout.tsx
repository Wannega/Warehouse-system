"use client";

import { lightTheme, GlobalStyle } from "@themes";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@lib/registry";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "@Environment";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <RelayEnvironmentProvider environment={environment}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={lightTheme}>
              <GlobalStyle />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </RelayEnvironmentProvider>
      </body>
    </html>
  );
}
