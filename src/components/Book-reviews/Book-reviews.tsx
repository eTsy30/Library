import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import {
  Avatar,
  Button,
  Container,
  HeadWrapper,
  ListReviews,
  StrokeButton,
  Text,
  TextDescription,
} from './Book-reviews-style'

import { StarReiting } from 'components/Star-reiting'

export const BookReviews = ({ reviews }: any) => {
  const [isOpenBook, setIsOpenBook] = useState(false)

  return (
    <Container>
      <HeadWrapper>
        <h3>
          Отзывы <span>{reviews.length}</span>
        </h3>
        <StrokeButton
          data-test-id='button-hide-reviews'
          $isActive={isOpenBook}
          onClick={() => {
            setIsOpenBook(!isOpenBook)
          }}
        />
      </HeadWrapper>
      {reviews.map(
        (review: any, index: any) =>
          isOpenBook && (
            <ListReviews key={uuidv4()}>
              <li>
                <Text>
                  <Avatar src={review.avatar} alt='Logo' />
                  {review.username}
                  <span>{review.date}</span>
                </Text>
                <StarReiting rating={review.score} />
                <TextDescription>{review?.message}</TextDescription>
              </li>
            </ListReviews>
          ),
      )}
      ;
      <Button data-test-id='button-rating' type='button'>
        оценить книгу
      </Button>
    </Container>
  )
}
