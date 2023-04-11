import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import { IUserRegister } from 'types/user'

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  Error: 'no',
}

export const registrUser = createAsyncThunk(
  'post/registrUser',
  async (userData: IUserRegister, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + `auth/local/register`,
        {
          username: userData.login,
          email: userData.email,
          password: userData.password,
          phone: userData.phone,
          firstName: userData.name,
          lastName: userData.lastName,
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
      }

      return 'good'
    } catch (error) {
      if (`${(error as AxiosError)?.response?.status}` === '400') {
        return rejectWithValue('400')
      }
      return rejectWithValue('bad')
    }
  },
)

const registrUserReduser = createSlice({
  name: 'gregistrUserReduser',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(registrUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registrUser.fulfilled, (state: any, action: any) => {
        state.user = action.payload?.user
        state.token = action.payload?.jwt
        state.isLoading = false
        state.Error = 'good'
      })
      .addCase(registrUser.rejected, (state, action: any) => {
        state.isLoading = false
        state.Error = action.payload
      })
  },
  reducers: {},
})

export default registrUserReduser.reducer
