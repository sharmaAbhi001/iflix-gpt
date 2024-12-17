import {  useEffect } from "react";
import { API_OPTIONS, MOVIEs_API } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const fetchMovieData = async () => {
   
        try {
         const response = await fetch(MOVIEs_API,API_OPTIONS);
         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }
         const data = await response.json();
         dispatch(addMovies(data.results))
       } catch (error) {
         console.error('Error fetching movies:', error.message);
       }
        
     }
     
     // useEffect to call fetchMovieData when the hook is used
     useEffect(() => {
       fetchMovieData();
     }, []); 

};

export default useNowPlayingMovies;
