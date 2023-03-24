import { createContext, useContext, useEffect } from "react";

import { useLoginContext } from "./LoginContext";

const FavoritesContext = createContext()

export default function FavoritesProvider({ children }) {

    const { favorites, setFavorites } = useLoginContext()
    const { user } = useLoginContext()

    const getFavorites = () => {
        if (user.logged) {
            setFavorites(user.favorites)
        } else
            return
    }

    const handleFavorites = (id) => {

        if (user.logged) {
            if (favorites.some(item => item == id)) setFavorites(favorites.filter(item => item != id))
            else setFavorites([...favorites, id])
        }
    }

    useEffect(() => {
        getFavorites()
    }, [user.logged])

    return (

        <FavoritesContext.Provider value={{ favorites, setFavorites, handleFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => useContext(FavoritesContext)