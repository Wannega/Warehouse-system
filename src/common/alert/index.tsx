import { styled } from 'styled-components'

interface Props {
  text?: string
  failed?: boolean
}

type StyledProps = Pick<Props, 'failed'>

export const Alert: React.FC<Props> = ({ text, failed }) => {
  return (
    <Box failed={failed}>
      <Text>{text}</Text>
    </Box>
  )
}

const Box = styled.div<StyledProps>`
  background-color: ${({ theme, failed }) =>
    failed ? theme.alert.failed.bg : theme.alert.succeded.bg};
  color: ${({ theme, failed }) =>
    failed ? theme.alert.failed.color : theme.alert.succeded.color};
  padding: 10px;
  border-radius: 5px;
`
const Text = styled.p<StyledProps>``
