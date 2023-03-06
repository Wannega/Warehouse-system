'use client'

import { Diagram } from '@components/diagram'
import { Forecast } from '@components/forecast'
import { BalanceIcon, OutcomeIcon } from '@icons'
import { IncomesIcon } from '@icons/incomes'
import { NearestDeliveryIcon } from '@icons/nearest-delivery'
import styled from 'styled-components'

export const DashboardPage: React.FC = () => {
  return (
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
        <Forecast title={'Убыток'} Icon={<OutcomeIcon />} display={0 + '₽'} />
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
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: ${({ theme }) => theme.content.bg};
  padding: 1.25em;
  height: 100%;
  flex: 1;
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
