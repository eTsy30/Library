import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { GlobalStyle } from './GlobalStyle'

import { Footer } from 'components/footer'
import { store } from 'store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <Footer />
      <h1>hello</h1>
    </Provider>
  </>,
)
