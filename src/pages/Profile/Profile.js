import React from "react";
import "./Profile.css";
import { Form } from "../../components/Form/Form";
import { useContext } from "react";
import { auth, googleProvider, db } from "../../config/firebase";
import AuthContext from "../../components/contexts/AuthContext";
import Typewriter from "typewriter-effect";

export const Profile = () => {
  const user = useContext(AuthContext);

  return (
    <>
      {user ? (
        <div className="profile-intro">
          <div className="typwriter-wrapper">
            <h1 className="profile-intro__heading">
              Whats good,
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`${user.user_id}?`)
                    .pauseFor(1000)
                    .start();
                }}
              />
            </h1>
          </div>

          <br></br>
          <ul className="profile-ul">
            <li className="profile-li">
              Sometimes we get free gear from some of your favorite brands. So,
              maybe its a good idea, to update this form. Just saying...
            </li>
            <li className="profile-li">
              Click the "Update Profile" button if you ever want to update your
              details
            </li>
            <li className="profile-li">More updates coming soon...</li>
          </ul>
        </div>
      ) : (
        <div className="profile-intro">
          <h1 className="profile-intro__heading">Whats good, ?</h1>
          <br></br>
          <ul className="profile-ul">
            <li className="profile-li">
              Sometimes we get free gear from some of your favorite brands. So,
              maybe its a good idea, to update this form. Just saying...
            </li>
            <li className="profile-li">
              Click the "Update Profile" button if you ever want to update your
              details
            </li>
            <li className="profile-li">More updates coming soon...</li>
          </ul>
        </div>
      )}

      <Form />
    </>
  );
};
