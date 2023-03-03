import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { A11y, type Swiper as EffectCoverflow } from 'swiper'
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper'
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
import 'swiper/css/pagination'

import { ICard } from 'types/card'

const BigImg = styled.img`
  width: 100%;
  max-width: 445px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    min-width: 136px;
    min-height: 198px;
    border-radius: 3px;
  }
  @media screen and (max-width: 320px) {
    max-width: 188px;
    width: 100%;
    border-radius: 10px;
  }
`

export const SliderImage = ({ image }: ICard) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null)

  return image!.length > 0 ? (
    <div className='qwe'>
      <Swiper
        tag='section'
        initialSlide={1}
        centeredSlides={true}
        data-test-id='slide-big'
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Pagination, Thumbs, A11y]}
        className='mySwiper2 slider__second'
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
        modules={[FreeMode, Thumbs, Pagination]}
        pagination={{
          clickable: true,
        }}
        className='mySwiper slider__main'
      >
        {image &&
          image.map((img: string | undefined) => (
            <SwiperSlide key={uuidv4()} data-test-id='slide-mini'>
              <img alt='d' className='slider__image' src={img} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  ) : (
    <React.Fragment>
      {' '}
      {image!.length > 0 ? (
        <img src={image![0]} alt='book img' className='slider__wrapper-second' />
      ) : (
        <img src={BlockCat} alt='no book img' className='slider__wrapper-second' />
      )}
      <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
        {image &&
          image.map((img: string | undefined) => (
            <SwiperSlide key={uuidv4()} data-test-id='slide-mini'>
              <img alt='d' className='slider__image' src={img} />
            </SwiperSlide>
          ))}
      </Swiper>
    </React.Fragment>
  )
}
