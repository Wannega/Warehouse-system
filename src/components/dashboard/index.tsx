import {
  HouseIcon,
  DeliveryIcon,
  DownloadIcon,
  ExitIcon,
  GearIcon,
  NotificationIcon,
  MenuIcon,
} from '@icons'
import Image from 'next/image'
import styled from 'styled-components'

export const DashboardPage: React.FC = () => {
  return (
    <Grid>
      <Nav>
        <Title>Главная</Title>
        <Actions>
          <NotificationIcon />
          <MenuIcon />
        </Actions>
      </Nav>
      <Menu>
        <Bar>
          <Logo src={'/photo.png'} width={50} height={50} alt={'photo'} />
          <Routes>
            <HouseIcon />
            <DeliveryIcon />
            <DownloadIcon />
          </Routes>
        </Bar>
        <Routes>
          <GearIcon />
          <ExitIcon />
        </Routes>
      </Menu>
      <Content></Content>
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
const Menu = styled.aside`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`
const Routes = styled.div`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 2.5em;
`
const Bar = styled.div`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`
const Logo = styled(Image)`
  padding-bottom: 2.5em;
  padding-top: 2em;
  border-bottom: 1px solid #0000002d;
`
const Actions = styled.div``
const Nav = styled.nav`
  grid-area: nav;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Content = styled.div`
  grid-area: content;
  background-color: orangered;
`
const Title = styled.h1`
  grid-area: content;
`
