import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

// declaring the types for our state
export type AuthStateType = {
  isAuthentication: boolean;
};

const initialState: AuthStateType = {
  isAuthentication: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthentication = action.payload;
    },
  },
});
// Here we are just exp worting the actions from this slice, so that we can call them anywhere in our app.
export const { setAuthentication } = authSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const isAuthentication = (state: RootState) =>
  state.auth.isAuthentication;

// exporting the reducer here, as we need to add this to the store
export default authSlice.reducer;
