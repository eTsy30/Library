import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { AuhtForm } from 'components/AuthForm/AuhtForm'

import { UserRegistrForm } from 'components/Forms/UserRegistrForm/UserRegistrForm'
import { Spiner } from 'components/Loader-spiner'
import { ModalMessage } from 'components/ModalMessage/ModalMessage'
import { useAppSelector } from 'store/hook'

export const Registr = () => {
  const error = useAppSelector((state) => state.registrUserReduser.Error)
  const isLoading = useAppSelector((state) => state.registrUserReduser.isLoading)
  const navigate = useNavigate()

  const [statusMessage, setStatusMessage] = useState(error)
  useEffect(() => {
    setStatusMessage(error)
  }, [error])

  function ChooseToRender(data: any): JSX.Element {
    switch (data) {
      case 'good':
        return (
          <ModalMessage
            title='Регистрация успешна'
            buttonLabel={'вход'}
            label={'Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль'}
            click={() => {
              return navigate('/SingIn')
            }}
          />
        )
      case '400':
        return (
          <ModalMessage
            title='Данные не сохранились'
            buttonLabel={'назад к регистрации'}
            label={
              'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.'
            }
            click={() => {
              return setStatusMessage('no')
            }}
          />
        )
      case 'bad':
        return (
          <ModalMessage
            title='Данные не сохранились'
            buttonLabel={'повторить'}
            label={'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз'}
            click={() => {
              return setStatusMessage('no')
            }}
          />
        )
      default:
        return (
          <AuhtForm
            title='Регистрация'
            subTitle='1 шаг из 3'
            label='Есть учётная запись?'
            linkTo='/SingIn'
            linkText={'Вход'}
          >
            <UserRegistrForm />
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
