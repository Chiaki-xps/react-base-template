import { createSlice } from '@reduxjs/toolkit';

const home = createSlice({
  name: 'home',

  initialState: {
    counter: 0,
  },

  reducers: {
    add(state, actions) {
      state.counter = state.counter + actions.payload;
    },
    sub(state, actions) {
      state.counter = state.counter - actions.payload;
    },
  },
});

export const { add, sub } = home.actions;
export default home.reducer;
