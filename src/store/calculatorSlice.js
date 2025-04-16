import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weight: "",
  height: "",
  result: null,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    calculateResult: (state) => {
      const weight = parseFloat(state.weight);
      const height = parseFloat(state.height) / 100; // convert cm to m
      if (weight && height) {
        state.result = (weight / (height * height)).toFixed(2);
      }
    },
  },
});

export const { updateInput, calculateResult } = calculatorSlice.actions;
export default calculatorSlice.reducer;
