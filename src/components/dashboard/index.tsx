import { Diagram } from '@components/diagram'
import { Forecast } from '@components/forecast'
import { Showcase } from '@components/showcase'
import {
  HouseIcon,
  DownloadIcon,
  ExitIcon,
  GearIcon,
  NotificationIcon,
  MenuIcon,
  BalanceIcon,
  OutcomeIcon,
} from '@icons'
import { IncomesIcon } from '@icons/incomes'
import { NearestDeliveryIcon } from '@icons/nearest-delivery'
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
          <Showcase />
        </Actions>
      </Nav>
      <Menu>
        <Bar>
          <Logo src={'/photo.png'} width={50} height={50} alt={'photo'} />
          <Routes>
            <HouseIcon />
            <DownloadIcon />
          </Routes>
        </Bar>
        <Routes>
          <GearIcon />
          <ExitIcon />
        </Routes>
      </Menu>
      <Content>
        <Forecasts>
          <Forecast
            title={'Баланс'}
            Icon={<BalanceIcon />}
            display={12300 + '₽'}
          />
          <Forecast
            title={'Доход'}
            Icon={<IncomesIcon />}
            display={12300 + '₽'}
          />
          <Forecast
            title={'Убыток'}
            Icon={<OutcomeIcon />}
            display={12300 + '₽'}
            negative
          />
          <Forecast
            title={'Ближайшая доставка'}
            Icon={<NearestDeliveryIcon />}
            display={'21.02.2023'}
          />
        </Forecasts>
        <Diagrams>
          <Diagram title={'Загрузка складов'} />
          <Diagram title={'Загрузка складов'} />
        </Diagrams>
      </Content>
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
  padding-bottom: 3em;
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
  padding-bottom: 3em;
  padding-top: 3em;
  border-bottom: 1px solid #0000002d;
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

  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: ${({ theme }) => theme.content.bg};
  padding: 1.25em;
`
const Title = styled.h1`
  grid-area: content;
`
const Forecasts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 1em;
`
const Diagrams = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  column-gap: 1em;
  height: 50vh;
`
