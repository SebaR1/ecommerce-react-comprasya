import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Item = ({ id, img, name, price, stock }) => {
    return (        
      <Card className="d-flex justify-content-center align-items-center card-cat">  
        <Card.Img className="img-card-cat" variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> Precio: ${price} </Card.Text>
          <Card.Text> Stock: {stock} </Card.Text>
          <Link to={`/catalogo/item/${id}`}>
            <Button variant="info" className="w-100">Ver detalle</Button>
          </Link>  
        </Card.Body>
      </Card>
    );
  }

export default Item;