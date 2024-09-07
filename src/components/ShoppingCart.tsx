import {Offcanvas, Stack} from "react-bootstrap";
import {ShoppingContext} from "../context/ShoppingCOntext";
import React, {FC} from "react";
import {CartItem} from "./CartItem";
import {formatCurrency} from "../utilities/formatCurrency";

interface ISopen {
    isOpen : boolean
}
const ShoppingCart: FC<ISopen> = ({isOpen}) => {
    const {closeCart, cartItems, products} = ShoppingContext()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title> Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item =>(
                        <CartItem key={item.id} {...item}/>
                    ))}
                    <div className='ms-auto fw-bold fs-5'>
                        TOTAL : {formatCurrency(cartItems.reduce((total, cartItem)=>{
                        const item = products.find(i => i.id === cartItem.id)
                        return total + (item?.price || 0) * cartItem.quantity
                    },0)
                    )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export {ShoppingCart};