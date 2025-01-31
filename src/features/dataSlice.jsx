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
      if (url == "/internal/user/get-maintenance-technician") key = "employees";
      else if (url.startsWith("/internal/user/get-profile-email/"))
        key = "employee";
      else if (url == "/internal/user/get-profile") key = "employeeDetail";
      else if (url == "/maintenance/not-completed/by-user")
        key = "maintenancePlanning";
      else if (url == "/maintenance/completed/by-user")
        key = "maintenanceHistory";
      else if (url == "/maintenance") key = "maintenances";
      else if (url.startsWith("/internal/user/get-profile/")) key = "user";
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
