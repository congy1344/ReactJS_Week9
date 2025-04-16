import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  step: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += state.step;
    },
    decrement: (state) => {
      state.count -= state.step;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount, setStep } =
  counterSlice.actions;
export default counterSlice.reducer;
