import { Controller, useForm } from 'react-hook-form'
import { Alert, Button, Input } from '@common'
import { useForgotPasswordMutation } from '@generated'
import styled from 'styled-components'

interface FormProps {
  email: string
}

export const PasswordRecoverPage: React.FC = () => {
  const [sendInstructions, { error, called }] = useForgotPasswordMutation()
  const { control, handleSubmit } = useForm<FormProps>()

  const onRecover = async (form: FormProps) =>
    await sendInstructions({ variables: { input: form.email } })

  return (
    <Form onSubmit={handleSubmit(onRecover)}>
      {called && (
        <Alert
          text={
            'Если указанный вами email существует, то на него было отправлено письмо с инструкцией по восстановлению пароля'
          }
        />
      )}
      <Title>Забыли пароль?</Title>
      <p>
        Введите адрес электронный почты, который был привязан к вашему аккаунту,
        и мы отправим вам письмо с инструкцией по восстановлению пароля
      </p>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, name } }) => (
          <Input
            name={name}
            required
            type="email"
            label="Email"
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Button type="submit">Отправить</Button>
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
