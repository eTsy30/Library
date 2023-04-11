import axios from 'axios'
import { SetStateAction, useEffect, useMemo, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Container, Content, Main, WarningMessage, Wrapper } from './Main-page-style'

import { Error } from 'components/Alert-error'
import { Comments } from 'components/Comments/Comments'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { ListofCard } from 'components/ListofCard'
import { Spiner } from 'components/Loader-spiner'
import { ModalMenu } from 'components/Modal-menu'
import { Navigation } from 'components/Navigation'
import { NavigationMenu } from 'components/Navigation-menu'
import { PopUpMenu } from 'components/popUpMenu/PopUpMenu'
import { useWidth } from 'hooks/use-width'
import { getAllBooks } from 'redux/getBook/getBooks'
import { getComments } from 'redux/getComments/getComments'
import { setActiveModalMenu } from 'redux/IsActiveModalMenu/IsActiveModalMenu'
import { commetnPost } from 'redux/postComments/postComments'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const MainPage = () => {
  const isActive = useAppSelector((state) => state.IsActiveModalMenuReduser.value)

  const [direction, setDirection] = useState()
  const handleChange = (diretion: SetStateAction<undefined>) => setDirection(diretion)
  const width = useWidth()
  const [categori, setCategori] = useState<string>('all')
  const dispach = useAppDispatch()
  const { books, isError, isLoading } = useAppSelector((state) => state.getallBookReduser)
  const categories = useAppSelector((state) => state.getCategoriReduser.categories)
  const path = useAppSelector((state) => state.setCategory.categorii)
  const searshValue = useAppSelector((state) => state.setSearchValue.value)
  const userSingIn = localStorage.getItem('userSingIn') ? true : false
  const popUp = useAppSelector((state) => state.isActivePopUpMenuReduser.isActiveBurger)
  useEffect(() => (path === '' ? setCategori('all') : setCategori(path)), [path])

  function getFilteredBooks(books: any, id: any) {
    return books.filter((el: any) => el.attributes.categories.data.find((s: { id: number }) => s.id === id))
  }

  const bookObj: any = useMemo(() => {
    const defaultObj: { [index: string]: any } = { all: books }
    return categories.reduce((accum, element: any) => {
      const list = getFilteredBooks(books, element.id)
      return { ...accum, [element?.attributes?.path]: list }
    }, defaultObj)
  }, [books])

  const bookArr = useMemo(() => {
    const list = bookObj[categori]
    if (true) {
      return list
    }
  }, [searshValue, bookObj, categori])
  const navigate = useNavigate()
  useEffect(() => {
    dispach(getAllBooks())
  }, [dispach])

  if (!userSingIn) {
    navigate('/SingIn')
  }

  const dadacom = {
    book: '2',
    createdcomment: '2023-03-30',
    rating: '5',
    text: ',,,,,mmkm',
    user: '19',
  }

  return (
    <>
      <Wrapper $isScroll={books ? 'scroll' : 'hidden'}>
        <Container>
          {isError ? <Error /> : ''}
          <button onClick={() => dispach(commetnPost(dadacom))}>SeND</button>
          <Header imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13' />
          {popUp && <PopUpMenu />}
          <button onClick={() => dispach(setActiveModalMenu(!isActive))}>modal</button>
          <button onClick={() => dispach(getComments('1'))}>categorii</button>
          <Main>
            {window.innerWidth >= 768 ? <NavigationMenu /> : ''}
            <Content>
              <Navigation onChange={handleChange} />
              {isLoading ? <Spiner /> : ''}
              {books.length > 0 ? (
                <ListofCard bookArr={bookArr} direction={direction} />
              ) : (
                <WarningMessage>По вашеиму запросу ничего не найдено</WarningMessage>
              )}
            </Content>
          </Main>
          )
        </Container>
        <Footer />
      </Wrapper>
      {width < 768 ? <ModalMenu /> : ''}

      <Comments rating={4} />
    </>
  )
}
