import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { AuhtForm } from 'components/AuthForm/AuhtForm'
import { SingInForm } from 'components/Forms/SingInForm/SingInForm'
import { ModalMessage } from 'components/ModalMessage/ModalMessage'
import { useAppSelector } from 'store/hook'

export const SingIn = () => {
  const error = useAppSelector((state) => state.singInReduser.isError)
  const [statusMessage, setStatusMessage] = useState(error)
  const navigate = useNavigate()
  useEffect(() => {
    setStatusMessage(error)
  }, [error])
  function ChooseToRenderSingIn(data: any): any {
    switch (data) {
      case 'init':
        return (
          <AuthContainer>
            <AuhtForm
              title='Вход в личный кабинет'
              label='Нет учётной записи?'
              linkTo='/Registr'
              linkText={'Регистрация'}
            >
              <SingInForm />
            </AuhtForm>
          </AuthContainer>
        )
      case 'error':
        return (
          <AuthContainer>
            <ModalMessage
              title='Вход не выполнен'
              buttonLabel={'повторить'}
              label={'Что-то пошло не так. Попробуйте ещё раз'}
              click={() => {
                return setStatusMessage('init')
              }}
            />
          </AuthContainer>
        )
      case 'redirect':
        return navigate('/book')
    }
  }
  return ChooseToRenderSingIn(statusMessage)
}
