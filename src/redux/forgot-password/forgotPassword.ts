import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: false,
  isLoading: false,
}

export const forgotPassword = createAsyncThunk('post/forgotPassword', async ({ email }: any, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `auth/forgot-password`,
      {
        email: email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (response.statusText !== 'OK') {
      throw new Error('Errore!')
    }

    return true
  } catch (error) {
    return rejectWithValue(false)
  }
})

const forgotPasswordReduser = createSlice({
  name: 'forgotPasswordReduser',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true
      })
      .addCase(forgotPassword.fulfilled, (state: any, action: any) => {
        state.status = action.payload
        state.isLoading = false
      })
      .addCase(forgotPassword.rejected, (state, action: any) => {
        state.isLoading = false
        state.status = action.payload
      })
  },
  reducers: {
    setforgotPassword: (state: any) => {
      state.status = false
    },
  },
})
export const { setforgotPassword } = forgotPasswordReduser.actions
export default forgotPasswordReduser.reducer
