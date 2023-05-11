import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "./Auth.css";
// import firebase from "firebase/app";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      // console.log(email, password);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // Handle any errors that may occur
      console.error(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      // console.log(email, password);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      // Handle any errors that may occur
      console.error(error.message);
    }
  };
  const signOut = async () => {
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
            <button onClick={signIn} className="btn btn-secondary my-1">
              Login
            </button>
            <button className="btn btn-primary my-1">Sign Up</button>
            <div
              onClick={signInWithGoogle}
              className="btn btn-outline google-sign my-1"
            >
              Sign in with Google
            </div>
            <div onClick={signOut} className="btn btn-outline google-sign my-1">
              Log Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
