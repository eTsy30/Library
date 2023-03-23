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

export const FogotPassword = () => {
  return (
    <AuthContainer>
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
            <Linka to={''}>регистрация</Linka>
          </FooterWrapper>
        </FooterContainer>
      </Container>
    </AuthContainer>
  )
}
