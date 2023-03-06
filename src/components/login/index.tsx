'use client'

import { Controller, useForm } from 'react-hook-form'
import { Alert, Button, Input } from '@common'
import { useLoginMutation } from '@generated'
import { useDelayedRedirect } from '@utils'
import Link from 'next/link'
import styled from 'styled-components'

interface FormProps {
  identifier: string
  password: string
}

export const LoginPage: React.FC = () => {
  const [login, { error, called, data, loading }] = useLoginMutation({})
  const [redirect] = useDelayedRedirect()
  const { control, handleSubmit } = useForm<FormProps>()

  const onLogin = async (form: FormProps) => {
    const { errors } = await login({ variables: { input: form } })

    if (!loading && !errors) {
      redirect('/dashboard')
    }
  }

  return (
    <Form onSubmit={handleSubmit(onLogin)}>
      {called && (
        <Alert
          text={
            !!error?.message
              ? 'Произошла ошибка во время отправки запроса. Проверьте правильность введеных вами данных'
              : 'Авторизация пройдена успешно. Через несколько секунд вы будете перенаправлены на главную страницу...'
          }
          failed={!!error?.message || !data}
        />
      )}
      <Controller
        control={control}
        name="identifier"
        render={({ field: { onChange, onBlur, name } }) => (
          <Input
            name={name}
            required
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
            required
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
          <input id="checkbox" name="checkbox" type={'checkbox'} />
          <label htmlFor="checkbox">Запомнить меня</label>
        </Checkbox>
        <Link href={'/password-recover'}>Забыли пароль?</Link>
      </Actions>
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
