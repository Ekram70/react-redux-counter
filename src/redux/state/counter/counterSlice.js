import { createSlice } from '@reduxjs/toolkit';
import cogoToast from 'cogo-toast';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      } else {
        cogoToast.error("Value can't be less than 0");
      }
    },
    setCustom: (state, action) => {
      state.value = +action.payload;
    },
  },
});

export const { increment, decrement, setCustom } = counterSlice.actions;
export default counterSlice.reducer;
