import { useRef } from "react";
import languages from "../utils/languageConstents";
import { useSelector } from "react-redux";


const GptSearchBar = () => {

    const currentLang = useSelector(state =>state.config.lang);
    const searchText = useRef(null);


    
    const handelGptButton = () => {
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
}

export default GptSearchBar