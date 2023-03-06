'use client'

import { Menu, Showcase } from '@components'
import { MenuIcon, NotificationIcon } from '@icons'
import styled from 'styled-components'

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Grid>
      <Nav>
        <Title>Главная</Title>
        <Actions>
          <NotificationIcon />
          <MenuIcon />
          <Showcase />
        </Actions>
      </Nav>
      <Menu />
      <Content>{children}</Content>
    </Grid>
  )
}

const Grid = styled.main`
  display: grid;
  grid-template-areas: 'menu nav nav' 'menu content content' 'menu content content';
  grid-auto-columns: 80px auto;
  grid-auto-rows: 80px auto;
  height: 100vh;
  overflow: hidden;
`
const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`
const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0em 1.25em;
`
const Content = styled.div`
  grid-area: content;
`
const Title = styled.h1`
  /* grid-area: content; */
`
