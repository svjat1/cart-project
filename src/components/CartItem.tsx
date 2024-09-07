import {FC} from "react";
import {ShoppingContext} from "../context/ShoppingCOntext";

import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";

interface IProps {
    id: number,
    quantity: number,
}

const CartItem: FC<IProps> = ({id, quantity}) => {
    const {products} = ShoppingContext()
    const {removeFromCart} = ShoppingContext()
    const item = products.find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center flex-column'>
            <img alt={item.title} src={item.image} style={{width: '125px', height: '75px', objectFit: 'contain'}}/>
            <div>
                <span style={{fontSize: '.90rem'}}>{item.title}</span> {
                quantity > 1 && <span className='text-danger' style={{fontSize: '.65rem'}}>{quantity}x</span>
            }
            </div>
            <div className='ms-auto'>
                <div className='text-muted' style={{fontSize: '.75rem'}}>
                    {formatCurrency(item.price)}
                </div>
                <div> {formatCurrency(item.price * quantity)}</div>
            </div>
            <Button variant='outline-danger' style={{width: '315px', height: '25px', lineHeight: '10px'}}
                    onClick={() => removeFromCart(item.id)}>&times;</Button>
            <hr style={{width:'100%', border: '1px solid #ddd', margin: '10px 0'}} />
        </Stack>
    );
};

export {CartItem};