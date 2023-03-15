import { Router } from 'next/router'
import React, { createContext, useState } from 'react'
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../lib/firebaseConfig'


const AuthContext = createContext()

export const AuthProvider({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);

    const createUserWithEmailAndPass = ({ email, password }: any) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const userC = userCredential.user;
                setUser(userC)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error singIn: ", errorCode, errorMessage)
            }).finally(() => setLoading(false))
    }
    const signInGoogle = () => { }

    const signInEmail = () => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const userCred = userCredential.user;
                setUser(userCred)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error singIn: ", errorCode, errorMessage)
            })
            .finally(() => setLoading(false))
    }


    const signOutEmail = () => {
        setLoading(true)

        signOut(auth).then(() => {
            console.log("logout successful")
        }).catch((error) => {
            console.log("error logout: ", error)
        }).finally(() => setLoading(false))
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signInEmail,
            signOutEmail,
            signInGoogle,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext