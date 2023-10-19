import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            console.log('current user',currentUser)
            setUser(currentUser)
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
       return signInWithPopup(auth, provider)

    }
    const logout=()=>{
        setLoading(true);
        return signOut(auth);

    }
    const infoUser={
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logout
    }
    return (
        <AuthContext.Provider value={infoUser}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;