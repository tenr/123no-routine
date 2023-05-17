import { useState, useEffect } from "react";
import { auth, db } from "../../config/firebase";
import AuthContext from "./AuthContext";
import {
  collection,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
        }
        // setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
