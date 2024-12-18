import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
    name: 'movies',
    initialState:{
     nowPlayingMovies :null,
     movieTrailer:null,
    },
    reducers: {
     addMovies: (state,action) =>{
        state.nowPlayingMovies = action.payload
     },
     addMovieTrailer:(state,action) =>{
        state.movieTrailer =action.payload
     }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addMovies,addMovieTrailer} = moviesSlice.actions
  
  export default moviesSlice.reducer;