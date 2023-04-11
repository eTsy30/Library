import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface ICategori {
  categori: Array<any>
  isLoading: boolean
  isError: boolean
}
const initialState = {
  categories: [],
  categorii: '',
  isLoading: false,
  isError: false,
}
export const getCategorii = createAsyncThunk('get/getCategorii', async (path, { rejectWithValue }) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + 'categories', {
      headers: {
        Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
      },
    })

    if (response.statusText !== 'OK') {
      throw new Error('Errore!')
    }
    const { data } = response.data

    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})

const getCategoriReduser = createSlice({
  name: 'getCategoriReduser',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCategorii.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getCategorii.fulfilled, (state: any, action: any) => {
        state.categories = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(getCategorii.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.categorii = action.payload
    },
  },
})
export default getCategoriReduser.reducer
export const { setCategory } = getCategoriReduser.actions
