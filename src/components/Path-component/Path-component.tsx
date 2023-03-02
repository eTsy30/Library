import { Link } from 'react-router-dom'

import { Container, ImgSlash, Text, Title } from './Path-component-style'

import slach from 'assets/img/Slash.png'
import { LinkNavigation } from 'components/Link/link'

export const PathComponent = ({ categiria, title, path }: any) => (
  <Container>
    <Title>
      <Link to={`/books/${path}`}>
        <Text>{categiria}</Text>
      </Link>
      <ImgSlash src={slach} alt='slach' />
      <Text>{title}</Text>
    </Title>
  </Container>
)
