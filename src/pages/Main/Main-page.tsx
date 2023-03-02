import axios from 'axios'
import { SetStateAction, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, ListCard, Main, Wrapper, WarningMessage } from './Main-page-style'

import { Error } from 'components/Alert-error'
import { CardHorisontal } from 'components/Card-horisontal'
import { CardVertical } from 'components/Card-vertical/Card-vertical'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header/Header'
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
  const { books, isError } = useAppSelector((state) => state.getallBookReduser)
  const categories = useAppSelector((state) => state.getCategoriReduser.categories)
  const path = useAppSelector((state) => state.setCategory.categorii)
  console.log(path)

  useMemo(() => (path === '' ? setCategori('all') : setCategori(path)), [path])
  const bookObj: { [index: string]: any } = {}
  bookObj.all = books
  categories.forEach((element: any, index: number) => {
    bookObj[element?.attributes?.path] = books.filter((el: any) =>
      el.attributes.categories.data.find((s: { id: number }) => s.id === Number(`${element.id}`)),
    )
  })
  useEffect(() => {
    dispach(getAllBooks())
  }, [dispach])

  document.body.style.overflow = books ? 'scroll' : 'hidden'

  return (
    <>
      <Wrapper>
        <Container>
          {isError ? <Error /> : ''}
          <Header
            name='Иван'
            imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13'
          />
          <Main>
            {window.innerWidth >= 768 ? <NavigationMenu /> : ''}
            <Content>
              <Navigation onChange={handleChange} />

              {books.length > 0 ? (
                <ListCard>
                  {bookObj[`${categori}`].length >= 1 ? (
                    bookObj[`${categori}`].map((card: any) => {
                      return (
                        <Link
                          to={`/books/${card.attributes.categories?.data[0]?.attributes.path}/${card.id}`}
                          key={card.id}
                        >
                          {direction ? (
                            <CardHorisontal
                              autor={card.attributes.authors}
                              title={card.attributes.title}
                              raiting={card.attributes.rating}
                              image={`https://picsum.photos/320/240?v1`}
                              year={card.attributes.issueYear}
                            />
                          ) : (
                            <CardVertical
                              autor={card.attributes.authors}
                              title={card.attributes.title}
                              raiting={card.attributes?.rating}
                              image={`https://picsum.photos/320/240?v1`}
                              year={card.attributes.issueYear}
                            />
                          )}
                        </Link>
                      )
                    })
                  ) : (
                    <WarningMessage>Нет книг в данной категории</WarningMessage>
                  )}
                </ListCard>
              ) : (
                <Spiner />
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
