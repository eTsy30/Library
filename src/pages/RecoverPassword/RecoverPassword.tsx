import React from 'react'

import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { AuhtForm } from 'components/AuthForm/AuhtForm'
import { RecoverPasswordForm } from 'components/Forms/RecoverPassword/RecoverPasswordForm'

export const RecoverPassword = () => {
  return (
    <AuthContainer>
      <AuhtForm
        title={'Восстановление пароля'}
        label={'После сохранения войдите в библиотеку, используя новый пароль'}
        linkText={''}
      >
        <RecoverPasswordForm />
      </AuhtForm>
    </AuthContainer>
  )
}
