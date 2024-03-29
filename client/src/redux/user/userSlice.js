import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currenUser: null,
  error: null,
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    siginInSuccess: (state, action) => {
      state.currenUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { signInStart, siginInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;