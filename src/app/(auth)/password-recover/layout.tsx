'use client'

import { LeftArrowIcon } from '@icons'
import Link from 'next/link'
import styled from 'styled-components'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Link href={'/login'}>
        <BackIcon />
      </Link>
      {children}
    </>
  )
}

const BackIcon = styled(LeftArrowIcon)`
  position: absolute;
  left: 40px;
  top: 50px;
  margin: auto;
`
