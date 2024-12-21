import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {

  const movies = useSelector(state=> state.movies?.nowPlayingMovies)

  return (
  movies &&  (
    <div className="bg-black">
  <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
      <MoviesList title={"Now Playing"} movies={movies}/>
      <MoviesList title={"Now Playing"} movies={movies}/>
      <MoviesList title={"Now Playing"} movies={movies}/>
  </div>
    </div>
  )
  );
};

export default SecondaryContainer;
