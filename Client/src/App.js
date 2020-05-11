import React, { useEffect, useHistory } from 'react';
import Homeheader from './components/homeHeader'
import Banner from './components/Banner'
// import './App.scss'
import Layout from './components/Admin/Dashboard/Layout'
import AddProduct from './components/Admin/Dashboard/AddProduct'
import Collections from './components/Collections'
import ItemDetails from './components/ItemDetails'
import Checkout from './components/Checkout'
import { Switch, Route, Redirect } from 'react-router-dom';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actions/authActions';
import { connect } from 'react-redux'
import Footer from './components/Admin/Dashboard/Footer'

export const App = (props) => {


    useEffect( () => {

        store.dispatch( loadUser() );
    }, [] );

    const { isAuthenticated } = props;

    return (
        
            <Switch>
                <React.Fragment>


                    <Route exact path="/" >
                        <Homeheader />
                        <Banner />

                        <Collections />



                        <Footer/>
                    </Route>
                    
                    <Route exact path="/dashboard" component={Layout } />
                    <Route exact path="/manageproduct" component={ AddProduct } />

                    {(isAuthenticated)? <Route path="/checkout" component={ Checkout } />: <Redirect to='/'/> }

                    
                    <Route path="/item/details/:id" component={ ItemDetails } />






                </React.Fragment>
            </Switch>
        
    )

}

const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,null )(App);
