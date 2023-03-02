import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { ICard } from 'types/card'

interface IBooksState {
  books: Array<ICard>
  isLoading: boolean
  isError: boolean
}
const initialState = {
  books: [],
  isLoading: false,
  isError: false,
}
export const getAllBooks = createAsyncThunk('get/getAllBooks', async (path, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:1337/api/' + 'books?populate=*', {
      headers: {
        Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
      },
    })

    if (response.statusText !== 'OK') {
      throw new Error('Errore!')
    }
    const { data } = response.data

    return data.sort((a: any, b: any) => {
      return a?.attributes?.rating - b?.attributes?.rating
    })
  } catch (error) {
    return rejectWithValue(error)
  }
})

const getallBookReduser = createSlice({
  name: 'allBookReduser',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getAllBooks.fulfilled, (state: any, action: PayloadAction<ICard>) => {
        state.books = action.payload
        state.isLoading = false
        state.isError = false
        console.log(state.categorii, 'setBook')
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
  reducers: {
    setCloseError: (state: any) => {
      state.isError = false
    },
    setReverseBook: (state: any) => {
      state.books = state.books.reverse()
    },
    setCategorii: (state: any, action: PayloadAction<number>) => {
      state.books = state.books.filter((el: any) =>
        el.attributes.categories.data.find((s: { id: number }) => s.id === Number(`${action.payload}`)),
      )
    },
    setBook: (state: any, action: any) => {
      console.log(state, 'setBook')
    },
  },
})
export const { setCloseError, setReverseBook, setCategorii } = getallBookReduser.actions
export default getallBookReduser.reducer
