import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IActiveBurger {
  isActiveBurger: boolean
}
const initialState: IActiveBurger = {
  isActiveBurger: false,
}

export const isActivePopUpMenuReduser = createSlice({
  name: 'isactivePopUpMenu',
  initialState,
  reducers: {
    setPopUpMenyActive: (state, action: PayloadAction<boolean>) => {
      state.isActiveBurger = !state.isActiveBurger
    },
  },
})
export default isActivePopUpMenuReduser.reducer
export const { setPopUpMenyActive } = isActivePopUpMenuReduser.actions
