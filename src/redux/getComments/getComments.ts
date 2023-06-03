import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  comments: [],
  isLoading: false,
  isError: false,
  raiting: 0,
}

const qs = require('qs')
const query = qs.stringify(
  {
    populate: {
      user: {
        fields: ['firstName', 'lastName'],
        populate: { avatar: { fields: ['url'] } },
      },
      book: {
        fields: ['id'],
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
)
export const getComments = createAsyncThunk('get/getComments', async (id: string, { rejectWithValue }) => {
  const params = `[filters][book][id][$eq]=${id}`
  try {
    const response = await axios.get(`http://localhost:1337/api/comments?${query}&${params}`, {
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

const getCommentsReduser = createSlice({
  name: 'OneBookReduser',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getComments.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(getComments.fulfilled, (state: any, action: any) => {
        state.comments = action.payload
        state.isLoading = false
        state.isError = false
        state.raiting =
          action.payload.reduce((sum: any, count: any) => sum + count.attributes.rating, 0) / action.payload.length
      })
      .addCase(getComments.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
  reducers: {},
})
export default getCommentsReduser.reducer
