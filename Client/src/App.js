import React, { useEffect} from 'react';
import Homeheader from './components/homeHeader'
import Banner from './components/Banner'
import Layout from './components/Admin/Dashboard/Layout'
import Collections from './components/Collections'
import ItemDetails from './components/ItemDetails'
import Checkout from './components/Checkout'
import { Switch, Route } from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actions/authActions';
import { connect } from 'react-redux'
import Footer from './components/Admin/Dashboard/Footer'
import {AllowCheckout, AllowAdmin} from './routeProtect/Protection'
import Login from './components/auth/Login'
export const App = ( props ) => {
    

    

    
  
useEffect( () => {

    store.dispatch( loadUser() );
   
}, [] );


const { isAuthenticated, isAdmin } = props.auth;
    return (

        <Switch>
            <React.Fragment>
                 <AllowCheckout path="/checkout" isAuthenticated={isAuthenticated} component={ Checkout } /> 
                <Route exact path="/" >
                    <Homeheader />
                    <Banner />

                    <Collections />



                    <Footer />
                </Route>
                <Route path="/login" component={ Login}/>
                <Route exact path="/dashboard" isAuthenticated={isAuthenticated} isAdmin={isAdmin}  component={ Layout} />





                <Route path="/item/details/:id" component={ ItemDetails } />






            </React.Fragment>
        </Switch>

    )

}

const mapStateToProps = ( state ) => ( {
    auth: state.auth
    
} )

export default connect( mapStateToProps, null )( App );
