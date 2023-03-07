import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends HTMLButtonProps {
  variant?: 'primary' | 'outlined'
}

type StyledProps = Pick<Props, 'variant'>

export const Button: React.FC<Props> = ({ variant = 'primary', ...props }) => {
  return <Pressable variant={variant} {...props} />
}

const Pressable = styled.button<StyledProps>`
  background-color: ${ifProp(
    { variant: 'primary' },
    prop('theme.button.bg', ''),
    'transparent',
  )};
  font-size: 12pt;
  border: ${prop('theme.button.border')};
  padding: 12.5px 10px;
  border-radius: 7.5px;
  color: white;
  cursor: pointer;
`
