'use client'

import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

export const Button: React.FC<Props> = ({ ...props }) => {
  return <PressableArea {...props} />
}

const PressableArea = styled.button`
  border: 1px solid ${({ theme }) => theme.button.border};
  background-color: ${({ theme }) => theme.button.bg};
  color: ${({ theme }) => theme.button.color};
  font-size: 1.5ch;
  padding: 7.5px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    border-color: ${({ theme }) => theme.button.hover};
    background-color: ${({ theme }) => theme.button.hover};
  }
`
