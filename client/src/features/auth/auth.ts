import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface AuthInit {
  authorizated: boolean
}

export const authInit: AuthInit = {
  authorizated: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState: authInit,
  reducers: {},
})

export const selectAuth = (state: RootState): AuthInit => state.auth
export const isAuthorizated = (state: RootState): boolean =>
  state.auth.authorizated
