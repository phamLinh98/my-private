import { configureStore } from "@reduxjs/toolkit";
import privateReducer from "./src/redux/privateSlice";

export const store = configureStore({
    reducer: {
      private:privateReducer
    }
})