import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setcartList] = useState([])

    const addToCart = (item) => {
        
        const duplicate = cartList.find(producto => producto.id === item.id )

        if (duplicate === undefined) {
            setcartList( [ ...cartList, item ] )
        }

    }

    const emptyCart = () => {
        setcartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart
        }}>
            { children }

        </CartContext.Provider>
    )
}

export default CartContextProvider


