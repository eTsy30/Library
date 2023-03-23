import { Container, Title, Linka, Label, FooterContainer, HeaderContainer, FooterWrapper } from './AuthForm-style'

interface IAuth {
  title: string
  subTitle?: string
  label: string
  linkText: string
  children: JSX.Element
}

export const AuhtForm = ({ title, label, linkText, children }: IAuth) => {
  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
      </HeaderContainer>
      {children}
      <FooterContainer>
        <FooterWrapper>
          <Label htmlFor='name'>{label}</Label>
          <Linka to={''}>{linkText}</Linka>
        </FooterWrapper>
      </FooterContainer>
    </Container>
  )
}
