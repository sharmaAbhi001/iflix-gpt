import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector((state) => state.user);

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

  return (
    <div className=" absolute w-full px-12 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="w-44">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && (
       <div className=" w-3/12  flex justify-between  items-center">
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
