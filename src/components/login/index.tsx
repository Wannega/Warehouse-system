import { Button, Input } from '@common'
import Link from 'next/link'
import styled from 'styled-components'

export const LoginPage: React.FC = () => {
  return (
    <Form>
      <Input type={'email'} label="Email" />
      <Input type={'password'} label="Пароль" />
      <Button>Войти</Button>
      <Actions>
        <Checkbox>
          <input name="checkbox" type={'checkbox'} />
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
