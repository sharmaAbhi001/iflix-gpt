
import { Bg_ImageUrl } from "../utils/constents";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <img className="absolute -z-20 w-screen" src={Bg_ImageUrl} alt="" />
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
};

export default GptSearch;
