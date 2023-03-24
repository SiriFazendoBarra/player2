import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./DataContext";


const RegisterContext = createContext()

export default function RegisterProvider({ children }) {
    const [spanEmail, setSpanEmail] = useState(false)
    const { users, setUsers } = useDataContext()
    const navigate = useNavigate()
    const addUser = (email, password, name) => {
        if (users.some(ele => ele.email == email)) {
            console.log("el usuario ya existe")
            setSpanEmail(true)
        } else {
            setUsers([...users,
            {
                logged: false,
                id: Date.now(),
                password: password,
                email: email,
                name: name,
                address: "",
                birthdate: "",
                favorites: [],
                cart: []
            }
            ])
            navigate("/login")
        }

    }
    return (
        <RegisterContext.Provider value={{ addUser, spanEmail, setSpanEmail }}>
            {children}
        </RegisterContext.Provider>
    )
}

export const useRegisterContext = () => useContext(RegisterContext)