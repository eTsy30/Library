import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'

import { BookPage } from 'pages/Book'
import { MainPage } from 'pages/Main'
import { OfferGreement } from 'pages/Offer-greement/OfferGreement'
import { Registr } from 'pages/Register/Registr'
import { TermsUser } from 'pages/Terms-of-use/Terms-of-use'
import { store } from 'store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path='books/*'>
            <Route path='all' element={<MainPage />} />
            <Route path='*' element={<Navigate to='all' replace={true} />} />
          </Route>
          <Route path='/terms' element={<TermsUser />} />
          <Route path='/offer-greement' element={<OfferGreement />} />
          <Route path='/books/:category/:bookId' element={<BookPage />} />
          <Route path='/books/:category/' element={<MainPage />} />
          <Route path='*' element={<Navigate to='books' replace={true} />} />
          <Route path='/Registr' element={<Registr />} />
        </Routes>
      </HashRouter>
    </Provider>
  </>,
)
