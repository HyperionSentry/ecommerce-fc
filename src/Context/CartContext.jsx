import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setcartList] = useState([])

    const addToCart = (item) => {
        
        if(isInCart(item.id)){
            
            const duplicate = cartList.find(producto => producto.id === item.id)
            const { cantidad } = duplicate
            
            duplicate.cantidad = item.cantidad + cantidad
            const newCart = [ ...cartList ]
            setcartList(newCart)

        } else {

            setcartList ( [...cartList, item ])
        }


    }

    const emptyCart = () => {
        setcartList([])
    }

    const isInCart = (id) =>{
        return cartList.some( producto => producto.id === id )
    }

    const deleteOne = (id) => {
        setcartList(cartList.filter(x => x.id !== id))  
    }

    const sumaTotal = () => {
        return cartList.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0)
    }

    const cantidad = () => {
        return cartList.reduce((acum, item) => acum += item.cantidad, 0)
    } 

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            deleteOne,
            sumaTotal,
            cantidad 
        }}>
            { children }

        </CartContext.Provider>
    )
}

export default CartContextProvider


