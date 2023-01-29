import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({}); 

    function signUp(email, password){
        createUserWithEmailAndPassword(auth, email, password); 
        setDoc(doc(db, 'users', email), {
            savedMovies: []
        })
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password )
    }

    function logOut(){
        return signOut(auth); 
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser); 
        }); 
        return ()=>{
            unsubscribe()
        }
    })

  return <AuthContext.Provider value={{logIn, signUp, logOut, user}}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
