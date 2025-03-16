import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import CartList from './CartList';
import { Link } from 'react-router-dom';


function CartContainer () {
    const { cart } = useContext(cartContext);

    if (cart.length === 0){
      return(
          <div className=''>
              <h1>El carrito esta vacio</h1>
              <Link className='' to='/catalogo'>Volver al inicio</Link>
          </div>
      )
    }

    return (   
          <>  
            <h1 className="py-5 text-color-home text-center d-flex justify-content-center align-items-center">
                Container del Carrito
            </h1>
            <CartList cart={cart}/>
            
          </>       
    ) 
}

export default CartContainer;