'use client'

import { Controller, useForm } from 'react-hook-form'
import { Button, Input } from '@common'
import { useLoginMutation } from '@generated'
import { DevTool } from '@hookform/devtools'
import Link from 'next/link'
import styled from 'styled-components'

interface FormProps {
  identifier: string
  password: string
}

export const LoginPage: React.FC = () => {
  const [login] = useLoginMutation()
  const { control, handleSubmit } = useForm<FormProps>()

  const onLogin = (data: FormProps) => login({ variables: { input: data } })

  return (
    <Form onSubmit={handleSubmit(onLogin)}>
      <Controller
        control={control}
        name="identifier"
        render={({ field: { onChange, onBlur, name } }) => (
          <Input
            name={name}
            type={'email'}
            label="Email"
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, name } }) => (
          <Input
            name={name}
            type="password"
            label="Пароль"
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Button>Войти</Button>
      <Actions>
        <Checkbox>
          <input name="checkbox" type={'checkbox'} />
          <label htmlFor="checkbox">Запомнить меня</label>
        </Checkbox>
        <Link href={'/password-recover'}>Забыли пароль?</Link>
      </Actions>
      {window && <DevTool control={control} />}
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;
`
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`
const Checkbox = styled.fieldset`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  border: none;
  padding: 0;
`
