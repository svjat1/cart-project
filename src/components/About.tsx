import {Card} from "react-bootstrap";

const About = () => {
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
               About the Project<br/>
               This project was created as an educational tool to practice the purchasing process and shopping cart
               management. The goal was to replicate key features typically found on real e-commerce platforms. The
               website is developed using React with TypeScript and Bootstrap.<br/>

               It is not a commercial site but provides an introduction to the basics of e-commerce.<br/>

               Thank you for checking out our project!
        </p>
</Card>
)
    ;
};

export {About};