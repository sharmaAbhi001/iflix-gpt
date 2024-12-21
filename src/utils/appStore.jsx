import { configureStore } from '@reduxjs/toolkit'
import  userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import langReducer from "./configSlice"


export const appStore = configureStore({
  reducer: {
    user:userReducer,
    movies:moviesReducer,
    Gpt:gptReducer,
    config:langReducer,
  },
})
