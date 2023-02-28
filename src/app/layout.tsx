'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import StyledComponentsRegistry from '@lib/registry'
import { GlobalStyles, lightTheme } from '@styles'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API + '/graphql',
  cache: new InMemoryCache(),
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ApolloProvider client={client}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={lightTheme}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </ApolloProvider>
      </body>
    </html>
  )
}
