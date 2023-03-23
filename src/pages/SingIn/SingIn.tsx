import React from 'react'

import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { AuhtForm } from 'components/AuthForm/AuhtForm'
import { SingInForm } from 'components/Forms/SingInForm/SingInForm'

export const SingIn = () => {
  return (
    <AuthContainer>
      <AuhtForm title='Вход в личный кабинет' label='Нет учётной записи?' linkText={'Регистрация'}>
        <SingInForm />
      </AuhtForm>
    </AuthContainer>
  )
}
