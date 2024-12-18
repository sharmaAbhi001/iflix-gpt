import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const BackgrounVideo = ({ id }) => {
  useTrailerVideo(id);

  const trailer = useSelector((state) => state.movies.movieTrailer);
  console.log(trailer?.key);
  if (trailer === null) return;

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailer.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BackgrounVideo;
