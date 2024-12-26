import { createSlice } from "@reduxjs/toolkit";
const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
    reloadData: false,
  },
  reducers: {
    // Action to show loading
    ShowLoading: (state) => {
      state.loading = true;
    },
    // Action to hide loading
    HideLoading: (state) => {
      state.loading = false;
    },
    // Action to set portfolio data
    SetPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    ReloadData: (state, action) => {
      state.reloadData = action.payload;
    },
  },
});
export const { ShowLoading, HideLoading, SetPortfolioData, ReloadData } =
  rootSlice.actions;
export default rootSlice.reducer;
