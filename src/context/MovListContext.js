import React, { useState, useContext, createContext } from 'react'
// import { auth, db, provider } from '../firebase'

export const MovListContext = createContext()

export function useMovList() {
    return useContext(MovListContext)
}

export const MovListProvider = ({ children }) => {
    const [watchList, setWatchList] = useState({})
    const [isWatchList, setIsWatchList] = useState(false)


    const value = {
        watchList,
        setWatchList,
        isWatchList,
        setIsWatchList
    }
    return (
        <MovListContext.Provider value={value}>
            {children}
        </MovListContext.Provider>
    )
}