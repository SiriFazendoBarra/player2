import { createContext, useContext, useEffect, useState } from "react";

import { useDataContext } from "./DataContext";
import { useLoginContext } from "./LoginContext";

const CartContext = createContext()

export default function CartProvider({ children }) {

    const { logged, user, setUsers, users, cart, setCart } = useLoginContext()
    const { market } = useDataContext()
    const [buttonState, setButtonState] = useState(null)
    let [cartTotal, setCartTotal] = useState(0)
    let [cartAmount, setCartAmount] = useState(0)

    const getCart = () => {
        if (user.logged) {
            setCart(user.cart)
        } else
            return
    }

    const addToCart = (id) => {
        setCart([...cart,
        {
            id: id,
            quantity: 1
        }
        ])
        getTotal()
    }

    const addItem = (id) => {
        cart[cart.findIndex(ele => ele.id == id)].quantity++
        setCart(cart)
        getTotal()
    }

    const removeItem = (id) => {
        cart[cart.findIndex(ele => ele.id == id)].quantity--
        setCart(cart)
        getTotal()
    }

    const getTotal = () => {
        let suma = 0
        let total = 0
        for (const index of cart) {
            suma += index.quantity
            total += index.quantity * market[market.findIndex(ele => ele.id == index.id)].price
        }
        setCartAmount(suma)
        setCartTotal(total)
        if (logged) {
            users[users.findIndex(ele => ele.id == user.id)].cart = cart
            setUsers(users)
        }
    }

    useEffect(() => {
        getCart()
    }, [user.logged])

    useEffect(() => {
        getTotal()
    }, [cart])

    return (

        <CartContext.Provider value={{
            cart, setCart, setButtonState, buttonState,
            addToCart,
            addItem,
            removeItem,
            cartAmount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)