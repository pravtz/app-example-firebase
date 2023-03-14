import React, {createContext, useState} from 'react'



const AuthContext = createContext()

export const AuthProvider({ children }: {children: React.ReactNode}) =>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signIn = () => {}
    const signOut = () => {}

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext