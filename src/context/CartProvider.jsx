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

    const removeItem = (itemId) =>{
        const cartUpdate = cart.filter((item) => item.id !== itemId);
        setCart(cartUpdate);
    }

    const clearcart = () => setCart([]);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);


    return (
        <cartContext.Provider value={{addToCart, getQuantity, cart, removeItem, clearcart, total, totalQuantity}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;