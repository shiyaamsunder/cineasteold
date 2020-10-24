import React, { useState, useContext, createContext, useEffect } from 'react'
import instance from '../axios'
import { db } from '../firebase'
import { useAuth } from './AuthContext'


export const MovListContext = createContext()

export function useMovList() {
    return useContext(MovListContext)
}

export const MovListProvider = ({ children }) => {
    const [watchList, setWatchList] = useState()
    const [isWatchList, setIsWatchList] = useState(false)
    const [movies, setMovies] = useState([])
    const { currentUser } = useAuth()
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])


    const fetchMovies = async (fetchUrl) => {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results)
        return request

    }

    useEffect(() => {
        if (currentUser !== null) {
            db.collection('users').doc(currentUser.displayName).onSnapshot(snapshot => setWatchList(snapshot.data().bucket))
        }
    }, [setWatchList, currentUser])

    const value = {
        watchList,
        setWatchList,
        isWatchList,
        setIsWatchList,
        movies,
        setMovies,
        fetchMovies,
        query, setQuery,
        searchResults, setSearchResults
    }
    return (
        <MovListContext.Provider value={value}>
            {children}
        </MovListContext.Provider>
    )
}