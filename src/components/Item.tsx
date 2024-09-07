import {FC, PropsWithChildren} from "react";
import {IProducts} from "../interfaces/IProducts";
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import {ShoppingContext} from "../context/ShoppingCOntext";

interface IProps extends PropsWithChildren {
    product: IProducts
}

const Item: FC<IProps> = ({product}) => {
    const {id,title,price} = product
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = ShoppingContext()
    const quantity: number = getItemQuantity(id)

    return (
        <Card style={{height: '450px'}}>
            <Card.Img
                variant='top'
                src={product.image}
                height='50%'
                style={{objectFit: 'contain', marginTop:'2%'}}

            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                    <span className='fs-6'>{title}</span>
                    <span className='ms-auto text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100' onClick={()=> increaseCartQuantity(id)}>Add to Cart</Button>
                    ) : (<div className='d-flex align-items-center flex-column' style={{gap: '.5rem'}}>
                        <div className='d-flex align-items-center justify-content-center' style={{gap: '.5rem'}}>
                            <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className='fs-3'>{quantity}</span> in cart
                            </div>
                            <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button variant='danger' size='sm' onClick={()=> removeFromCart(id)} >Remove</Button>
                    </div>)
                    }
                </div>
            </Card.Body>
        </Card>
    );
};

export {Item};