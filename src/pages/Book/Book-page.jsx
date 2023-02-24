import axios from 'axios'
import { useMemo, useEffect, useState } from 'react'
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
  const [book, setBooks] = useState(null)
  useEffect(() => {
    const fechData = async () => {
      try {
        const { data } = await axios.get('http://localhost:1337/api/' + 'books/' + bookId + '?populate=*', {
          headers: {
            Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
          },
        })
        setBooks(data.data)
        console.log(data.data, book)
      } catch (error) {
        console.log(error)
      }
    }
    fechData()
  }, [])
  console.log(book?.attributes)
  return (
    <Container data-test-id='card'>
      <WrapperHead>
        <Header
          name='Иван'
          imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13'
        />
      </WrapperHead>
      {book ? (
        <>
          <PathComponent categiria={book.attributes.categories.data[0].attributes.name} name={book.attributes.title} />
          <Content>
            <BookPresent
              image={bookInformation.img}
              description={book.attributes.description}
              autor={book.attributes.authors}
              title={book.attributes.title}
            />
            <RaytingWrapper>
              <RaytingTitle>Рейтинг</RaytingTitle>
              <RaytingContainer>
                <StarReiting rating={book.attributes.rating} />
                <span>{book.attributes.ratin}</span>
              </RaytingContainer>
            </RaytingWrapper>
            <BookInformation information={book.attributes} />
            <BookReviews reviews={bookInformation.reviews} />
          </Content>
        </>
      ) : (
        <h1>LOADER</h1>
      )}
      <WrapperHead>
        <Footer />
      </WrapperHead>
    </Container>
  )
}
