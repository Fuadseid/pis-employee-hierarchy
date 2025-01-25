import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  postion: null,
  positions: [],
  selectedPositionId: null,
  parentId: "",
  description: "",
  name: "",
};
const postionslice = createSlice({
  name: "postion",
  initialState,
  reducers: {
    addpostion(state, action) {
      state.postion = action.payload;
    },
    setPositions(state, action) {
      state.positions = action.payload;
    },
    setSelectedPositionId(state, action) {
      state.selectedPositionId = action.payload;
    },
    setParentId(state, action) {
      state.parentId = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
});
export const {
  addpostion,
  setPositions,
  setSelectedPositionId,
  setParentId,
  setDescription,
  setName,
} = postionslice.actions;
export default postionslice.reducer;
