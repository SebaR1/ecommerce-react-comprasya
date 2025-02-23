import Item from './Item';
import { Row, Col } from "react-bootstrap";


export const ItemList = ({ products }) => { 
    return ( 
        <Row className="d-flex justify-content-center g-4 py-5">
           {products?.map( ( prod ) => (
                <Col key={ prod.id} lg={3} md={6} sm={6} xs={12} className='d-flex justify-content-center'>    
                    <Item { ...prod }/>
                </Col>
            ))}
        </Row>  
    ); 
}