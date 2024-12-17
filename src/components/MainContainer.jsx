import BackgrounVideo from "./BackgrounVideo";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((state) => state.movies?.nowPlayingMovies);

  if (movie === null) return;

  const mainMovie = movie[0];

  const {original_title,overview} = mainMovie;
  

  return (
    <div>
      <VideoInfo title={original_title} overview = {overview} />
      <BackgrounVideo />
    </div>
  );
};

export default MainContainer;
