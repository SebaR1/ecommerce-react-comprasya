import { Card, Button } from "react-bootstrap";

const Item = ({ id, img, name, price, stock, descrip, category }) => {
    return (        
      <Card className="d-flex justify-content-center align-items-center detail-product">  
        <Card.Img className="img-detail-product" variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Precio: ${price}</p> 
            <p>Stock: {stock}</p>  
            <p>Descripcion: {descrip}</p>
            <p>Categoria: {category}</p>
          </Card.Text>
            <Button variant="info" className="w-100">Comprar</Button>
        </Card.Body>
      </Card>
    );
  }

export default Item;