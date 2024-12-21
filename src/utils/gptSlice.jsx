import { createSlice } from '@reduxjs/toolkit'

export const GptSlice = createSlice({
    name: 'Gpt',
    initialState:{
        showgpt:false,
    },
    reducers: {
     toggleGptScreen: (state) =>{
       state.showgpt = !state.showgpt;
     },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggleGptScreen } = GptSlice.actions
  
  export default GptSlice.reducer;
  