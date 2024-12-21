import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toggleGptScreen } from "../utils/gptSlice";
import { App_logo, SUPPORTED_LANG } from "../utils/constents";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector((state) => state.user);
  const showGptScreen = useSelector((state) => state.Gpt.showgpt)

  

  const handelUserSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          )
          nevigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser());
          nevigate("/")
        }
      });

      return () => unsubscribe();
    }, []);

  const handelGpt = () =>{
   dispatch(toggleGptScreen());
  }


const handelLangChange = (e) =>{
dispatch(changeLanguage(e.target.value))

}


  return (
    <div className=" absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="w-44">
        <img
          src={App_logo}
          alt="logo"
        />
      </div>
      {user && (
        
       <div className=" w-4/12  flex justify-between  items-center">
       { showGptScreen && <select className="p-2 bg-gray-900 text-white m-2" onChange={handelLangChange}>
          {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button className="bg-orange-700 text-white p-2 m-2 rounded-lg text-lg " onClick={handelGpt}> 
          {showGptScreen?"HomePage":"GPT Search"} </button>
        <h1 className="font-bold text-red-700 p-2">{user.displayName}</h1>
        <img className="h-20 w-20 rounded-full" src={user.photoURL} alt="" />
         <button
          onClick={handelUserSignOut}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Sign Out
        </button>
       </div>
      )}
    </div>
  );
};

export default Header;
