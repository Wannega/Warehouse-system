'use client'

import { LeftArrowIcon } from '@icons'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Main>
      <Background fill={true} src={'/images/auth-bg.jpg'} alt={'bg'} />
      <Section>
        <Header>
          <Image
            width={130}
            height={45}
            src={'/images/logo.png'}
            alt={'logo'}
          />
        </Header>
        {children}
      </Section>
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
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 40px;
  right: 40px;
  top: 40px;
`
const Background = styled(Image)`
  object-fit: cover;
  position: absolute;
`
const BackIcon = styled(LeftArrowIcon)`
  position: absolute;
  left: 0px;
  margin: auto;
`
