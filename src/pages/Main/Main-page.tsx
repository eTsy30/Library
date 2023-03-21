import { SetStateAction, useEffect, useMemo, useState } from 'react'

import { Link } from 'react-router-dom'

import { Container, Content, Main, WarningMessage, Wrapper } from './Main-page-style'

import { Error } from 'components/Alert-error'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header/Header'
import { ListofCard } from 'components/ListofCard'
import { Spiner } from 'components/Loader-spiner'
import { ModalMenu } from 'components/Modal-menu'
import { Navigation } from 'components/Navigation'
import { NavigationMenu } from 'components/Navigation-menu'
import { useWidth } from 'hooks/use-width'
import { getAllBooks } from 'redux/getBook/getBooks'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const MainPage = () => {
  const [direction, setDirection] = useState()
  const handleChange = (diretion: SetStateAction<undefined>) => setDirection(diretion)
  const width = useWidth()
  const [categori, setCategori] = useState<string>('all')
  const dispach = useAppDispatch()
  const { books, isError, isLoading } = useAppSelector((state) => state.getallBookReduser)
  const categories = useAppSelector((state) => state.getCategoriReduser.categories)
  const path = useAppSelector((state) => state.setCategory.categorii)
  const searshValue = useAppSelector((state) => state.setSearchValue.value)

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

  useEffect(() => {
    dispach(getAllBooks())
  }, [dispach])

  return (
    <>
      <Wrapper $isScroll={books ? 'scroll' : 'hidden'}>
        <Container>
          {isError ? <Error /> : ''}
          <Header
            name='Иван'
            imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13'
          />
          <Link to={`/Registr`}> REGISTR</Link>
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
        </Container>
        <Footer />
      </Wrapper>
      {width < 768 ? <ModalMenu /> : ''}
    </>
  )
}
