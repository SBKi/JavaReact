import React from 'react';
import {Container, Navbar, NavDropdown} from "react-bootstrap";

function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#logout">Sign out</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function Footer() {
    return (
        <div></div>
    );
}


function Layout({ children }) {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default Layout;
