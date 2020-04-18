import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './auth/RegisterModal'
import LoginModal from './auth/LoginModal'
import Logout from './auth/logout'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'

export class Homeheader extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState( {
            isOpen: !this.state.isOpen
        } );
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <React.Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>
                            { user ? `Welcome ${ user.name }` : '' }
                        </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </React.Fragment>
        );

        const visitorsLinks = (
            <React.Fragment>
            <NavItem>

                <LoginModal />

            </NavItem>
            <NavItem>
                <RegisterModal />
                </NavItem>
            </React.Fragment>
            
)
        return (
            <React.Fragment>
                <Navbar color="dark" dark expand="sm" className="mb-5 bg-blue">
                    <Container fluid={true}>
                        <NavbarBrand href='/'>Shopify
            </NavbarBrand>
                        <NavbarToggler onClick={ this.toggle } />
                        <Collapse isOpen={ this.state.isOpen } navbar>
                            <Nav className="ml-auto" navbar>

                                <NavItem>
                                    <NavLink>
                                        <Link to='/' style={ { color: 'white', textDecoration: 'none' } }>Home</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to='/admin' style={ { color: 'white', textDecoration: 'none' } }>AdminBoard</Link>
                                    </NavLink>
                                </NavItem>

                                { isAuthenticated ? authLinks : visitorsLinks }

                                <NavItem>
                                    <NavLink>
                                        <Link to="" style={ { color: 'white', textDecoration: 'none' } }>Shop Now</Link>
                                    </NavLink>
                                </NavItem>
                               
                                <NavItem>
                                    <NavLink>
                                        <a href="https://github.com/seyi-js/Ecommerce-App/" target="_blank" style={ { color: 'white', textDecoration: 'none' } }><i className="fab fa-github"></i> GitHub </a>
                                    </NavLink>
                                </NavItem>
                                
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

            </React.Fragment>
        )


    }


}
const mapStateToProps = state => ( {
    auth: state.auth
} )

export default connect( mapStateToProps, null )( Homeheader )
