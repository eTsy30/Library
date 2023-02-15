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
import { books } from 'test/categorii'

export const MainPage = () => {
  const [direction, setDirection] = useState()
  const handleChange = (diretion: SetStateAction<undefined>) => setDirection(diretion)
  const width = useWidth()
  const a = window.innerWidth - 50
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
              {books.map((card) => (
                <Link to={`/books/${card.category}/${card.id}`} key={card.id}>
                  {direction ? (
                    <CardHorisontal
                      data-test-id='card'
                      autor={card.author}
                      title={card.name}
                      raiting={card.score}
                      image={card.img[0]}
                      year={1111}
                    />
                  ) : (
                    <CardVertical
                      data-test-id='card'
                      autor={card.author}
                      title={card.name}
                      raiting={card.score}
                      image={card.img[0]}
                      year={1111}
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
