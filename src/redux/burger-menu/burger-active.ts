import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IActiveBurger {
  isActiveBurger: any
  value: boolean
}
const initialState: IActiveBurger = {
  value: true,
  isActiveBurger: undefined,
}

export const isActiveBurger = createSlice({
  name: 'isActiveBurgers',
  initialState,
  reducers: {
    setBurgerActive: (state, action: PayloadAction<boolean>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload
    },
  },
})
// eslint-disable-next-line import/no-default-export
export default isActiveBurger.reducer
export const { setBurgerActive } = isActiveBurger.actions
