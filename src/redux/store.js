import { configureStore } from "@reduxjs/toolkit";
import peoples from "./slices/peopleSlice";
import position from "./slices/postionSlice";
const store = configureStore({
  reducer: {
    people: peoples,
    postion: position,
  },
});
export default store;
