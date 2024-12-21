import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = ({ title ,movies }) => {


  return (
   <div className="px-6 ">
    <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
    <div className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap ">
    <div className="flex ">
      {
        movies?.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path} />))
      }
    </div>
    </div>
   </div>
  );
};

export default MoviesList;
