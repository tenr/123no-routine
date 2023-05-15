import { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import AuthContext from "./AuthContext";

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "../../config/firebase";

// export const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   function signUp(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password);
//   }

//   function loginWithGoogle() {
//     const provider = new auth.GoogleAuthProvider();
//     return auth.signInWithPopup(provider);
//   }

//   function logout() {
//     return auth.signOut();
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signUp,
//     login,
//     loginWithGoogle,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
