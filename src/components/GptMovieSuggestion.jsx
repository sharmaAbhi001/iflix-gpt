import { useSelector } from "react-redux"
import MoviesList from "./MoviesList";


const GptMovieSuggestion = () => {

    const {gptMovieResult,gptMovieName} = useSelector((store) =>store.Gpt)
     if(!gptMovieName) return null;
    
  return (
    <div className="p-4 m-4 bg-black bg-opacity-45 text-white">
     <div>
     {
    gptMovieName.map((movieName, index) => (
        <MoviesList
            key={`${movieName}-${index}`} // Ensures unique keys even with duplicate names
            title={movieName}
            movies={gptMovieResult[index]}
        />
    ))
}
     </div>
    </div>
  )
}

export default GptMovieSuggestion