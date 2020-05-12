import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './auth/RegisterModal'
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
        const { isAuthenticated, user, isAdmin } = this.props.auth;

        const Admin = (
            <React.Fragment>
            <NavItem>
            <NavLink>
                <Link to='/dashboard' style={ { color: 'white', textDecoration: 'none' } }>AdminBoard</Link>
            </NavLink>
        </NavItem>
            </React.Fragment>
        )

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
                <NavLink>
                    <Link to='/login' style={ { color: 'white', textDecoration: 'none' } }>Login</Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <RegisterModal />
                </NavItem>
            </React.Fragment>
            
)
        return (
            <React.Fragment>
        
                <Navbar  dark expand="sm" className="mb-5 bg-info">
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
                                {(isAuthenticated && isAdmin)? Admin : null}

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
