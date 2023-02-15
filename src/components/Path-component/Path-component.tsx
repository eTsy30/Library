import { Container, ImgSlash, Text, Title } from './Path-component-style'

import slach from 'assets/img/Slash.png'

export const PathComponent = () => (
  <Container>
    <Title>
      <Text>Бизнес книги</Text>
      <ImgSlash src={slach} alt='slach' />
      <Text>Грокаем алгоритмы Иллюстрированное пособие для программистов и любопытствующих</Text>
    </Title>
  </Container>
)
