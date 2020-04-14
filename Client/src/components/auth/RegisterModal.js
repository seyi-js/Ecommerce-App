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
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions'



export const RegisterModal = ( props/*So as to access props */ ) => {

    const [ modal, setModal ] = useState( false );
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ password2, setPassword2 ] = useState( '' );
    const [ message, setMessage ] = useState( null );


    RegisterModal.propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
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
        const newUser = {
            name,
            email,
            password,
            password2
        }
        props.register( newUser )
        

    }

    useEffect( () => {
        const { error, isAuthenticated } = props;

        if ( error.id === 'REGISTER_FAIL' ) {
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
                Register
    </NavLink>
            <Modal isOpen={ modal } toggle={ toggle }>
                <ModalHeader toggle={ toggle }>
                    Register <i className="fa fa-user-plus" />
                </ModalHeader>
                <ModalBody>
                    { message ? <Alert color="danger">{ message }</Alert> : null }
                    <Form onSubmit={ onSubmit }>
                        <FormGroup>
                            <Label for="name">Name</Label>

                            <Input type="text" name="name" id="name" placeholder="Enter Name" className="mb-3" onChange={e => setName(e.target.value) } />
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter Email" className="mb-3" onChange={e => setEmail(e.target.value) } />
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter Password" className="mb-3"
                                onChange={e => setPassword(e.target.value) } />
                            <Label for="password">Confirm Password</Label>
                            <Input type="password" name="password2" id="password2" placeholder="Confirm Password"
                                className="mb-3" onChange={ e => setPassword2(e.target.value) } />
                            <Button color="dark" style={ { marginTop: "2rem" } } block>
                                Register
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
    register, /*The function you are trying to call/ imported
Function*/clearErrors
} )( RegisterModal );
