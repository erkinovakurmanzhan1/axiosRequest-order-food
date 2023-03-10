import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, UserRoles } from '../../lib/constants/common'
import { signIn, signOut, signUp } from './thunks'

const getInitialState = () => {
  const json = localStorage.getItem(STORAGE_KEYS.AUTH)

  if (json) {
    const userData = JSON.parse(json)
    return userData
  }

  return json
}
const initialState = {
  isAuthorized: false,
  token: '',
  ...getInitialState(),
}

export const authSLice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isAuthorized = true
      state.token = payload.token

      state.user = {
        name: payload.user.name,
        email: payload.user.email,
        role: payload.user.role,
      }
    })
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.isAuthorized = true
      state.token = payload.token

      state.user = {
        name: payload.user.name,
        email: payload.user.email,
        role: payload.user.role,
      }
    })
    builder.addCase(signOut.fulfilled, (state) => {
      state.isAuthorized = false
      state.token = ''

      state.user = {
        name: '',
        email: '',
        role: UserRoles.GUEST,
      }
    })
  },
})
