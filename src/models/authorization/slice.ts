import { createSlice } from "@reduxjs/toolkit";
import { Actions, AuthState } from "./types";

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    [Actions.LOGIN]: (state) => {
      state.isLoggedIn = true;
    },
    [Actions.LOGOUT]: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
