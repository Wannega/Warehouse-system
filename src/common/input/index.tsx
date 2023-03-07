import { InputHTMLAttributes } from 'react'
import { VisibilityIcon } from '@icons'
import { styled } from 'styled-components'
import { prop } from 'styled-tools'

type HTMLInputProps = InputHTMLAttributes<HTMLButtonElement>

interface Props extends HTMLInputProps {
  variant?: 'primary' | 'outlined'
}

export const Input: React.FC<Props> = ({ ...props }) => {
  const withVisibilityIcon = props.type === 'submit'

  return (
    <Box>
      <InputArea {...props} />
      {withVisibilityIcon && <VisibilityIcon />}
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  padding: 12.5px 10px;
  border: 1px solid lightgray;
  border-radius: 7.5px;

  &:focus-within {
    border-color: ${prop('theme.input.border.focused')};
  }
`
const InputArea = styled.input`
  flex: 1;
  border: none;
  outline: none;
  /* background-color:  */
`
