import {
  AboutDesctop,
  AboutMobile,
  Button,
  Container,
  ContainerImg,
  Description,
  DescriptionWrapper,
  TextAutor,
  Title,
  WrapperImg,
} from './Book-present-style'

import BlockCat from 'assets/img/CatBig.png'

import { About } from 'components/About'
import { SliderImage } from 'components/Slider-image'
import { ICard } from 'types/card'

export const BookPresent = ({ image, title, autor, description }: ICard) => (
  <Container>
    <Description>
      <ContainerImg>
        {/* <WrapperImg>
          {image ? <img data-test-id='slide-big' src={image[0]} alt='caver' /> : <img src={BlockCat} alt='' />}
        </WrapperImg> */}
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
