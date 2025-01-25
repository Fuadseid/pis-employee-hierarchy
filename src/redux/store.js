import { configureStore } from "@reduxjs/toolkit";
import peoples from "./slices/peopleSlice";
const store = configureStore({
  reducer: {
    people: peoples,
  },
});
export default store;
