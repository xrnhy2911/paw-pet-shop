import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../header/header.css";
export default function Header() {
  return (
    <>
      <Router>
        <Navbar
          // bg="dark"
          // variant={"dark"}
          // expand="lg"
          className="custom-header"
        >
          <Container className="custom-header">
            <Navbar.Brand href="#">PawPet <br /> Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  id="custom-search"
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="custom-search-btn" variant="outline-success">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Path tới các trang khác */}
        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}
