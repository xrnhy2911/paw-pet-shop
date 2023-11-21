import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./header.css";
import { BsCart3, BsPerson } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <Navbar
        // bg="dark"
        //variant={"dark"}
        expand="lg"
        className="custom-header"
        fixed="top"
        collapseOnSelect
      >
        <Container fluid className="custom-header">
          <Navbar.Brand href="#" id="my-brand">
            PawPet <br /> Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="custom-sub-nav">
                About
              </Nav.Link>
              <NavDropdown
                title="Link"
                id="navbarScrollingDropdown"
                align={"end"}
                className="custom-sub-nav"
              >
                <NavDropdown.Item
                  className="custom-dropdown-item"
                  href="/products"
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="custom-dropdown-item"
                  href="#action4"
                >
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="custom-dropdown-item"
                  href="#action5"
                >
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <BsCart3 />
                {/* Replace with your actual shopping cart component */}
              </Nav.Link>
              <NavDropdown
                title={<BsPerson />} // Use UserAvatar as the dropdown title
                id="navbarScrollingDropdown"
                align={"end"}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/profile"
                  className="custom-dropdown-item"
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action4"
                  className="custom-dropdown-item"
                >
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* <Image src="bag.png" roundedCircle /> */}
            {/* <Form className="d-flex">
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
              </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
