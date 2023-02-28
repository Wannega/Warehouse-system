'use client'

import Image from 'next/image'
import styled from 'styled-components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Main>
      <Background fill={true} src={'/images/auth-bg.jpg'} alt={'bg'} />
      <Section>{children}</Section>
    </Main>
  )
}

const Main = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 40% auto;
`
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: relative;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`
const Background = styled(Image)`
  object-fit: cover;
  position: absolute;
`
