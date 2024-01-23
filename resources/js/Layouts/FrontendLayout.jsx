import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function FrontendLayout({ children }) {
    return (
<>
<header>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="/">Lawnians</Navbar.Brand> */}
        {/* <Link href="/">Lawnians</Link> */}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link href="/">Home</Link></Nav.Link>
          <Nav.Link><Link href="about">About</Link></Nav.Link>
          <Nav.Link><Link href="contact">Contact</Link> </Nav.Link>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>   

            <div >
                {children}
            </div>

            <footer>
                <p>this is footer</p>
            </footer>
        </>
    );
}
