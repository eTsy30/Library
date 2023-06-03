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
  UserNameLabel,
} from './Book-reviews-style'

import { Comments } from 'components/Comments/Comments'
import { ErrorFly } from 'components/ErrorFly/ErrorFly'
import { StarReiting } from 'components/Star-reiting'
import { getComments } from 'redux/getComments/getComments'
import { setActiveModalMenu } from 'redux/IsActiveModalMenu/IsActiveModalMenu'
import { useAppDispatch, useAppSelector } from 'store/hook'

export const BookReviews = ({ bookID }: any) => {
  const dispach = useAppDispatch()
  const dataReviews = useAppSelector((state) => {
    return state.getCommentsReduser.comments
  })
  useEffect(() => {
    dispach(getComments(bookID))
  }, [])

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

  const isDisabled = (dataReviews: any) => {
    if (dataReviews.length === 0) return false
    const userId = Number(localStorage.getItem('idUser'))
    const review = dataReviews.find((rev: any) => rev.attributes?.user?.data?.[0]?.id === userId)
    return review ? true : false
  }

  return (
    <Container>
      <ErrorFly />
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
      {dataReviews && <Comments rating={ownRaiting(dataReviews)} bookId={bookID} />}
      {dataReviews.map(
        (review: any, index) =>
          isOpenBook && (
            <ListReviews key={index}>
              {review && (
                <Text>
                  {review?.attributes?.user?.data?.attributes.avatar.data ? (
                    <Avatar
                      src={`${
                        process.env.REACT_APP_API_IMG +
                        review?.attributes?.user?.data?.attributes?.avatar?.data[0]?.attributes?.url
                      }`}
                      alt='Logo'
                    />
                  ) : (
                    <Avatar
                      src='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13'
                      alt='Logo'
                    />
                  )}
                  {review.attributes.user.data.attributes && (
                    <UserNameLabel>
                      {review.attributes.user.data.attributes.firstName +
                        ' ' +
                        review.attributes.user.data.attributes.lastName}
                    </UserNameLabel>
                  )}

                  <span>{review?.attributes?.createdcomment}</span>
                </Text>
              )}
              <StarReiting rating={review.attributes?.rating} />

              <TextDescription>{review?.attributes?.text}</TextDescription>
            </ListReviews>
          ),
      )}
      <Button onClick={OpenWindowRaiting} disabled={isDisabled(dataReviews)} type='button'>
        оценить книгу
      </Button>
    </Container>
  )
}
