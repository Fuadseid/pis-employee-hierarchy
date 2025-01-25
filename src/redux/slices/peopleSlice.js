import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedPerson: {
    id: null,
    name: "",
    description: "",
    parentId: null,
  },
  people: null,
};
const peopleslice = createSlice({
  name: "peoples",
  initialState,
  reducers: {
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    selectPerson(state, action) {
      state.selectedPerson = action.payload;
    },
    updateselectedperson(state, action) {
      const { field, value } = action.payload;
      state.selectedPerson[field] = value;
    },
    addpeoples(state, action) {
      state.people = action.payload;
    },
  },
});
export const { selectPerson, updateselectedperson, addpeoples } =
  peopleslice.actions;
export default peopleslice.reducer;
