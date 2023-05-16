// import { auth, googleProvider, db } from "../../config/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useState } from "react";
// import "./Auth.css";
// import { setDoc, collection, doc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

// export const Auth = () => {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [error, setError] = useState("");

// const userRef = collection(db, "users");
// const navigate = useNavigate();
// // const [loggedIn, setLoggedIn] = useState(false);

// const handleSignUp = async () => {
//   try {
//     const { user } = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     await setDoc(doc(userRef, user.uid), {
//       email: user.email,
//       user_id: user.uid,
//       isAdmin: false,
//     });
//     //should i use the id of the protected route  here?
//     navigate("/profile");
//   } catch (error) {
//     // console.error(error.message);
//     setError(`Whoops! Looks like either your email is incorrect or your
//     password is not atleast 6 characters long. Give it another
//     try.`);
//     setTimeout(() => {
//       setError("");
//     }, 7000);
//   }
// };

// const handleLoginWithEmailAndPassword = async () => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     navigate("/profile");
//   } catch (error) {
//     setError("We dont know you yet. Sign-up so we can be friends!");
//     setTimeout(() => {
//       setError("");
//     }, 5000);
//   }
// };

// const handleSignInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider);

//     const user = result.user;
//     await setDoc(doc(userRef, user.uid), {
//       email: user.email,
//       user_id: user.uid,
//     });
//     //should i use the id of the protected route  here?
//     navigate("/profile");
//   } catch (error) {
//     console.error(error.message);
//   }
// };
// const handleSignOut = async () => {
//   try {
//     // console.log(email, password);
//     await signOut(auth);
//   } catch (error) {
//     // Handle any errors that may occur
//     console.error(error.message);
//   }
// };

//   return <div></div>;
// };
