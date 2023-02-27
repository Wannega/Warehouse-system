'use client'

import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input: React.FC<Props> = ({ label, ...props }) => {
  return (
    <Fieldset>
      <Label>{label}</Label>
      <InputArea {...props} />
    </Fieldset>
  )
}

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  color: rgb(78, 78, 78);
  padding: 0px;

  &:focus-within {
    color: $primary;
  }
`

const Label = styled.label`
  margin-bottom: 2.5px;
`
const InputArea = styled.input`
  outline: none;
  border-radius: 2.5px;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  border-width: 0.5px;
  height: 27.5px;

  &:focus {
    border-style: solid;
    border-color: $primary;
  }
`
