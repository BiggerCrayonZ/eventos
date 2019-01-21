import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false };
    }
    toggle() { this.setState({ isOpen: !this.state.isOpen }); }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="sm">
                    <NavbarBrand href="/">Gestor de Eventos</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem> <Link className="nav-link" to="/"> Principal </Link> </NavItem>
                            <NavItem> <Link className="nav-link" to="/events"> Eventos </Link> </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;
