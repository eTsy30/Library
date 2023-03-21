import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { ICard } from 'types/card'

interface IBooksState {
  books: Array<ICard>
  isLoading: boolean
  isError: boolean
}

interface IBookFind {
  category: string | undefined
  find: string
}
const initialState = {
  books: [],
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

export const getAllBooks = createAsyncThunk('get/getAllBooks', async (path, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:1337/api/' + `books?${query}`, {
      headers: {
        Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
      },
    })

    if (response.statusText !== 'OK') {
      throw new Error('Errore!')
    }
    const { data } = response.data
    console.log(data, '+++++data*****')

    return data.sort((a: any, b: any) => {
      return a?.attributes?.rating - b?.attributes?.rating
    })
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const getFindBooks = createAsyncThunk('get/getFindBooks', async (dataParam: any, { rejectWithValue }) => {
  try {
    const params = dataParam.category ? `[filters][categories][path][$eq]=${dataParam.category}` : null
    const response = await axios.get(
      `http://localhost:1337/api/books?populate[image][fields][0]=url,name&populate[categories][fields][0]=name,path,id&[filters][title][$contains]=${dataParam.find}&${params}`,
      {
        headers: {
          Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
        },
      },
    )

    if (response.statusText !== 'OK') {
      throw new Error('Errore!')
    }
    if (response.statusText !== 'OK') {
      throw new Error('Errore!')
    }

    const { data } = response.data
    console.log(data, '+++++data*****')

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
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.isLoading = false
        state.isError = false
      })
      .addCase(getFindBooks.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getFindBooks.fulfilled, (state: any, action: PayloadAction<ICard>) => {
        state.books = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(getFindBooks.rejected, (state) => {
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
  },
})
export const { setCloseError, setReverseBook, setCategorii } = getallBookReduser.actions
export default getallBookReduser.reducer
