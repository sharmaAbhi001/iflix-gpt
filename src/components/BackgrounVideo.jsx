import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const BackgrounVideo = ({ id }) => {
  useTrailerVideo(id);

  const trailer = useSelector((state) => state.movies.movieTrailer);
  if (trailer === null) return;

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailer.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BackgrounVideo;
