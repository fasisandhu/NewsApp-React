import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark py-3">
        <Container fluid >
          <Navbar.Brand href="/">MyNews</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/"><Nav.Link href="#action1">General</Nav.Link></Link>
              <Link to="/business"><Nav.Link href="#action2">Buisness</Nav.Link></Link>
              <Link to="/technology"><Nav.Link href="#action2">Technology</Nav.Link></Link>
              <Link to="/sports"> <Nav.Link href="#action2">Sports</Nav.Link></Link>
              <Link to="/science"><Nav.Link href="#action2">Science</Nav.Link></Link>
              <Link to="/entertainment"><Nav.Link href="#action2">Entertainment</Nav.Link></Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="f2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>        
      </Navbar>

    </>
  );
};
