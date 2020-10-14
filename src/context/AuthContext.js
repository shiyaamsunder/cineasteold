import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, provider } from '../firebase'
import { useHistory } from 'react-router-dom'

export const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [watchList, setWatchList] = useState([])
    const [isWatchList, setIsWatchList] = useState(false)
    const [onhomepage, setOnHomePage] = useState(true)
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState('')


    const clearErrors = () => {
        setPasswordError('')
        setEmailError('')
    }
    const signUp = (email, password) => {
        setName('')
        clearErrors()
        auth.createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'auth/weak-password':
                        setPasswordError(err.message)
                        break;
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message)
                        break;
                    default:
                        break;
                }

            })

    }
    console.log(passwordError)

    async function login(email, password) {
        clearErrors()
        return auth.signInWithEmailAndPassword(email, password).catch(err => {
            switch (err.code) {
                case 'auth/invaild-email':
                case 'auth/user-not-found':
                case 'auth/user-disabled':
                    setEmailError(err.message)
                    break
                case 'auth/wrong-password':
                    setPasswordError(err.message)
                    break
                default:
                    break
            }
        })
    }

    function googleSignUp() {
        return auth.signInWithPopup(provider)
    }

    function setUserName(name) {

        auth.onAuthStateChanged(user => {
            if (user) {
                user.updateProfile({
                    displayName: name
                })
            } else {
                console.log('No User')
            }

        })

    }

    function logout() {
        return auth.signOut()
    }

    const addToWatchList = (id, title, url, rating) => {

        setWatchList([...watchList, {
            id: id,
            title: title,
            url: url,
            rating: rating
        }])



    }

    const removeFromWatchList = (id) => {
        const newWatchList = watchList.filter(movie => {
            return movie.id !== id
        })
        setWatchList(newWatchList)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe

    }, [])



    const value = {
        currentUser,
        setCurrentUser,
        signUp,
        googleSignUp,
        login,
        logout,
        setUserName,
        name,
        setName,
        addToWatchList,
        watchList,
        removeFromWatchList,
        isWatchList,
        setIsWatchList,
        passwordError,
        emailError,
        onhomepage, setOnHomePage

    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>)
}


