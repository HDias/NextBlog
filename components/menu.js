import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Link from 'next/link';

function Menu() {
    return (<div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">IsaDoula</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link href="/">
                    <a class="nav-link">Home</a>
                </Link>
                <Link href="/blog">
                    <a class="nav-link">Blog</a>
                </Link>
                <NavDropdown title="Vídeos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Vídeos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                
                <Link href="/about">
                    <a class="nav-link">Sobre IsaDoula</a>
                </Link>
                
                <Link href="/contact">
                    <a class="nav-link">Fale Comigo</a>
                </Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    </div>)
}

export default Menu;