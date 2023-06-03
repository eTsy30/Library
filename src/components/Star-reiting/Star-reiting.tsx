import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Star } from './Star'

import { useAppSelector } from 'store/hook'
import { Irating } from 'types/rating'

const Wrapper = styled.div`
  display: flex;
`
const STARS = [1, 2, 3, 4, 5]

export const StarReiting = ({ rating, getRaiting }: Irating) => {
  const [ratingStar, setRating] = useState(rating === undefined ? 0 : rating - 1)
  const [hoverRating, setHoverRating] = useState(0)
  const allComents = useAppSelector((state) => state.getCommentsReduser.raiting)
  useEffect(() => {}, [allComents])

  const handlerChange = (ratingStar: number) => {
    getRaiting(ratingStar + 1)
  }
  return (
    <Wrapper>
      {STARS.map((star, i) => (
        <Star
          key={star}
          isStarColor={(hoverRating || ratingStar) >= i}
          onMouseEnter={() => {
            handlerChange(hoverRating)
            setHoverRating(i)
          }}
          onMouseLeave={() => {
            setHoverRating(0)
          }}
          onClick={() => {
            handlerChange(hoverRating)
            setRating(i)
          }}
        />
      ))}
    </Wrapper>
  )
}
