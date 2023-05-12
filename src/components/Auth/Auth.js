import { auth, googleProvider, db } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "./Auth.css";
import { setDoc, collection, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        password: password,
        user_id: user.uid,
      });

      navigate("/profile");
      // setLoggedIn(true);

      // setTimeout(() => {
      //   setLoggedIn(false);
      // }, 3000);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      await setDoc(doc(userRef, user.uid), {
        email: user.email,
        password: password,
        user_id: user.uid,
      });

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
            <button className="btn btn-secondary my-1">Login</button>
            <button onClick={handleSignUp} className="btn btn-primary my-1">
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
        </div>
      </div>
    </div>
  );
};
