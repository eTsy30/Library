import { configureStore } from '@reduxjs/toolkit'

import isActiveBurger from 'redux/burger-menu/burger-active'

export const store = configureStore({
  reducer: {
    isActiveBurger,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
