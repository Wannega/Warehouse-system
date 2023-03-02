'use client'

import { AuthProvider } from '@hoc'

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthProvider>{children}</AuthProvider>
}
