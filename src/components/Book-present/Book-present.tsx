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
import { setActiveErrorFly } from 'redux/IsActiveErrorFly/IsActiveErrorFly'
import { useAppDispatch } from 'store/hook'
import { ICard } from 'types/card'

export const BookPresent = ({ image, title, autor, description }: ICard) => {
  const dispach = useAppDispatch()
  return (
    <Container>
      <Description>
        <ContainerImg>
          <SliderImage image={image} />
        </ContainerImg>
        <DescriptionWrapper>
          <Title>{title}</Title>
          <TextAutor>{autor}</TextAutor>
          <Button
            type='button'
            onClick={() =>
              dispach(
                setActiveErrorFly({
                  successStatus: false,
                  openError: true,
                  textMsg: 'Спасибо, что нашли время оценить книгу!',
                }),
              )
            }
          >
            Забронировать
          </Button>
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
