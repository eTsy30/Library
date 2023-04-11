import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

const initialState = {
  comment: {},
  isLoading: false,
  error: '',
}
export interface IComment {
  rating: string
  text: string
  createdcomment: string
  user: string
  book: string
}

export const commetnPost = createAsyncThunk('post/comment', async (commetData: any, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `comments`,
      {
        data: commetData,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          //   Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
        },
      },
    )
    if (response.statusText !== 'OK') {
      throw new Error('Errore!')
    }

    return 'good'
  } catch (error) {
    if (`${(error as AxiosError)?.response?.status}` === '400') {
      return rejectWithValue('400')
    }
    return rejectWithValue('bad')
  }
})

const commetnPostReduser = createSlice({
  name: 'commetnPost',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(commetnPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(commetnPost.fulfilled, (state: any, action: any) => {
        state.user = action.payload?.user
        state.token = action.payload?.jwt
        state.isLoading = false
        state.Error = 'good'
      })
      .addCase(commetnPost.rejected, (state, action: any) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
  reducers: {},
})

export default commetnPostReduser.reducer
