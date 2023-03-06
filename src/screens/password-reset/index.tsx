'use client'

import { Controller, useForm } from 'react-hook-form'
import { Button, Input } from '@common'
import { useResetPasswordMutation } from '@generated'
import { useDelayedRedirect } from '@utils'
import { useSearchParams } from 'next/navigation'
import styled from 'styled-components'

interface FormProps {
  password: string
  passwordConfirmation: string
}

export const PasswordResetPage: React.FC = () => {
  const [resetPassword] = useResetPasswordMutation()
  const [redirect] = useDelayedRedirect()
  const { control, handleSubmit } = useForm<FormProps>()
  const query = useSearchParams()

  const onReset = async (form: FormProps) => {
    const { errors } = await resetPassword({
      variables: {
        ...form,
        code: query.get('code') ?? '',
      },
    })

    if (!errors) {
      redirect('/dashboard')
    }
  }

  return (
    <Form onSubmit={handleSubmit(onReset)}>
      <Title>Восстановление пароля</Title>
      <p>
        Придумайте сложный пароль, который вы не используете на других
        веб-сайтах
      </p>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, name } }) => (
          <Input
            name={name}
            required
            onChange={onChange}
            onBlur={onBlur}
            type={'password'}
            label="Пароль"
          />
        )}
      />
      <Controller
        control={control}
        name="passwordConfirmation"
        render={({ field: { onChange, onBlur, name } }) => (
          <Input
            name={name}
            required
            onChange={onChange}
            onBlur={onBlur}
            type={'password'}
            label="Подтверждение пароля"
          />
        )}
      />
      <Button type="submit">Установить пароль</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 3.25ch;
  margin: 0;
  padding: 0;
`
