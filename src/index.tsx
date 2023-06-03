import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'

import { ErrorFly } from 'components/ErrorFly/ErrorFly'
import { SeeSoon } from 'components/SeeSoon/SeeSoon'
import { BookPage } from 'pages/Book'
import { FogotPassword } from 'pages/FogotPassword/FogotPassword'
import { MainPage } from 'pages/Main'
import { OfferGreement } from 'pages/Offer-greement/OfferGreement'
import { RecoverPassword } from 'pages/RecoverPassword/RecoverPassword'
import { Registr } from 'pages/RegisterUser/Registr'
import { SingIn } from 'pages/SingIn/SingIn'
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
          <Route path='/SingIn' element={<SingIn />} />
          <Route path='/FogotPassword' element={<FogotPassword />} />
          <Route path='/RevertPassword' element={<RecoverPassword />} />
          <Route path='/SeeSoon' element={<SeeSoon />} />
        </Routes>
      </HashRouter>
    </Provider>
  </>,
)
