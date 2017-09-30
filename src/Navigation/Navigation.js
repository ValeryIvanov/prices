import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Prices
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <IndexLinkContainer to={'/'}>
                        <NavItem>Products</NavItem>
                    </IndexLinkContainer >
                    <IndexLinkContainer to={'/cart'}>
                        <NavItem>Cart</NavItem>
                    </IndexLinkContainer >
                    <IndexLinkContainer to={'/carts'}>
                        <NavItem>Carts</NavItem>
                    </IndexLinkContainer >
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
