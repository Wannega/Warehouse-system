'use client'

import { useEffect } from 'react'
import { useMeQuery } from '@generated'
import { useRouter } from 'next/navigation'

interface Props {
  onlyFor?: string
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const { data, loading } = useMeQuery()
  const router = useRouter()

  useEffect(() => {
    if (data?.me?.blocked || (!data?.me?.id && !loading)) {
      router.push('/login')
    }
  }, [data?.me?.id, data?.me?.blocked, router, loading])

  return <>{children}</>
}
