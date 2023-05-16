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
