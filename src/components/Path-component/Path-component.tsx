import { Container, ImgSlash, Text, Title } from './Path-component-style'

import slach from 'assets/img/Slash.png'

export const PathComponent = ({ categiria, name }: any) => (
  <Container>
    <Title>
      <Text>{categiria}</Text>
      <ImgSlash src={slach} alt='slach' />
      <Text>{name}</Text>
    </Title>
  </Container>
)
