import {Header} from "../components";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Container className="mb-5">
                <Outlet/>
            </Container>
        </div>


    );
};

export {MainLayout};