import React, { useState, useContext, createContext } from 'react'
import instance from '../axios'



export const MovListContext = createContext()

export function useMovList() {
    return useContext(MovListContext)
}

export const MovListProvider = ({ children }) => {
    const [watchList, setWatchList] = useState(null)
    const [isWatchList, setIsWatchList] = useState(false)
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])


    const fetchMovies = async (fetchUrl) => {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results)
        return request

    }

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