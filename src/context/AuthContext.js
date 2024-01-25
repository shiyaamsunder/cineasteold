import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db, provider } from '../firebase'
import { collection, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [onhomepage, setOnHomePage] = useState(true)
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState('')


    const clearErrors = () => {
        setPasswordError('')
        setEmailError('')
    }
    const signUp = (email, password, redirect, name) => {
        clearErrors()
        createUserWithEmailAndPassword(auth, email, password).then(u => {
            // db.collection('users').doc(name).set({
            //     name: name,
            //     bucket: []
            // })

            setDoc(doc(db, "users", name), {
                name: name,
                bucket: []
            })
            redirect()
        })
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

    async function login(email, password, redirect) {
        clearErrors()
        return signInWithEmailAndPassword(auth, email, password).then(u => {
            redirect()
        }).catch(err => {
            switch (err.code) {
                case 'auth/invaild-email':
                    setEmailError('Invalid-email')
                    break;
                case 'auth/user-not-found':
                    setEmailError('User not found')
                    break;
                case 'auth/user-disabled':
                    setEmailError('User disabled')

                    break
                case 'auth/wrong-password':
                    setPasswordError('Invalid Password')
                    break
                default:
                    break
            }
        })
    }

    const googleSignUp = async (redirect) => {
        // const snapshot = await db.collection('users').get()
        const snapshot = await getDocs(collection(db, "users"))
        const docIds = snapshot.docs.map(doc => doc.id)

        signInWithPopup(auth, provider).then(u => {
            if (docIds.filter(id => (u.user.displayName === id)).length < 1) {
                 setDoc(doc(db, "users", u.user.displayName),{
                    name: u.user.displayName,
                    bucket: []
                })
                // db.collection('users').doc(u.user.displayName).set({
                //     name: u.user.displayName,
                //     bucket: []
                // })
            }

            redirect()
        })

    }

    function setUserName(name) {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                updateProfile(user, {
                    displayName: name
                })


            } else {
                console.log('No User')
            }

        })

    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
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
        passwordError,
        emailError,
        onhomepage, setOnHomePage

    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>)
}


