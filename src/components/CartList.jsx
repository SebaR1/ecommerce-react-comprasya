import React from "react";
import { ListGroup } from "react-bootstrap";

const CartList = ({ cart }) => { 
    return ( 
        <ListGroup>
        {cart.map(item => 
            <ListGroup.Item className='border-0 bg-transparent d-flex justify-content-center align-items-center' key={item.id}>
                <div className='d-flex justify-content-between w-50 align-items-center'>
                    <div className='w-50'>
                        <span className='fw-bold'>{item.name}</span>
                    </div>
                    <div className='w-25'>
                        <hr className='m-0' style={{borderTop: '1px solid black'}} />
                    </div>
                    <div className='w-25 text-end'>
                        <span className='text-muted'>${item.price}</span>
                    </div>
                </div>
            </ListGroup.Item>)}
        </ListGroup>
    ); 
}


export default CartList;