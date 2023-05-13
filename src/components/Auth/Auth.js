import { auth, googleProvider, db } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import "./Auth.css";
import { setDoc, collection, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userRef = collection(db, "users");
  const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);

  const handleSignUp = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(userRef, user.uid), {
        email: user.email,
        user_id: user.uid,
      });
      //should i use the id of the protected route  here?
      navigate("/profile");
    } catch (error) {
      // console.error(error.message);
      setError(`Whoops! Looks like either your email is incorrect or your
      password is not atleast 6 characters long. Give it another
      try.`);
      setTimeout(() => {
        setError("");
      }, 7000);
    }
  };

  const handleLoginWithEmailAndPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (error) {
      setError("We dont know you yet. Sign-up so we can be friends!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      await setDoc(doc(userRef, user.uid), {
        email: user.email,
        user_id: user.uid,
      });
      //should i use the id of the protected route  here?
      navigate("/profile");
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSignOut = async () => {
    try {
      // console.log(email, password);
      await signOut(auth);
    } catch (error) {
      // Handle any errors that may occur
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span
                className="label-text
              "
              >
                Email
              </span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className=" buttons-container">
            {/* add onClick */}
            <button
              onClick={handleLoginWithEmailAndPassword}
              className="btn btn-secondary my-1"
              type="button"
            >
              Login
            </button>
            <button
              onClick={handleSignUp}
              className="btn btn-primary my-1"
              type="button"
            >
              Sign Up
            </button>
            <div
              onClick={handleSignInWithGoogle}
              className="btn btn-outline google-sign my-1"
            >
              Sign in with Google
            </div>
            <div
              onClick={handleSignOut}
              className="btn btn-outline google-sign my-1"
            >
              Log Out
            </div>
          </div>
          {error && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
