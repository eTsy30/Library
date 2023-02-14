import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IsActiveBookMenu {
  value: boolean
}
const initialState: IsActiveBookMenu = {
  value: true,
}

export const isActiveBookMenu = createSlice({
  name: 'isBookMenu',
  initialState,
  reducers: {
    setActiveBookMenu: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})
export default isActiveBookMenu.reducer
export const { setActiveBookMenu } = isActiveBookMenu.actions
