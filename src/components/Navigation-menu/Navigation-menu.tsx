import axios from 'axios'

import { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { env } from 'process'

import { LiText, Navigate, SpanText, StrokeButton, UlLink, UlTitle, TitleWrapper } from './Navigation-meny-style'

import { LinkNavigation } from 'components/Link/link'

import { useActivePathname } from 'hooks/use-active-pathname'
import { setBurgerActive } from 'redux/burger-menu/burger-active'
import { setActiveBookMenu } from 'redux/IsActiveBookMenu/IsActiveBookMenu'
import { useAppDispatch, useAppSelector } from 'store/hook'
// import { links } from 'test/categorii'

type Props = {
  children?: JSX.Element
}
export const NavigationMenu = ({ children }: Props) => {
  const isActive = useActivePathname('/books')
  const dispatch = useAppDispatch()
  const menuActite = useAppSelector((state) => state.isActiveBurger.value)
  const menuBook = useAppSelector((state) => state.isActiveBookMenu.value)
  const [links, setLink] = useState([])
  useEffect(() => {
    const fechData = async () => {
      try {
        const { data } = await axios.get('http://localhost:1337/api/' + 'categories', {
          headers: {
            Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
          },
        })
        setLink(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fechData()
  })

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
        <LinkNavigation to={`/books/`}>Все книги</LinkNavigation>
        {links.map((item: any) => (
          <LiText key={uuidv4()}>
            <LinkNavigation to={`/books/${item.attributes.path}`}>
              {item.attributes.name}
              <SpanText>{10}</SpanText>
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
