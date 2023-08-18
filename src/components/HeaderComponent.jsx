import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BsFillCartDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>eCom</Navbar.Brand>
        <Link to="/" className="mx-2">
          products
        </Link>
        <Link to="/demo" className="mx-2">
          Demo
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/cart">
            <Button>
              <BsFillCartDashFill />
              {cartProducts.length}
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
