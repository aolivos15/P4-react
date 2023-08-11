import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css'
import logo from '../../assets/img/logo.png';

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-aqua fs-4">
            <Container>
            <Navbar.Brand href="/"><img src={logo} alt="Logo de Dulces Migajas" className='navbar-img' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-gap">
                        <Nav.Link href="/" className='nav-link'>Inicio</Nav.Link>
                        <Nav.Link href="/menu">Carta</Nav.Link>
                        <Nav.Link href="/reservas">Reservas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}