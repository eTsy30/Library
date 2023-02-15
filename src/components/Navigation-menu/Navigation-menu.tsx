import { useState } from 'react'

import { LiText, Navigate, SpanText, StrokeButton, UlLink, UlTitle, TitleWrapper } from './Navigation-meny-style'

import { LinkNavigation } from 'components/Link/link'

import { useActivePathname } from 'hooks/use-active-pathname'
import { setBurgerActive } from 'redux/burger-menu/burger-active'
import { setActiveBookMenu } from 'redux/IsActiveBookMenu/IsActiveBookMenu'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { links } from 'test/categorii'

type Props = {
  children?: JSX.Element
}
export const NavigationMenu = ({ children }: Props) => {
  const isActive = useActivePathname('/books')
  const dispatch = useAppDispatch()
  const menuActite = useAppSelector((state) => state.isActiveBurger.value)
  const menuBook = useAppSelector((state) => state.isActiveBookMenu.value)

  return (
    <Navigate>
      <UlLink data-test-id='navigation-showcase'>
        <TitleWrapper $isOpen={menuBook}>
          <LinkNavigation istitle={true} to='/books'>
            Витрина книг
          </LinkNavigation>
          <StrokeButton
            $isActive={isActive}
            data-test-id='burger-navigation'
            $isOpen={menuBook}
            onClick={() => {
              dispatch(setActiveBookMenu(!menuBook))
            }}
          />
        </TitleWrapper>
      </UlLink>

      <UlTitle $isOpenBook={menuBook}>
        {links.map((item) => (
          <LiText key={item.id}>
            <LinkNavigation to={`/books/${item.category}`}>
              {item.name}
              <SpanText>{item.count}</SpanText>
            </LinkNavigation>
          </LiText>
        ))}
      </UlTitle>

      <UlLink>
        <TitleWrapper
          onClick={() => {
            dispatch(setActiveBookMenu(false))
            dispatch(setBurgerActive(!menuActite))
          }}
        >
          <LinkNavigation data-test-id='navigation-terms' istitle={true} to='/terms'>
            Правила пользования
          </LinkNavigation>
        </TitleWrapper>
        <TitleWrapper
          onClick={() => {
            dispatch(setActiveBookMenu(false))
            dispatch(setBurgerActive(!menuActite))
          }}
        >
          <LinkNavigation data-test-id='navigation-contract' istitle={true} to='/offer-greement'>
            Договор оферты
          </LinkNavigation>
        </TitleWrapper>
      </UlLink>
      {children}
    </Navigate>
  )
}
