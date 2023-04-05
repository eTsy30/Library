import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: '',
  isLoading: false,
}

export const revertPassword = createAsyncThunk(
  'post/revertPassword',
  async ({ code, password, passwordConfirmation }: any, { rejectWithValue }) => {
    try {
      console.log(code, password, passwordConfirmation, 'START')
      const response = await axios.post(
        process.env.REACT_APP_API_URL + `auth/reset-password`,
        {
          code: code,
          password: password,
          passwordConfirmation: passwordConfirmation,
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

      return 'good'
    } catch (error) {
      return rejectWithValue('bad')
    }
  },
)

const revertPasswordReduser = createSlice({
  name: 'revertPassword',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(revertPassword.pending, (state) => {
        state.isLoading = true
      })
      .addCase(revertPassword.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = action.payload
      })
      .addCase(revertPassword.rejected, (state, action: any) => {
        state.isLoading = false
        state.status = action.payload
      })
  },
  reducers: {
    setrevertPassword: (state: any) => {
      state.status = false
    },
  },
})
export const { setrevertPassword } = revertPasswordReduser.actions
export default revertPasswordReduser.reducer
