import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BodyScroll } from 'Utils/IsScrollBody'

export interface IsActiveModalMenu {
  value: boolean
}
const initialState: IsActiveModalMenu = {
  value: true,
}

export const IsActiveModalMenuReduser = createSlice({
  name: 'isModalMenu',
  initialState,
  reducers: {
    setActiveModalMenu: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
      BodyScroll(action.payload)
    },
  },
})
export default IsActiveModalMenuReduser.reducer
export const { setActiveModalMenu } = IsActiveModalMenuReduser.actions
