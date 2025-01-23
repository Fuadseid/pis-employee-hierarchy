import { configureStore } from "@reduxjs/toolkit";
import peoples from "./peopleSlice";
import position from "./postionSlice";
const store = configureStore({
  reducer: {
    people: peoples,
    postion: position,
  },
});
export default store;
