import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedPerson: {
    id: null,
    name: "",
    description: "",
    parentId: null,
  },
  people: null,
  isopen: false,
  show: false,
  loading: true,
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
    setOpen(state) {
      state.isopen = !state.isopen;
    },
    setShow(state) {
      state.show = !state.show;
    },
    setLoading(state) {
      state.loading = false;
    },
  },
});
export const {
  selectPerson,
  updateselectedperson,
  addpeoples,
  setOpen,
  setShow,
  setLoading,
} = peopleslice.actions;
export default peopleslice.reducer;
