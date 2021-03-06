import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Homeheader from '../homeHeader'
import Footer from '../Admin/Dashboard/Footer'
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login , register} from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions'



export const Login = ( props/*So as to access props */ ) => {

   
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ message, setMessage ] = useState( null );
    const history = useHistory();

    Login.propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }


    
    const onSubmit = ( e ) => {
        e.preventDefault();
        const user = { email, password
        }
        props.login( user )
        
        

    }
    const { error, isAuthenticated, isAdmin } = props;

    useEffect( () => {
       
        if ( error.id === 'LOGIN_FAIL' ) {
            setMessage( error.msg.msg )
        } else {
            setMessage( null )
        }
        if ( isAuthenticated ) {
            history.push('/')
        }
        if ( isAuthenticated && isAdmin ) {
            history.push('/dashboard')
        }

    } )


    return (
        <React.Fragment>
            <Homeheader/>
            <Container>
                
            <h3>  Login  <i className="fa fa-user-login" /></h3>
                
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
            </Container>
               <Footer/>
           
        </React.Fragment>
       
    );

}

const mapStateToProps = ( state ) => ( {
    isAuthenticated: state.auth.isAuthenticated, /* From Index/reudcer => authReducer then here*/
    error: state.error, /* same here */
    isAdmin: state.auth.isAdmin
} )


export default connect( mapStateToProps, {
    login,register, /*The function you are trying to call/ imported
Function*/clearErrors
} )( Login );
