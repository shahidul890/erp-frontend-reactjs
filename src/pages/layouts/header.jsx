import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';


function header({ t, i18n }) {
  
  return (
    <Navbar collapseOnSelect fixed='top' expand="lg" variant="dark" style={{ background: "linear-gradient(to right, rgba(87, 1, 173, 1), rgba(144, 3, 158, 1))" }}>
      <Container>

        {/* website Icons */}
        <Navbar.Brand href="/">
          <h3 className='m-0'>ERP</h3>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Middle top Nav */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='me-3'> <Link to="/" className='text-decoration-none text-light'> <b> {t('home')} </b> </Link> </Nav.Link>
            <Nav.Link className='me-3'> <Link to="/features" className='text-decoration-none text-light'> <b> Features </b> </Link> </Nav.Link>
            <Nav.Link className='me-3'> <Link to="/pricing" className='text-decoration-none text-light'> <b> Pricing </b> </Link> </Nav.Link>
            <Nav.Link className='me-3'> <Link to="/blogs" className='text-decoration-none text-light'> <b> Blog </b> </Link></Nav.Link>
            <Nav.Link className='me-3'> <Link to="/support" className='text-decoration-none text-light'> <b> Support </b> </Link></Nav.Link>
          </Nav>

          {/* Right top nav */}
          <Nav className="ms-auto">
              <Nav.Link className='me-3' href="#home">
                <FaGlobe className='me-2'/>
                <b>English</b>
              </Nav.Link>
              <Nav.Link className='me-3'>
                <button className='btn btn-outline-light'><Link to="/login" className='text-decoration-none text-light'>Log in</Link></button>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withTranslation()(header);