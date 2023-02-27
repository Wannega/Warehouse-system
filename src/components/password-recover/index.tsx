import { Button, Input } from '@common'
import styled from 'styled-components'

export const PasswordRecoverPage: React.FC = () => {
  return (
    <Form>
      <Title>Забыли пароль?</Title>
      <p>
        Введите адрес электронный почты, который был привязан к вашему аккаунту,
        и мы отправим вам письмо с инструкцией по восстановлению пароля
      </p>
      <Input type={'email'} label="Email" />
      <Button>Отправить</Button>
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
