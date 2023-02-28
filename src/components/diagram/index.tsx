import { Section } from '@common'
import { ActionsIcon, FilterIcon } from '@icons'
import styled from 'styled-components'

interface Props {
  title?: string
  onFilterPress?: () => void
  onMorePress?: () => void
}

export const Diagram: React.FC<Props> = ({
  title,
  onFilterPress,
  onMorePress,
}) => {
  return (
    <Section>
      <Head>
        <Title>{title}</Title>
        <Actions>
          <Action onClick={onFilterPress}>
            <FilterIcon />
          </Action>
          <Action onClick={onMorePress}>
            <ActionsIcon />
          </Action>
        </Actions>
      </Head>
    </Section>
  )
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`
const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`
const Action = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const Title = styled.h1`
  font-size: 2ch;
  font-weight: 500;
`
