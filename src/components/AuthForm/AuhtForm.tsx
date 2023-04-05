import { Container, Title, Linka, Label, FooterContainer, HeaderContainer, FooterWrapper } from './AuthForm-style'

interface IAuth {
  title: string
  subTitle?: string
  label?: string
  linkText?: string
  children?: JSX.Element
  linkTo?: string
}

export const AuhtForm = ({ title, label, linkText, children, linkTo }: IAuth) => {
  return (
    <Container>
      <HeaderContainer>
        <Title>{title}</Title>
      </HeaderContainer>
      {children}
      <FooterContainer>
        <FooterWrapper>
          <Label htmlFor='name'>{label}</Label>
          <Linka to={linkTo ? linkTo : ''}>{linkText}</Linka>
        </FooterWrapper>
      </FooterContainer>
    </Container>
  )
}
