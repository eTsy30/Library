import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { ICard } from 'types/card'

const initialState = {
  book: null,
  isLoading: false,
  isError: false,
}

const qs = require('qs')
const query = qs.stringify(
  {
    populate: {
      image: {
        fields: ['url', 'name'],
      },
      categories: {
        fields: ['name', 'path', 'id'],
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  },
)
export const getOneBook = createAsyncThunk('get/getOneBook', async (id: string, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:1337/api/books/${id}?${query}`, {
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

const getOneBookReduser = createSlice({
  name: 'OneBookReduser',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getOneBook.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getOneBook.fulfilled, (state: any, action: PayloadAction<ICard>) => {
        state.books = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(getOneBook.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
  reducers: {
    setCloseError: (state: any) => {
      state.isError = false
    },
  },
})
export const { setCloseError } = getOneBookReduser.actions
export default getOneBookReduser.reducer
