import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload?.token;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.token = null;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, loginSuccess, logoutSuccess, fetchFail } =
  authSlice.actions;
export default authSlice.reducer;
