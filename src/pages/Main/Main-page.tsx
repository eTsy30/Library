import axios from 'axios'
import { SetStateAction, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, ListCard, Main, Wrapper } from './Main-page-style'

import { CardHorisontal } from 'components/Card-horisontal'
import { CardVertical } from 'components/Card-vertical/Card-vertical'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header/Header'
import { ModalMenu } from 'components/Modal-menu'
import { Navigation } from 'components/Navigation'

import { NavigationMenu } from 'components/Navigation-menu'
import { useWidth } from 'hooks/use-width'

export const MainPage = () => {
  const [direction, setDirection] = useState()
  const handleChange = (diretion: SetStateAction<undefined>) => setDirection(diretion)
  const width = useWidth()
  const [books, setBooks] = useState([])
  useEffect(() => {
    const fechData = async () => {
      try {
        const { data } = await axios.get('http://localhost:1337/api/' + 'books?populate=*', {
          headers: {
            Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
          },
        })
        setBooks(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fechData()
  })
  return (
    <Container>
      <Wrapper>
        <Header
          name='Иван'
          imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13'
        />
        <Main>
          {window.innerWidth >= 768 ? <NavigationMenu /> : ''}
          <Content>
            <Navigation onChange={handleChange} />
            <ListCard>
              {books.map((card: any) => (
                <Link to={`/books/${card.attributes.categories.data[0].attributes.path}/${card.id}`} key={card.id}>
                  {direction ? (
                    <CardHorisontal
                      autor={card.attributes.authors}
                      title={card.attributes.title}
                      raiting={card.attributes.rating}
                      image={'http://localhost:1337' + card.attributes.image.data[0].attributes.url}
                      year={card.attributes.issueYear}
                    />
                  ) : (
                    <CardVertical
                      autor={card.attributes.authors}
                      title={card.attributes.title}
                      raiting={card.attributes.rating}
                      image={'http://localhost:1337' + card.attributes.image.data[0].attributes.url}
                      year={card.attributes.issueYear}
                    />
                  )}
                </Link>
              ))}
            </ListCard>
          </Content>
        </Main>
        <Footer />
      </Wrapper>
      {width < 768 ? <ModalMenu /> : ''}
    </Container>
  )
}
