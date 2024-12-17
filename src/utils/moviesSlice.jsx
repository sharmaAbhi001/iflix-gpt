import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
    name: 'movies',
    initialState:{
     nowPlayingMovies :null,
    },
    reducers: {
     addMovies: (state,action) =>{
        state.nowPlayingMovies = action.payload
     },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addMovies} = moviesSlice.actions
  
  export default moviesSlice.reducer;