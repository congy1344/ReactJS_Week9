import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    editEvent: (state, action) => {
      const index = state.events.findIndex(
        (event) => event.id === action.payload.id
      );
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...action.payload };
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
