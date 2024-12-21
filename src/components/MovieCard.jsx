import { MoviePoster_CDN } from "../utils/constents";

const MovieCard = ({posterPath}) => {
    
 if(!posterPath) return null;

  return (
    

<div className="w-36 md:w-48 pr-4">
<img alt="Movie Card" src={MoviePoster_CDN + posterPath} />
</div>
  )
}

export default MovieCard