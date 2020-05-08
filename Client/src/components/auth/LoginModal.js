import React, { useState, useEffect } from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login , register} from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions'



export const LoginModal = ( props/*So as to access props */ ) => {

    const [ modal, setModal ] = useState( false );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ message, setMessage ] = useState( null );


    LoginModal.propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    const toggle = () => {
        if ( message !== null ) {
            props.clearErrors()
        } 
            setModal( !modal );
        
    } 

    
    const onSubmit = ( e ) => {
        e.preventDefault();
        const user = { email, password
        }
        props.login( user )
        
        

    }

    useEffect( () => {
        const { error, isAuthenticated } = props;

        if ( error.id === 'LOGIN_FAIL' ) {
            setMessage( error.msg.msg )
        } else {
            setMessage( null )
        }

        if ( modal ) {
            if ( isAuthenticated ) {
                toggle();
            }
        }

    } )


    return (
        <React.Fragment>
            <NavLink onClick={ toggle } href="#">
                Login
    </NavLink>
            <Modal isOpen={ modal } toggle={ toggle }>
                <ModalHeader toggle={ toggle }>
                    Login  <i className="fa fa-user-login" />
                </ModalHeader>
                <ModalBody>
                    { message ? <Alert color="danger">{ message }</Alert> : null }
                    <Form onSubmit={e=> onSubmit(e) }>
                        <FormGroup>
                            
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter Email" className="mb-3" onChange={e => setEmail(e.target.value) } />
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter Password" className="mb-3"
                                onChange={e => setPassword(e.target.value) } />
                            
                            <Button color="dark" style={ { marginTop: "2rem" } } block>
                                Login
                    </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );

}

const mapStateToProps = ( state ) => ( {
    isAuthenticated: state.auth.isAuthenticated, /* From Index/reudcer => authReducer then here*/
    error: state.error /* same here */
} )


export default connect( mapStateToProps, {
    login,register, /*The function you are trying to call/ imported
Function*/clearErrors
} )( LoginModal );
