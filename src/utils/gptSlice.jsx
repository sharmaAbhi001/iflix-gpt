import { createSlice } from '@reduxjs/toolkit'

export const GptSlice = createSlice({
    name: 'Gpt',
    initialState:{
        showgpt:false,
        gptMovieResult:null,
        gptMovieName:null,
    },
    reducers: {
     toggleGptScreen: (state) =>{
       state.showgpt = !state.showgpt;
     },
     addGptMovie: (state,action) =>{
      state.gptMovieResult = action.payload
     },
     addGptName: (state,action) =>{
      state.gptMovieName = action.payload
     }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggleGptScreen ,addGptMovie, addGptName } = GptSlice.actions
  
  export default GptSlice.reducer;
  