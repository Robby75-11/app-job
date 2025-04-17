import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers"; // <-- questo punta a index.js

const store = configureStore({
  reducer: rootReducer,
});

export default store;
