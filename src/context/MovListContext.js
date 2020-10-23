import React, { useState, useContext, createContext } from 'react'
import instance from '../axios'


export const MovListContext = createContext()

export function useMovList() {
    return useContext(MovListContext)
}

export const MovListProvider = ({ children }) => {
    const [watchList, setWatchList] = useState([])
    const [isWatchList, setIsWatchList] = useState(false)
    const [movies, setMovies] = useState([])


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
        fetchMovies
    }
    return (
        <MovListContext.Provider value={value}>
            {children}
        </MovListContext.Provider>
    )
}