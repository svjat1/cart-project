
import {Col, Row} from "react-bootstrap";
import {Item} from "./Item";
import {CartItem} from "./CartItem";
import {ShoppingContext} from "../context/ShoppingCOntext";

const Store = () => {

 const {products} = ShoppingContext()

    return (
        <div>
            <Row lg={3} md={2} xs={1} className="g-3">
                {products.map(product => (
                    <Col key={product.id}>
                        <Item product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};


export {Store};