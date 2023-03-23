import React from 'react'
import styled from 'styled-components'

import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { AuhtForm } from 'components/AuthForm/AuhtForm'
import { UserRegistrForm } from 'components/Forms/UserRegistrForm/UserRegistrForm'
const Wrapper = styled.div`
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Registr = () => {
  return (
    <AuthContainer>
      <AuhtForm title='Регистрация' subTitle='1 шаг из 3' label='Есть учётная запись?' linkText={'Вход'}>
        <UserRegistrForm />
      </AuhtForm>
    </AuthContainer>
  )
}
