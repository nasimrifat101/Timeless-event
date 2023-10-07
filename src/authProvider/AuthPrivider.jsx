/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
       console.log('user signed in', currentUser);
       setUser(currentUser);
      });
      return () =>{
        unSubscribe();
      }
  },[])

  const logIn = (email,password)=>{
    return signInWithEmailAndPassword(auth, email,password)
  }

const googleLogin=()=>{
   return signInWithPopup(auth,provider);

}

const logOut = () =>{
    return signOut(auth)
}

  const authInfo = {
    createUser,
    logIn,
    googleLogin,
    user,
    logOut,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
