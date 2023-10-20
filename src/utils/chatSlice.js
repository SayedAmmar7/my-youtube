import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload);
    },
  },
});

export const { addMessage } = chartSlice.actions;

export default chartSlice.reducer;
