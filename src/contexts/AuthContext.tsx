"use client"
import React, { createContext, useState } from 'react'
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../lib/firebaseConfig'
import type { User } from 'firebase/auth';

type userAuthContenxtType = {
        user: User | null,
        loading: Boolean,
        createUserWithEmailAndPass: (email: string, pass: string) => void,
        signInEmail: (email: string, pass: string) => void,
        signOutEmail: () => void,
        getUser: () => void,
        isLogIn: () => Boolean,
}

const userAuthContext = createContext<userAuthContenxtType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const getUser = () => {
        try {
            const getUser = auth.currentUser
            return getUser
        } catch (error) {
            console.error(error)
        }
    }

    const createUserWithEmailAndPass = ({ email, password }: any) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const userC = userCredential.user;
                setUser(userC)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log("error singIn: ", errorCode, errorMessage)
            }).finally(() => setLoading(false))
        }
    

    const signInEmail = (email: string, password: string) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email , password)
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

    const isLogIn = () => !!user
    

    return (
        <userAuthContext.Provider value={{
            user,
            getUser,
            isLogIn,
            loading,
            createUserWithEmailAndPass,
            signInEmail,
            signOutEmail
      
        }}>
            {children}
        </userAuthContext.Provider>
    )
}

export const AuthConsumer = userAuthContext.Consumer

export default userAuthContext