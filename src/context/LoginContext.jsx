import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./DataContext";


const LoginContext = createContext()

export default function LoginProvider({ children }) {

    const [favorites, setFavorites] = useState([])
    const [cart, setCart] = useState([])
    const navigate = useNavigate()
    const { users, setUsers } = useDataContext()
    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState({})
    const [checkUser, setCheckUser] = useState(false)

    const getLogin = (email, password) => {
        if (users.some(ele => ele.email == email && ele.password == password)) {
            users[users.findIndex(ele => ele.email == email)].logged = true
            setUser(users[users.findIndex(ele => ele.email == email)])
            setUser(prevState => ({ ...prevState, logged: true }))
            navigate("/profile")
            setCheckUser(false)
        }
        else {
            console.log(email, password)
            setCheckUser(true)
        }
    }

    const editUser = (info) => {
        users[users.findIndex(ele => ele.id == user.id)] = info
        setUsers(users)
        setUser(users[users.findIndex(ele => ele.id == user.id)])
    }

    const Logout = () => {

        users[users.findIndex(ele => ele.id == user.id)] = { ...user, logged: false, favorites: favorites, cart: cart }
        setUsers(users)
        setUser({})
        setFavorites([])
        setCart([])

    }

    return (
        <LoginContext.Provider value={{
            checkUser, setCheckUser,
            favorites, setFavorites,
            cart, setCart,
            getLogin,
            Logout,
            editUser,
            user,
            setUser,
            edit,
            setEdit
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext)