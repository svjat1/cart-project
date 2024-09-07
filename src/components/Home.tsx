import {Card} from "react-bootstrap";

const Home = () => {
    return (
        <Card style={{
            height: '450px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Verdana, sans-serif',
            textAlign: 'center',
            margin: '5px'
        }}>
            <p style={{
                fontSize: '18px',
                color: '#333',
                lineHeight: '1.5'
            }}
            >
                Welcome!<br/>

                This educational project is designed to simulate the purchasing process and functionality of a shopping cart.
                We aimed to recreate the core features you might find on a real e-commerce site.
                Add items to your cart and explore how the order processing system works in this project.<br/>

                We hope you find it interesting to explore its features!
            </p>
        </Card>
    )
        ;
};

export {Home};