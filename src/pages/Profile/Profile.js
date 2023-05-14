import React from "react";
import AuthContext from "../../components/contexts/AuthContext";
import { useState, useEffect, useContext } from "react";
import { updateDoc, collection, getDocs } from "firebase/firestore";
import { auth, googleProvider, db } from "../../config/firebase";
import { Form } from "../../components/Form/Form";
import "./Profile.css";
import Typewriter from "typewriter-effect";

export const Profile = () => {
  /* ------------------------------- useContext ------------------------------- */
  const user = useContext(AuthContext);
  /* --------------------------- Database reference --------------------------- */
  const userCollectionRef = collection(db, "users");
  /* ---------------------- database data state variable ---------------------- */
  const [fetchedUserData, setFetchedUserData] = useState([]);

  /* ------------------- GET user data & setFetchedUserData ------------------- */
  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(userCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchedUserData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, []);

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
                    .typeString(`${user.email}?`)
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
