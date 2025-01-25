import { configureStore } from "@reduxjs/toolkit";
import peoples from "./slices/peopleSlice";
import postion from "./slices/postionSlice";
const store = configureStore({
  reducer: {
    people: peoples,
    postion: postion,
  },
});
export default store;
