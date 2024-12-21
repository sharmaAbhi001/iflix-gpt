import { useRef } from "react";
import languages from "../utils/languageConstents";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constents";
import { addGptMovie, addGptName } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.config.lang);
  const searchText = useRef(null);

  const api_key = import.meta.env.VITE_GEN_API;


  const searchMovieTMDB = async (movie) => {
    
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();

    

    return json.results;
  }
   


  const handelGptButton = async () => {
    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      "Act as a movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ".Only give me name of 5 movies , comma seprated Example like the Example result given ahead , Example result:Gadar,Puspa,Sholey,Khiladi";

      const result = await model.generateContent(prompt);

      const movies = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
      const editMovie = movies.split(',').map(movie => movie.trim());
      dispatch(addGptName(editMovie))

      const GptmovieInfo = editMovie.map(movie => searchMovieTMDB(movie));
      
      const tmdbResults = await Promise.all(GptmovieInfo)
       dispatch(addGptMovie(tmdbResults));
       

  };

  return (
    <div>
      <div className="pt-52">
        <form
          className="flex items-center max-w-lg mx-auto"
          onClick={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={languages[currentLang].mainMessage}
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center w-60 py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handelGptButton}
          >
            {languages[currentLang].searchButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
