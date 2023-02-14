import { Link } from 'react-router-dom'

import { Avatar, Burger, Close, Container, ContainerUser, Image, NameUser, Title, Wrapper } from './Header-style'

import Logo from 'assets/img/LogoP.png'

import { setBurgerActive } from 'redux/burger-menu/burger-active'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { IUser } from 'types/user'

export const Header = ({ name, imgAvatar }: IUser) => {
  const dispatch = useAppDispatch()
  const burgerActite = useAppSelector((state) => state.isActiveBurger.value)

  return (
    <Wrapper>
      {/* <Link to='/'> */}
      <Image src={Logo} alt='Logo' />
      {burgerActite ? (
        <Burger data-test-id='button-burger' onClick={() => dispatch(setBurgerActive(!burgerActite))} />
      ) : (
        <Close data-test-id='button-burger' onClick={() => dispatch(setBurgerActive(!burgerActite))} />
      )}
      {/* </Link> */}
      <Container>
        <Title>Библиотека</Title>
        <ContainerUser>
          <NameUser> Привет, {name}! </NameUser>
          <Avatar src={imgAvatar} alt='no' />
        </ContainerUser>
      </Container>
    </Wrapper>
  )
}
