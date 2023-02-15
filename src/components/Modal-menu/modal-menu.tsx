import React, { useEffect } from 'react'

import { Container, Wrapper } from './modal-menu-style'

import { LinkNavigation } from 'components/Link/link'
import { NavigationMenu } from 'components/Navigation-menu'
import { UlLink } from 'components/Navigation-menu/Navigation-meny-style'

import { setBurgerActive } from 'redux/burger-menu/burger-active'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const ModalMenu = () => {
  const menuActite = useAppSelector((state) => state.isActiveBurger.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    document.body.style.overflow = menuActite === true ? 'scroll' : 'hidden'
  }, [menuActite])
  if (menuActite) return null

  return (
    <Container
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return
        }
        dispatch(setBurgerActive(!menuActite))
      }}
    >
      <Wrapper>
        <NavigationMenu>
          <React.Fragment>
            <hr />
            <UlLink>
              <li>
                <LinkNavigation istitle={true} to='/profile'>
                  Профиль
                </LinkNavigation>
              </li>
              <li>
                <LinkNavigation istitle={true} to='/exit'>
                  Выход
                </LinkNavigation>
              </li>
            </UlLink>
          </React.Fragment>
        </NavigationMenu>
      </Wrapper>
    </Container>
  )
}
