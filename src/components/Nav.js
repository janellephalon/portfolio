// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';

// Icon Imports
import Github from "../assets/square-github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Dev from "../assets/dev.svg";

function Navigation() {
  return (
    <>
      <Navbar className="navbar" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">JP</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/janellephalon">
              <img src={Github} alt="Github" style={{ width: '24px', height: '24px', color: 'white' }} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/janelle-phalon-7b743a157/">
              <img src={LinkedIn} alt="Github" style={{ width: '24px', height: '24px', color: 'white' }} />
            </Nav.Link>
            <Nav.Link href="https://dev.to/janellephalon">
              <img src={Dev} alt="Github" style={{ width: '24px', height: '24px', color: 'white' }} />
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            {/* <Button className='btn btn-sm'>Resume</Button> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
