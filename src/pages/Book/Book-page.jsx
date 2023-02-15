import { useMemo } from 'react'

import { useParams } from 'react-router-dom'

import { Container, Content, RaytingContainer, RaytingTitle, RaytingWrapper, WrapperHead } from './Book-page-style'

import { BookInformation } from 'components/Book-information/Book-information'
import { BookPresent } from 'components/Book-present/Book-present'
import { BookReviews } from 'components/Book-reviews/Book-reviews'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { PathComponent } from 'components/Path-component/Path-component'

import { StarReiting } from 'components/Star-reiting'
import { books } from 'test/categorii'

export const BookPage = () => {
  const { bookId } = useParams()
  const bookInformation = useMemo(() => books.find((book) => book.id === bookId), [bookId])

  return (
    <Container data-test-id='card'>
      <WrapperHead>
        <Header
          name='Иван'
          imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13'
        />
      </WrapperHead>
      <PathComponent />
      <Content>
        <BookPresent
          image={bookInformation.img}
          description={bookInformation.description}
          autor={bookInformation.author}
          title={bookInformation.name}
        />
        <RaytingWrapper>
          <RaytingTitle>Рейтинг</RaytingTitle>
          <RaytingContainer>
            <div>
              <StarReiting rating={bookInformation.score} />
            </div>
            <span>{bookInformation.score}</span>
          </RaytingContainer>
        </RaytingWrapper>
        <BookInformation />
        <BookReviews reviews={bookInformation.reviews} />
      </Content>
      <WrapperHead>
        <Footer />
      </WrapperHead>
    </Container>
  )
}
