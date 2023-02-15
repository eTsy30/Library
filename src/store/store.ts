import { configureStore } from '@reduxjs/toolkit'

import isActiveBurger from 'redux/burger-menu/burger-active'
import isActiveBookMenu from 'redux/IsActiveBookMenu/IsActiveBookMenu'

export const store = configureStore({
  reducer: {
    isActiveBurger,
    isActiveBookMenu,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
