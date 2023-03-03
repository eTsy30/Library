import React from 'react'

import {
  Autor,
  Button,
  ButtonBox,
  Container,
  Image,
  Text,
  TextContainer,
  Title,
  Wrapper,
} from './Card-horisontal-style'

import { StarReiting } from '../Star-reiting'

import BlockCat from 'assets/img/BlockCat.png'

import { ICard } from 'types/card'

export const CardHorisontal = ({ image, title, autor, raiting, year }: ICard | any) => (
  <Wrapper data-test-id='card'>
    <Container>
      {image ? <Image src={image} alt='' /> : <Image src={BlockCat} alt='' />}
      <TextContainer>
        <Title>{title}</Title>
        <Autor>{autor}</Autor>
        <Autor>{year}</Autor>
        <ButtonBox>
          {raiting ? <StarReiting rating={raiting} /> : <Text>ещё нет оценок</Text>}
          <Button onClick={() => {}}>Забронировать</Button>
        </ButtonBox>
      </TextContainer>
    </Container>
  </Wrapper>
)
