import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { GlobalStyle } from './GlobalStyle'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Navigation } from 'components/Navigation'
import { store } from 'store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Header
        imgAvatar='https://avatars.mds.yandex.net/i?id=2fd47a896e5c07a593a1521c677d9d73f43c45fa-5870396-images-thumbs&n=13'
        name='IVAN'
      />
      <Navigation />
      <Footer />
      <h1>hello</h1>
    </Provider>
  </>,
)
