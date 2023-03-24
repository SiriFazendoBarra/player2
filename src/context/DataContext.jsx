import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext()

export default function DataProvider({ children }) {

    const [users, setUsers] = useState([])
    const [market, setMarket] = useState([])
    const [publications, setPublications] = useState([])
    const [data, setData] = useState([])

    const getUsers = async () => {
        const res = await fetch("../users.json")
        const data = await res.json()
        setUsers(data.users)
    }

    const getMarket = async () => {
        const res = await fetch("../market.json")
        const info = await res.json()
        setData(info.results)
    }

    const getPublications = async () => {
        const res = await fetch("/publications.json")
        const info = await res.json()
        setPublications(info.results)
    }

    useEffect(() => {
        getUsers()
        getMarket()
        getPublications()
    }, [])

    useEffect(() => {
        setMarket(data.concat(publications))
    }, [publications])

    return (
        <DataContext.Provider value={{ market, setMarket, publications, setPublications, users, setUsers }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)