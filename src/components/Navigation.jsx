import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'

const Navigation = () => {
  return (
    <Navbar
      bg="danger"
      variant="dark"
    >
      <Container className="justify-content-start">
        
        <Link to="/" className="text-white ms-3 text-decoration-none">
          Home &#127968;
        </Link>
        <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
          Contacto &#128210;
        </Link>
      </Container>
      <Navbar.Brand className="nav">Happy Cake  &#127856;</Navbar.Brand>
    </Navbar>
  );
};
export default Navigation;
