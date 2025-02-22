import { configureStore } from '@reduxjs/toolkit'

import isActivePopUpMenuReduser from 'redux/activePopUpMenu/activePopUpMenu'
import isActiveBurger from 'redux/burger-menu/burger-active'
import forgotPasswordReduser from 'redux/forgot-password/forgotPassword'
import getallBookReduser from 'redux/getBook/getBooks'
import setCategorii from 'redux/getBook/getBooks'
import setCloseError from 'redux/getBook/getBooks'
import setReverseBook from 'redux/getBook/getBooks'
import getCategoriReduser from 'redux/getCategorii/getCategorii'
import setCategory from 'redux/getCategorii/getCategorii'
import getCommentsReduser from 'redux/getComments/getComments'
import getOneBookReduser from 'redux/getOneBook/getOneBook'
import isActiveBookMenu from 'redux/IsActiveBookMenu/IsActiveBookMenu'
import isActiveErrorFly from 'redux/IsActiveErrorFly/IsActiveErrorFly'
import IsActiveModalMenuReduser from 'redux/IsActiveModalMenu/IsActiveModalMenu'
import commetnPostReduser from 'redux/postComments/postComments'
import registrUserReduser from 'redux/registrateUser/registrateUser'
import revertPasswordReduser from 'redux/revertPassword/revertPassword'
import setSearchValue from 'redux/setSearch/setSearch'
import singInReduser from 'redux/singIn/singIn'
import updateRaitingReduser from 'redux/updateRaiting/updateRaiting'
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
    setSearchValue,
    registrUserReduser,
    singInReduser,
    forgotPasswordReduser,
    revertPasswordReduser,
    isActivePopUpMenuReduser,
    IsActiveModalMenuReduser,
    getCommentsReduser,
    commetnPostReduser,
    isActiveErrorFly,
    updateRaitingReduser,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
