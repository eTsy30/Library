import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { A11y, Pagination, type Swiper as EffectCoverflow } from 'swiper'
import { FreeMode, Navigation, Thumbs } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'

import BlockCat from 'assets/img/BlockCat.png'
import './style.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { useWidth } from 'hooks/use-width'
import { ICard } from 'types/card'

const BigImg = styled.img`
  width: 100%;
  max-width: 445px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    min-width: 136px;
    border-radius: 3px;
  }
  @media screen and (max-width: 480px) {
    max-width: 188px;
    width: 100%;
    border-radius: 10px;
  }
`

export const SliderImage = ({ image }: ICard) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null)
  const weight = useWidth()

  return image!.length > 0 ? (
    <React.Fragment>
      <Swiper
        tag='section'
        pagination={{ clickable: true }}
        initialSlide={1}
        centeredSlides={true}
        data-test-id='slide-big'
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, A11y]}
        className='slider__second  mySwiper'
      >
        {image &&
          image.map((img: string | undefined) => (
            <SwiperSlide key={uuidv4()}>
              <BigImg alt='d' src={img} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Thumbs, Pagination]}
        className='slider__main'
      >
        {image &&
          image.map((img: string | undefined) => (
            <SwiperSlide key={uuidv4()} data-test-id='slide-mini'>
              <img alt='d' className='slider__image' src={img} />
            </SwiperSlide>
          ))}
      </Swiper>
    </React.Fragment>
  ) : (
    <React.Fragment>
      {' '}
      {image!.length > 0 ? (
        <img src={image![0]} alt='book img' className='slider__wrapper-second' />
      ) : (
        <img src={BlockCat} alt='no book img' className='slider__wrapper-second' />
      )}
    </React.Fragment>
  )
}
