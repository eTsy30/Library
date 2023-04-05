import { useEffect } from 'react'

import {
  Container,
  HeaderContainer,
  Title,
  FooterContainer,
  FooterWrapper,
  Label,
  Linka,
  Panel,
  TitleLabel,
} from './FogotPassword-style'

import { ReactComponent as Arrow } from 'assets/icon/Arrow.svg'
import { AuthContainer } from 'components/AuthContainer/AuthContainer'
import { FogotPasswordForm } from 'components/Forms/FogotPasswordForm/FogotPassword'
import { Spiner } from 'components/Loader-spiner/Spiner'
import { ModalMessage } from 'components/ModalMessage/ModalMessage'
import { setforgotPassword } from 'redux/forgot-password/forgotPassword'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const FogotPassword = () => {
  const dispach = useAppDispatch()

  useEffect(() => {
    dispach(setforgotPassword())
  }, [])

  const statusReqest = useAppSelector((state) => {
    return state.forgotPasswordReduser.status
  })
  const isLoading = useAppSelector((state) => {
    return state.forgotPasswordReduser.isLoading
  })
  return (
    <AuthContainer>
      <>
        {isLoading ? <Spiner /> : ''}

        {!statusReqest && (
          <Container>
            <Panel>
              <Arrow /> <TitleLabel>вход в личный кабинет</TitleLabel>
            </Panel>
            <HeaderContainer>
              <Title>Восстановление пароля</Title>
            </HeaderContainer>
            <FogotPasswordForm />
            <FooterContainer>
              <FooterWrapper>
                <Label>Нет учётной записи?</Label>
                <Linka to={'/Registr'}>регистрация</Linka>
              </FooterWrapper>
            </FooterContainer>
          </Container>
        )}
        {statusReqest && (
          <ModalMessage
            title='Письмо выслано'
            label='Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля'
          />
        )}
      </>
    </AuthContainer>
  )
}
