import {createContext, FC, PropsWithChildren, useContext, useEffect, useState} from "react";
import {ShoppingCart} from "../components/ShoppingCart";
import {IProducts} from "../interfaces/IProducts";
import {productService} from "../services";
import {useLocalStorage} from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({} as Cart)

export function ShoppingContext() {
    return useContext(ShoppingCartContext)
}
interface CartItem {
    id: number,
    quantity: number
}
interface Cart {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
    products: IProducts[]
}
interface ShopCart extends PropsWithChildren {
}

const ShoppingContextProvider: FC<ShopCart> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart-list',[])
    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(() => {
        productService.getAll().then(({data}) => setProducts(data));
    }, []);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseCartQuantity(id: number) {
        setCartItems(current => {
            if (current.find(item => item.id === id) == null) {
                return [...current, {id, quantity: 1}]
            } else {
                return current.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(current => {
            if (current.find(item => item.id === id)?.quantity === 1) {
                return current.filter(item => item.id !== id)
            } else {
                return current.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: number) {
        setCartItems(current => {
            return current.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity,
                closeCart,
                openCart,
                products
            }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    );
};

export {ShoppingContextProvider};