import { cartContext } from "./cartContext"; 
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const getQuantity = () => {
        const quantities = cart.map((item) => item.quantity);
        return quantities.reduce((acc, Current) => acc + Current, 0);
    }

    //const addToCart = (item) => setCart([...cart, item]);

    const addToCart = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            setCart((prev) => 
                prev.map((prod) => 
                    prod.id === item.id 
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                )
            );
        }
    }

    const isInCart = (itemId) =>{
        return cart.some(e => e.id === itemId)
    }


    return (
        <cartContext.Provider value={{addToCart, getQuantity, cart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;