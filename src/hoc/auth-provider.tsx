'use client'

import { useUserStore } from '@store'
import { useRouter } from 'next/navigation'

interface Props {
  onlyFor?: string
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const user = useUserStore((state) => state.user)
  const router = useRouter()

  if (user.blocked || !user.id) {
    router.push('/login')

    return <></>
  }

  return <>{children}</>
}
