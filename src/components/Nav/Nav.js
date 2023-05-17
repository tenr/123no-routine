import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import AuthContext from "../contexts/AuthContext";

function Nav() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      // console.log(email, password);
      await signOut(auth);
      navigate("/");
    } catch (error) {
      // Handle any errors that may occur
      console.error(error.message);
    }
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <h1 className="btn btn-ghost normal-case text-xl">No Routine</h1>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/events">
                <span>Events</span>
              </Link>

              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            {user ? (
              <li tabIndex={0}>
                {/* <Link to="/profile"> */}
                <span className="flex">
                  {user.email}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </span>
                {/* </Link> */}
                <ul className="p-2 bg-base-100 dropdown" id="drop-down">
                  <Link to="/profile">
                    <li>
                      <span>Profile</span>
                    </li>
                  </Link>
                  {/* <Link to="/login-signup">
                  <li>
                    <span>Sign up</span>
                  </li>
                </Link> */}
                  <Link to="/">
                    <li onClick={handleSignOut}>
                      <span>Sign Out</span>
                    </li>
                  </Link>
                </ul>
              </li>
            ) : (
              <li tabIndex={0}>
                {/* <Link to="/profile"> */}
                <span className="flex">
                  Guest
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </span>
                {/* </Link> */}
                <ul className="p-2 bg-base-100 dropdown" id="drop-down">
                  <Link to="/login-signup">
                    <li>
                      <span>Log in</span>
                    </li>
                  </Link>
                  <Link to="/login-signup">
                    <li>
                      <span>Sign up</span>
                    </li>
                  </Link>
                  {/* <Link to="/">
                    <li onClick={handleSignOut}>
                      <span>Sign Out</span>
                    </li>
                  </Link> */}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
