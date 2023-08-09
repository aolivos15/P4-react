import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import './navBar.css'

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="color-nav">
            <Container>
                <Navbar.Brand href="/">[Inserte logo aquí]</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/menu">Carta</Nav.Link>
                        <Nav.Link href="/reservas">Reservas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}