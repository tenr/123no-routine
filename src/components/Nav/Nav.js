import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">No Routine</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/events/all">
                <span>Events</span>
              </Link>

              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link to="/profile">
                <span className="flex">
                  Profile
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
              </Link>
              <ul className="p-2 bg-base-100 dropdown" id="drop-down">
                <Link>
                  <li>
                    <span>Log-in</span>
                  </li>
                </Link>
                <Link>
                  <li>
                    <span>Sign-up</span>
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
