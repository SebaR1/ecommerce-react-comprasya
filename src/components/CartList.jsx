import { ListGroup, Card, Container, Button } from 'react-bootstrap';
import '../stylesComponents/CartList.css';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

const CartList = () => { 
    const { cart, removeItem, total } = useContext(cartContext);

    return ( 
        <Container className="cart-container">
            <Card className="cart-card">
                <Card.Body>
                    <ListGroup variant="flush">
                        {cart.map(item => (
                            <ListGroup.Item className="cart-item" key={item.id}>
                                <div className="cart-item-details">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-quantity">x{item.quantity}</span>
                                    <span className="cart-item-price">Unidad: ${item.price}</span>
                                    <span className="cart-item-subtotal">Subtotal: ${(item.quantity * item.price).toFixed(2)}</span>
                                </div>
                                <Button 
                                    variant="danger" 
                                    className="cart-item-remove"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Eliminar
                                </Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    
                    {/* Mostrar el total acumulado */}
                    <div className="cart-total mt-4">
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span className="fw-bold">Total:</span>
                            <span className="fw-bold">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    ); 
}

export default CartList;