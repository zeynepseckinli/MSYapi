import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",

  initialState: {
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getOpsSuccess: (state) => {
      state.loading = false;
    },
    getSuccess: (state, { payload: { data, url } }) => {
      let key;
      state.loading = false;
      state[key] = data;
    },
    postSuccess: (state,isLive) => {
      state.loading = false;
      state.location = isLive.payload ? isLive : false;
    },
    postFail: (state) => {
      state.loading = false;
      state.location = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  fetchFail,
  getOpsSuccess,
  postSuccess,
  postFail,
} = dataSlice.actions;
export default dataSlice.reducer;
