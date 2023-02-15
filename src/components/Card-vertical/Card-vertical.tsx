import React from 'react'

import { Autor, Button, Image, Text, Title, Wrapper } from './Card-vertical-style'

import { StarReiting } from '../Star-reiting'

import BlockCat from 'assets/img/BlockCat.png'

import { ICard } from 'types/card'

export const CardVertical = ({ image, title, autor, raiting }: ICard | any) => (
  <Wrapper data-test-id='card'>
    <React.Fragment>
      {image ? <Image src={image} alt={BlockCat} /> : <Image src={BlockCat} alt='' />}
      {raiting ? <StarReiting rating={raiting} /> : <Text>ещё нет оценок</Text>}
      <Title>{title}</Title>
      <Autor>{autor}</Autor>
    </React.Fragment>
    <Button onClick={() => {}}>Забронировать</Button>
  </Wrapper>
)
