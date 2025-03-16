import Button from 'react-bootstrap/Button'; // Importación correcta del botón
import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import '../App.css'
import { cartContext } from '../context/cartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function CartWidget() {
  const { getQuantity } = useContext(cartContext);

  return (
      <Button className="border-0 d-flex justify-content-center align-items-center" variant="outline-dark" size='sm'>
        <FaShoppingCart className='d-flex justify-content-center align-items-center' size={20}/>
        <Badge className="d-flex justify-content-center align-items-center top-0" bg='secondary' >{getQuantity()}</Badge>
      </Button>
  )
}

export default CartWidget