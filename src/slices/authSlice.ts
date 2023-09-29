import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { AuthState, UserInfo } from "../types/AuthType";

  
const initialState: AuthState = {
  isLoggedIn: false,
  userUid: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.isLoggedIn = true;
      state.userUid = action.payload.uid;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userUid = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;

export const selectUserUid = (state: RootState): string => state.auth.userUid;
