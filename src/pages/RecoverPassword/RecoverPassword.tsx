import React from 'react'

import { useNavigate } from 'react-router-dom'

import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { AuhtForm } from 'components/AuthForm/AuhtForm'
import { RecoverPasswordForm } from 'components/Forms/RecoverPassword/RecoverPasswordForm'
import { Spiner } from 'components/Loader-spiner'
import { ModalMessage } from 'components/ModalMessage/ModalMessage'
import { setrevertPassword } from 'redux/revertPassword/revertPassword'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const RecoverPassword = () => {
  const dispach = useAppDispatch()
  const navegate = useNavigate()
  const isLoading = useAppSelector((state) => {
    return state.revertPasswordReduser.isLoading
  })
  const statusMessage = useAppSelector((state) => {
    return state.revertPasswordReduser.status
  })

  function ChooseToRender(data: any): JSX.Element {
    switch (data) {
      case 'bad':
        return (
          <ModalMessage
            title={'Данные не сохранились'}
            label={'Что-то пошло не так. Попробуйте ещё раз'}
            buttonLabel='повторить'
            click={() => {
              dispach(setrevertPassword())
              navegate('/RevertPassword')
            }}
          />
        )
      case 'good':
        return (
          <ModalMessage
            title={'Новые данные сохранены'}
            label={'Зайдите в личный кабинет, используя свои логин и новый пароль'}
            buttonLabel='вход'
            click={() => navegate('/Registr')}
          />
        )
      default:
        return (
          <AuhtForm
            title={'Восстановление пароля'}
            label={'После сохранения войдите в библиотеку, используя новый пароль'}
            linkText={''}
          >
            <RecoverPasswordForm />
          </AuhtForm>
        )
    }
  }

  return (
    <AuthContainer>
      <>
        {ChooseToRender(statusMessage)}
        {isLoading ? <Spiner /> : ''}
      </>
    </AuthContainer>
  )
}
