import { useState } from 'react'
import styled from 'styled-components'

import { Star } from './Star'

import { Irating } from 'types/rating'

const Wrapper = styled.div`
  display: flex;
`
const STARS = [1, 2, 3, 4, 5]

export const StarReiting = ({ rating }: Irating) => {
  const [ratingStar, setRating] = useState(rating === undefined ? 0 : rating - 1)
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <Wrapper>
      {STARS.map((star, i) => (
        <Star
          key={star}
          isStarColor={(hoverRating || ratingStar) >= i}
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => {
            setHoverRating(0)
          }}
          onClick={() => {
            setRating(i)
          }}
        />
      ))}
    </Wrapper>
  )
}
