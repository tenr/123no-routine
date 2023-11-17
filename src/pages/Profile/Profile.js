import React from "react";
import AuthContext from "../../components/contexts/AuthContext";
import { useState, useEffect, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Form } from "../../components/Form/Form";
import "./Profile.css";
import Typewriter from "typewriter-effect";

export const Profile = () => {
  /* ------------------- useContext ----------------------- */
  const { user } = useContext(AuthContext);

  /* ----------- database data state variable ---------------- */
  const [fetchedUserData, setFetchedUserData] = useState({});

  /* ----------------------- Message state ----------------------- */
  const [userNickname, setUserNickname] = useState("");

  /* ---------- GET user data & setFetchedUserData ------------ */
  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (user && user.user_id) {
        // Make sure user is defined and has an ID
        const userDocRef = doc(db, "users", user.user_id);

        try {
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            setFetchedUserData([docSnap.data()]); // Set the current user's data
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchCurrentUser();
  }, [user]);

  const currentUser = fetchedUserData.data;

  function typeMessage(currentUser) {
    if (currentUser) {
      const userNickname =
        currentUser.nickname || currentUser.name || currentUser.email;
      return userNickname;
    }
  }

  useEffect(() => {
    setUserNickname(typeMessage(currentUser));
  }, [currentUser]);

  return (
    <>
      {userNickname ? (
        <div className="profile-intro">
          <div className="typwriter-wrapper">
            <h1 className="profile-intro__heading">
              Whats good,
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`${userNickname}?`).start();
                }}
              />
              ?
            </h1>
          </div>

          <br></br>
          <ul className="profile-ul">
            <li className="profile-li">
              We get free gear from some of your favorite brands. So, maybe its
              a good idea to update this form. Just saying...
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
          <h1 className="profile-intro__heading">Whats good {user?.email}?</h1>
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
