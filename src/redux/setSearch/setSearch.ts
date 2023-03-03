import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const setSearch = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})
export default setSearch.reducer
export const { setSearchValue } = setSearch.actions
