import { useEffect, useState } from 'react'

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

import { Comments } from 'components/Comments/Comments'
import { StarReiting } from 'components/Star-reiting'
import { getComments } from 'redux/getComments/getComments'
import { setActiveModalMenu } from 'redux/IsActiveModalMenu/IsActiveModalMenu'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const BookReviews = ({ bookID }: any) => {
  const dispach = useAppDispatch()

  useEffect(() => {
    dispach(getComments(bookID))
  }, [])

  const dataReviews = useAppSelector((state) => {
    return state.getCommentsReduser.comments
  })
  const isActive = useAppSelector((state) => state.IsActiveModalMenuReduser.value)
  const [isOpenBook, setIsOpenBook] = useState(false)
  const OpenWindowRaiting = () => {
    dispach(setActiveModalMenu(!isActive))
    window.scrollTo(0, 0)
  }

  const ownRaiting = (dataReviews: any[]) => {
    const summRaiting = dataReviews.reduce((prev: any, curr: any) => {
      return prev + curr.attributes.rating
    }, 0)
    return summRaiting / dataReviews.length
  }
  return (
    <Container>
      <HeadWrapper>
        <h3>
          Отзывы <span>{dataReviews.length}</span>
        </h3>
        <StrokeButton
          data-test-id='button-hide-reviews'
          $isActive={isOpenBook}
          onClick={() => {
            setIsOpenBook(!isOpenBook)
          }}
        />
      </HeadWrapper>
      <Comments rating={ownRaiting(dataReviews)} bookId={bookID} />
      {dataReviews.map(
        (review: any, index: any) =>
          isOpenBook && (
            <>
              <ListReviews key={uuidv4()}>
                <li>
                  <Text>
                    <Avatar
                      src={`${process.env.REACT_APP_API_IMG}${review.attributes.user.data[0].attributes.avatar.data[0].attributes.url}`}
                      alt='Logo'
                    />
                    {review.attributes.user.data[0].attributes.firstName +
                      ' ' +
                      review.attributes.user.data[0].attributes.lastName}
                    <span>{review.attributes?.createdcomment}</span>
                  </Text>
                  <StarReiting rating={review.attributes?.rating} />
                  {/* <>{setRaiting(review.attributes?.rating)}</> */}
                  <TextDescription>{review?.attributes?.text}</TextDescription>
                </li>
              </ListReviews>
            </>
          ),
      )}
      <Button onClick={OpenWindowRaiting} type='button'>
        оценить книгу
      </Button>
    </Container>
  )
}
