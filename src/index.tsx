import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'

// import { Footer } from 'components/Footer'
// import { Header } from 'components/Header'
// import { Navigation } from 'components/Navigation'
// import { NavigationMenu } from 'components/Navigation-menu'
import { MainPage } from 'pages/Main'
import { OfferGreement } from 'pages/Offer-greement/OfferGreement'
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
          {/* <Route path='/books/:category/:bookId' element={<BookPage />} /> */}
          <Route path='*' element={<Navigate to='books' replace={true} />} />
        </Routes>
      </HashRouter>
    </Provider>
  </>,
)
