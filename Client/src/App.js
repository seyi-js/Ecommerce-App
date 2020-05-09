import React, { useEffect, useHistory } from 'react';
import Homeheader from './components/homeHeader'
import Banner from './components/Banner'
// import './App.scss'
import Home from './components/Admin/Dashboard/Home'
import AddProduct from './components/Admin/Dashboard/AddProduct'
import Collections from './components/Collections'
import ItemDetails from './components/ItemDetails'
import Checkout from './components/Checkout'
import { Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actions/authActions';
import { connect } from 'react-redux'
import Footer from './components/Admin/Dashboard/Footer'

export const App = () => {


    useEffect( () => {

        store.dispatch( loadUser() );
    }, [] );



    return (
        <Provider store={ store }>
            <Switch>
                <React.Fragment>


                    <Route exact path="/" >
                        <Homeheader />
                        <Banner />

                        <Collections />



                        <Footer/>
                    </Route>

                    <Route exact path="/dashboard" component={ Home } />
                    <Route exact path="/manageproduct" component={ AddProduct } />



                    <Route path="/checkout/:total" component={ Checkout } />
                    <Route path="/item/details/:id" component={ ItemDetails } />






                </React.Fragment>
            </Switch>
        </Provider>
    )

}


export default App
