import React, {useEffect, useState} from 'react';
import {Container, Navbar, NavDropdown} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const token = localStorage.getItem('loginToken');
    const nickName = localStorage.getItem('nickName');

    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: true });
        }
    }, [token, navigate]);

    function handleLogout(){
        localStorage.removeItem("loginToken")
        navigate('/login', { replace: true });
    }

    return (
        <Navbar className="bg-body-tertiary" style={ {marginBottom: "5%" } }>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title={nickName} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={handleLogout}>Sign out</NavDropdown.Item>
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


const  Layout=()=> {
    return(
        <div>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
