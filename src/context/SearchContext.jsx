import { createContext, useContext, useState } from "react";
import { useDataContext } from "./DataContext";

const SearchContext = createContext()

export default function SearchProvider({ children }) {

    const [searchBar, setSearchBar] = useState("")
    const [categories, setCategories] = useState("")
    const { market } = useDataContext()

    const handleFilter = (filterIndex) => {
        if (filterIndex == 1) {
            market.sort((item1, item2) => {
                const title1 = item1.title.toLowerCase()
                const title2 = item2.title.toLowerCase()
                if (title1 < title2) return -1
                if (title1 > title2) return 1
                return 0
            })
        }
        if (filterIndex == 2) {
            market.sort((item1, item2) => {
                const title1 = item1.title.toLowerCase()
                const title2 = item2.title.toLowerCase()
                if (title1 < title2) return 1
                if (title1 > title2) return -1
                return 0
            })
        }
        if (filterIndex == 3) {
            market.sort((item1, item2) => {
                const title1 = parseInt(item1.price)
                const title2 = parseInt(item2.price)
                if (title1 < title2) return -1
                if (title1 > title2) return 1
                return 0
            })
        }
        if (filterIndex == 4) {
            market.sort((item1, item2) => {
                const title1 = parseInt(item1.price)
                const title2 = parseInt(item2.price)
                if (title1 < title2) return 1
                if (title1 > title2) return -1
                return 0
            })
        }
    }
    return (
        <SearchContext.Provider value={{
            searchBar, setSearchBar, categories, setCategories, handleFilter
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext)