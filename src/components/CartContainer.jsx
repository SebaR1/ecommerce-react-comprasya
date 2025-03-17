import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import CartList from './CartList';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function CartContainer () {
    const { cart } = useContext(cartContext);

    if (cart.length === 0){
      return(
          <div className=''>
              <h1 className="py-5 text-center d-flex justify-content-center align-items-center">
                  No hay productos en el carrito
              </h1>
              <Link className='text-color-home d-flex justify-content-center align-items-center' to="/catalogo">
                <Button className="text-color-home button-home px-5 py-3 fs-4" size="lg">
                    Ir al Catalogo
                </Button>
              </Link>
          </div>
      )
    }

    return (   
          <>  
            <h1 className="py-5 text-color-home text-center d-flex justify-content-center align-items-center">
                Container del Carrito
            </h1>
            <CartList />
            
          </>       
    ) 
}

export default CartContainer;