import { Button, Input } from '@common'
import styled from 'styled-components'

export const PasswordResetPage: React.FC = () => {
  return (
    <Form>
      <Title>Восстановление пароля</Title>
      <p>
        Придумайте сложный пароль, который вы не используете на других
        веб-сайтах
      </p>
      <Input type={'password'} label="Пароль" />
      <Input type={'password'} label="Подтверждение пароля" />
      <Button>Установить пароль</Button>
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
