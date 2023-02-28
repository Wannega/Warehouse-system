import React from 'react'
import { Section } from '@common'
import styled from 'styled-components'

interface Props {
  title: string
  Icon: JSX.Element
  display?: string
  change?: number
  percent?: number
  negative?: boolean
}

type StyledProps = Pick<Props, 'negative'>

export const Forecast: React.FC<Props> = ({
  title,
  Icon,
  display,
  change,
  percent,
  ...props
}) => {
  return (
    <Section>
      <Head>
        {Icon}
        <Title>{title}</Title>
      </Head>
      <Stat>
        <Amount>{display}</Amount>
      </Stat>
      <Meta>
        <Date>Сегодня</Date>
        <Info>
          <Change {...props}>+{change}₽</Change>
          <Percent {...props}>+{percent}%</Percent>
        </Info>
      </Meta>
    </Section>
  )
}

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const Stat = styled.div`
  margin: 1em 0em;
`
const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5ch;
`

const Title = styled.h1`
  font-size: 2ch;
  font-weight: 500;
`
const Amount = styled.h1`
  font-size: 3ch;
`
const Date = styled.p`
  font-size: 1.5ch;
`
const Change = styled.p<StyledProps>`
  font-size: 1.5ch;
  color: ${({ negative, theme }) =>
    negative ? theme.forecast.negative.color : theme.forecast.positive.color};
`
const Percent = styled.p<StyledProps>`
  font-size: 1.5ch;
  background-color: ${({ negative, theme }) =>
    negative ? theme.forecast.negative.bg : theme.forecast.positive.bg};
  color: ${({ negative, theme }) =>
    negative ? theme.forecast.negative.color : theme.forecast.positive.color};
  border-radius: 25px;
  padding: 5px 10px;
`
