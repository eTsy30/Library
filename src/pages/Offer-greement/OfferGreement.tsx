// import { ModalMenu } from 'components/modal-menu'
import { useEffect, useState } from 'react'

import { Container, Main, Wrapper } from './OfferGreement-style'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header/Header'
import { ModalMenu } from 'components/Modal-menu'
import { NavigationMenu } from 'components/Navigation-menu/Navigation-menu'
import { Terms } from 'components/Terms/Terms'
import { useWidth } from 'hooks/use-width'

export const OfferGreement = () => {
  const weight = useWidth()

  return (
    <>
      <Wrapper>
        <Container>
          <Header
            name='Иван'
            imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13'
          />
          <Main>
            <NavigationMenu />
            <Terms title='Договор оферты' />
          </Main>
        </Container>
        <Footer />
      </Wrapper>
      {weight <= 768 ? <ModalMenu /> : ''}
    </>
  )
}
