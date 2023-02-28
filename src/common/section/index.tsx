import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}

export const Section: React.FC<Props> = ({ children }) => {
  return <Box>{children}</Box>
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.section.bg};
  border-radius: 15px;
  padding: 25px;
`
