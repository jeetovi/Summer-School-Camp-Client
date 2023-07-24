import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../../firebaseConfig";

export const AuthContex = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()
const AuthPorvidets = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoading] = useState(true)

  // regester
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  signIn
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
//   google sign
const signIn = (email,password) => {
    return signInWithPopup(auth, googleAuthProvider)
}

  // On Auth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth State Change ", currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  });
  // Sign out
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    SignIn,
    logOut,
    loding
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthPorvidets;
