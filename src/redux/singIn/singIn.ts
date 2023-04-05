import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { IUserSing } from 'types/user'

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  isError: 'init',
}

export const singInUser = createAsyncThunk('post/singInUser', async (userData: IUserSing, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + `auth/local`,
      {
        identifier: userData.email,
        password: userData.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'berer' + process.env.REACT_APP_API_TOKEN,
        },
      },
    )
    if (response.statusText !== 'OK') {
      throw new Error('Errore!')
    } else {
      localStorage.setItem('userSingIn', JSON.stringify(response.data))
      localStorage.setItem('firstName', JSON.stringify(response.data.user.firstName))
      return response.data
    }
  } catch (error) {
    return rejectWithValue(error)
  }
})

const singInReduser = createSlice({
  name: 'gregistrUserReduser',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(singInUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(singInUser.fulfilled, (state: any, action: any) => {
        state.token = action.payload?.jwt
        state.user = action.payload?.user
        state.isLoading = false
        state.isError = 'redirect'
      })
      .addCase(singInUser.rejected, (state) => {
        state.isLoading = false
        state.isError = 'error'
      })
  },
  reducers: {},
})

export default singInReduser.reducer
