import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";


const useTrailerVideo = (id) =>{
    
    const dispatch = useDispatch();
    
    const fatchVideoData = async() =>{

        const data = await fetch('https://api.themoviedb.org/3/movie/' +id+ '/videos?language=en-US',API_OPTIONS);

        const json= await data.json();
       const moviVideoData  = json.results;

        const videoTrailer = moviVideoData.filter(video => video.type=== "Trailer");

        const trailer = videoTrailer ? videoTrailer[0] ||[] :moviVideoData[0];
    
       
       dispatch(addMovieTrailer(trailer));

    }

    useEffect(()=>{
        fatchVideoData()
    },[]);

}


export default useTrailerVideo;