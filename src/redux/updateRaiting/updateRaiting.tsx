import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

const initialState = {
  response: {},
}

export const updateRaiting = createAsyncThunk('update/Raiting', async (data: any, { rejectWithValue }) => {
  try {
    const response = await axios.put(
      `http://localhost:1337/api/books/${data.id}`,
      {
        data: {
          rating: data.raiting,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  } catch (error) {
    return rejectWithValue('bad!!!!!!')
  }
})

const updateRaitingReduser = createSlice({
  name: 'commetnPost',
  initialState,
  extraReducers(builder) {
    builder.addCase(updateRaiting.fulfilled, (state: any, action: any) => {
      state.raiting = action.payload
    })
  },
  reducers: {},
})

export default updateRaitingReduser.reducer
