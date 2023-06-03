import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import { getComments } from 'redux/getComments/getComments'
import { setActiveErrorFly } from 'redux/IsActiveErrorFly/IsActiveErrorFly'

import { useAppDispatch } from 'store/hook'

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
        },
      },
    )
    return response.data
  } catch (error) {
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
        state.comment = action.payload
        state.isLoading = false
      })
      .addCase(commetnPost.rejected, (state, action: any) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
  reducers: {},
})

export default commetnPostReduser.reducer
