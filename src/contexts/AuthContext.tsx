"use client"
import React, { createContext, useEffect, useState } from 'react'
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { app } from '../lib/firebaseConfig'
import type { User } from 'firebase/auth';
import { useRouter } from 'next/navigation'

type userAuthContenxtType = {
    user: User | null,
    loading: Boolean,
    createUserWithEmailAndPass: (full_name: string, email: string, password: string) => void,
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
    const router = useRouter()

    useEffect(() => {
        const AuthStateChanged = () => {
            try {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        setUser(user)
                    } else {
                        setUser(null)
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }

        AuthStateChanged()
        console.log(user)
    }, [user])



    const getUser = () => {
        try {
            const getUser = auth.currentUser
            return getUser
        } catch (error) {
            console.error(error)
        }
    }


    const createUserWithEmailAndPass = (full_name: string, email: string, password: string) => {
        setLoading(true)
        console.log("data my input", email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const userC = userCredential.user;
                setUser(userC)
                router.push('/dashboard')

                updateProfile(userC, {
                    displayName: full_name
                }).then(() => {
                    console.log('update name user: ', full_name)
                }).catch((error) => {
                    console.error(error)
                })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log("error singIn: ", errorCode, errorMessage)
            }).finally(() => setLoading(false))



    }


    const signInEmail = (email: string, password: string) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const userCred = userCredential.user;
                setUser(userCred)
                router.push('/dashboard')
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
            setUser(null)
            router.push('/')
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