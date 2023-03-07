'use client'

import { Button, Input } from '@common'
import Link from 'next/link'
import { styled } from 'styled-components'
import { prop } from 'styled-tools'

export const SignInPage: React.FC = () => {
  return (
    <Grid>
      <Meta>
        <h1>Welcome back to New-Suite</h1>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum
          sint nulla, rem mollitia ex dolorum voluptate odit soluta inventore
        </Description>
      </Meta>
      <Form>
        <div>
          <Title>Sign in</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <Input type="email" />
        <Input type="password" />
        <Button type="submit">Войти</Button>
        <Recover href={'/password-recover'}>Forgot password?</Recover>
        <Sep />
        <Policy>
          Adding a reCAPTCHA to your website helps to keep it safe from bots,
          and helps users to feel more secure when inputting their information.
        </Policy>
      </Form>
    </Grid>
  )
}

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f9f9f9;
  gap: 12.5em;
`
const Meta = styled.div`
  width: 35vmin;
`
const Form = styled.form`
  background: white;
  border-radius: 15px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 35vmin;
`
const Recover = styled(Link)`
  color: ${prop('theme.auth.recover.color')};
  font-weight: 500;
  text-decoration: none;
`
const Description = styled.p`
  margin-top: 15px;
  color: ${prop('theme.auth.description.color')};
`
const Title = styled.h1`
  margin-bottom: 15px;
`
const Policy = styled.p`
  color: ${prop('theme.auth.description.color')};
  font-size: 10pt;
`

const Sep = styled.hr`
  width: 100%;
`
