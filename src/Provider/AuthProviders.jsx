//eslint-disable-next-line
import React, { createContext, useEffect, useState } from 'react';
import { getAuth , signInWithEmailAndPassword , onAuthStateChanged , signOut , GoogleAuthProvider ,signInWithPopup, createUserWithEmailAndPassword,  } from "firebase/auth";
// import axios from 'axios';
import app from '../../firebase.config';
import axios from 'axios';
export const AuthContext = createContext(null)

const auth = getAuth(app);
const Goog_leAuth_Provider = new GoogleAuthProvider();

const AuthProviders = ( {children}) => {
    const [user , setuser] = useState(null)
    const [loading , setloading] = useState(true)

    const Create_User = (email , passward) => {
        setloading(true)
        return createUserWithEmailAndPassword (auth ,email, passward )
     }

    const User_Login = (email , passward) => {
        setloading(true)
        return signInWithEmailAndPassword (auth ,email, passward )
     }
    const Google_Login = () => {
        return signInWithPopup(auth, Goog_leAuth_Provider)
     }
    
    
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (current_user) => {
            setuser(current_user)
            console.log(current_user);

if (current_user) {
    axios.post('https://assignment-12-kids-world-server.vercel.app/jwt' , {email: current_user.email})
    .then(data => {
        console.log(data.data.token)
        localStorage.setItem('kids-world-access-token' , data.data.token)
        setloading(false)
    })
}else{
    localStorage.removeItem('kids-world-access-token')
}
setloading(false)


            
            return () => {
                unsubscribe();
            }
          });
    },[])

    const Log_Out = () => {
        return signOut(auth)
    }
    const Auth_Info = {
        user,
        loading,
        Create_User,
        User_Login,
        Log_Out,
        Google_Login,
       
       }
    return (
        <AuthContext.Provider value={Auth_Info}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;