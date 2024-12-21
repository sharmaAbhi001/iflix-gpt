import { useRef, useState } from "react";
import Header from "./Header";
import { checkFormValidate } from "../utils/checkFormValidate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Bg_ImageUrl } from "../utils/constents";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handelSignin = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = async () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkFormValidate(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // sign up ka code
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174401.jpg?semt=ais_hybrid",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              errorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in ka code

      await signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(
            errorCode + errorMessage + "Eamil ya Password Check kr ;😒"
          );
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={Bg_ImageUrl}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 mx-auto right-0 left-0 my-36 bg-black bg-opacity-80 rounded-md"
      >
        <h1 className="text-white font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-2 my-4 w-full bg-gray-700 rounded-md  text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-4 w-full bg-gray-700 rounded-md text-white"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-2 my-4 w-full bg-gray-700 rounded-md text-white"
          type="password"
          placeholder="password"
        />
        <p className="text-red-600 p-2 font-serif">{errorMessage}</p>
        <button
          className="p-2 my-8 bg-red-700 text-white w-full rounded-md"
          type="submit"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={handelSignin}>
          {isSignIn
            ? "New to Netflix ? SignUp now"
            : "Already rigister? sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
