import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export default function NavBar(){
 
  const [stickyClass, setStickyClass] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 700 ? setStickyClass(true) : setStickyClass(false);
    }
  };


    return(
<Navbar  expand="lg" fixed={stickyClass && "top" }  >
      <Container>
        <Navbar.Brand href="#home" className="fw-bolder text-dark "  >TrendMovies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto display-flex align-items-center justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#popular">Popular Movies</Nav.Link>
            <Nav.Link href="#famous">Famous People</Nav.Link>
            <Nav.Link >
            <form className="d-flex">
        <input className="form-control me-2 px-4" type="search" placeholder="Search for Movies" aria-label="Search"></input>
        <button className="btn btn-outline-success fw-bold" type="submit">Search</button>
      </form>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}