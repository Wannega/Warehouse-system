'use client'

import { useRouter } from 'next/navigation'

// TODO: MOVE TO HOOKS
export const useDelayedRedirect = () => {
  const router = useRouter()

  return [
    (url: string, delay?: number) =>
      setTimeout(() => router.push(url), delay ?? 3000),
  ]
}
