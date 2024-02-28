import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FrontendLayout({ children }) {
  return (
    <>
      <header>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
              <Nav className="me-auto">
                <Nav.Link as={Link} href="/">Home</Nav.Link>
                <Nav.Link as={Link} href="about">About</Nav.Link>
                <Nav.Link as={Link} href="contact">Contact</Nav.Link>         
              </Nav>
           
                
          {true && (
            <div style={{ display: 'flex' }}>
              {false ? (
                <a href="/home" className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Home</a>
              ) : (
                <>
                  {/* <Nav.Link><Link href="/login">Log in</Link></Nav.Link> */}
                  <Nav.Link as={Link} href="/login" className="btn btn-secondary" style={{ marginRight: '10px'}}>Login</Nav.Link>

                  {true && (
                    // <Nav.Link><Link href="/register">Register</Link></Nav.Link>
                    <Nav.Link as={Link} href="/register" className="btn btn-secondary">Register</Nav.Link>

                  )}
                </>
              )}
            </div>
          )}
          

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
