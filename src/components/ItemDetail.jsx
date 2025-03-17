import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Item = ({ id, img, name, price, stock, descrip, category }) => {
  const  { addToCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setQuantity(quantity);
    const item = {id, name, price};
    addToCart(item, quantity);
    setQuantity(1);
  }

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  
  return (        
      <Card className="d-flex justify-content-center align-items-center detail-product">  
        <Card.Img className="img-detail-product" variant="top" src={img} alt={name} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text> Precio: ${price} </Card.Text>
            <Card.Text> Stock: {stock} </Card.Text>
            <Card.Text> Descripción: {descrip} </Card.Text>
            <Card.Text> Categoria: {category} </Card.Text>
            <ButtonGroup className="d-flex align-items-center justify-content-center" aria-label="">
              <Button variant="secondary" onClick={() => decrement()}>-</Button>
              <Button variant="secondary" onClick={() => handleAddToCart()} disabled={!stock || quantity === 0}>Comprar {quantity}</Button>
              <Button variant="secondary" onClick={() => increment()}>+</Button>
            </ButtonGroup>
        </Card.Body>
      </Card>
    );
  }

export default Item;