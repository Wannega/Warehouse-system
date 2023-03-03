'use client'

import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

enum ButtonType {
  primary = 'primary',
  outlined = 'outlined',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: keyof typeof ButtonType
}

type StyledProps = Pick<Props, 'variant'>

export const Button: React.FC<Props> = ({ variant = 'primary', ...props }) => {
  return <PressableArea variant={variant} {...props} />
}

const PressableArea = styled.button<StyledProps>`
  border: 1px solid ${({ theme }) => theme.button.border};
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.button.bg : 'transparent'};
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.button.color : theme.button.bg};
  font-size: 1.5ch;
  padding: 7.5px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    opacity: 0.7;
  }
`
