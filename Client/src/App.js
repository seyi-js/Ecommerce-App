import React, { useEffect } from 'react';
import Homeheader from './components/homeHeader'
import Banner from './components/Banner'
import SubNavbar from './components/subNavbar'
import Collections from './components/Collections'
import AdminBoard from '../src/components/Admin/Admin'
import Footer from './components/footer'
import Chart from './components/chart'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {loadUser} from './actions/authActions'

export const App =()=> {


    useEffect( () => {
        
        store.dispatch( loadUser() );
    }, [] );
  
    
        return (
             <Provider store={store}>
                <Router>
                    <React.Fragment>
                    
                    <Homeheader />
                    <Route exact path="/" >
                        <Banner />
                       
                        <Collections />
                        
                        <SubNavbar />
                        
                        
                    </Route>
                    <Route path="/admin" component={AdminBoard} />




                    
                    <Footer />
                </React.Fragment>
                </Router>
                </Provider>
        )
    
}

export default App
