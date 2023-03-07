'use client'

import { RawIntlProvider } from 'react-intl'
import { intl } from '@intl'
import StyledComponentsRegistry from '@lib/registry'
import { GlobalStyles, lightTheme } from '@styles'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

import { ApolloSetup } from './_apollo'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <RawIntlProvider value={intl}>
          <ApolloSetup>
            <StyledComponentsRegistry>
              <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                {children}
              </ThemeProvider>
            </StyledComponentsRegistry>
          </ApolloSetup>
        </RawIntlProvider>
      </body>
    </html>
  )
}
