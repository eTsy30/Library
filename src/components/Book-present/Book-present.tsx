import {
  AboutDesctop,
  AboutMobile,
  Container,
  ContainerImg,
  Description,
  DescriptionWrapper,
  TextAutor,
  Title,
  Button,
} from './Book-present-style'

import { About } from 'components/About'

import { SliderImage } from 'components/Slider-image'
import { useWidth } from 'hooks/use-width'
import { ICard } from 'types/card'

export const BookPresent = ({ image, title, autor, description }: ICard) => {
  return (
    <Container>
      <Description>
        <ContainerImg>
          <SliderImage image={image} />
        </ContainerImg>
        <DescriptionWrapper>
          <Title>{title}</Title>
          <TextAutor>{autor}</TextAutor>
          <Button type='button'>Забронировать</Button>
          <AboutDesctop>
            <About description={description} />
          </AboutDesctop>
        </DescriptionWrapper>
      </Description>
      <AboutMobile>
        <About description={description} />
      </AboutMobile>
    </Container>
  )
}
