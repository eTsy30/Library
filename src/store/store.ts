import { configureStore } from '@reduxjs/toolkit'

import isActiveBurger from 'redux/burger-menu/burger-active'
import getallBookReduser from 'redux/getBook/getBooks'
import setCategorii from 'redux/getBook/getBooks'
import setCloseError from 'redux/getBook/getBooks'
import setReverseBook from 'redux/getBook/getBooks'
import getCategoriReduser from 'redux/getCategorii/getCategorii'
import setCategory from 'redux/getCategorii/getCategorii'
import getOneBookReduser from 'redux/getOneBook/getOneBook'
import isActiveBookMenu from 'redux/IsActiveBookMenu/IsActiveBookMenu'

export const store = configureStore({
  reducer: {
    isActiveBurger,
    isActiveBookMenu,
    getallBookReduser,
    setCloseError,
    getOneBookReduser,
    setReverseBook,
    setCategorii,
    getCategoriReduser,
    setCategory,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
