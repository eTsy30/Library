import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IsActiveErrorFly {
  openError: boolean
  successStatus?: boolean
  textMsg?: string
}
const initialState: IsActiveErrorFly = {
  openError: false,
  successStatus: true,
  textMsg: '',
}

export const isActiveErrorFly = createSlice({
  name: 'IsActiveErrorFly',
  initialState,
  reducers: {
    setActiveErrorFly: (state, action: PayloadAction<IsActiveErrorFly>) => {
      const { openError, successStatus, textMsg } = action.payload
      state.openError = openError
      state.successStatus = successStatus ? successStatus : true
      state.textMsg = textMsg ? textMsg : ''
    },
  },
})
export default isActiveErrorFly.reducer
export const { setActiveErrorFly } = isActiveErrorFly.actions
