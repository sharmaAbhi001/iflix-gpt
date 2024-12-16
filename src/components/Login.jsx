import { useRef, useState } from "react";
import Header from "./Header";
import { checkFormValidate } from "../utils/checkFormValidate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const handelSignin = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFormSubmit = () =>{
    const emailValue = email.current.value;
    const passwordValue = password.current.value;  

    const message = checkFormValidate(emailValue,passwordValue);
    setErrorMessage(message);
    
  }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_medium.jpg"
          alt="bg-img"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 mx-auto right-0 left-0 my-36 bg-black bg-opacity-80 rounded-md">
        <h1 className="text-white font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-4 w-full bg-gray-700 rounded-md"
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