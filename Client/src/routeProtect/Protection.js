import React from 'react';
import { Route, Redirect } from 'react-router-dom';


//Protect CheckOut
export const AllowCheckout = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (isAuthenticated) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}


//Admin Protection
export const AllowAdmin = ( { component: Component,isAdmin,isAuthenticated, ...rest } ) => {
  return (
    <Route { ...rest } render={
      props => {
        if ( isAuthenticated && isAdmin) {
          return <Component { ...rest } { ...props } />
        } else {
          return <Redirect to={
            {
              pathname: '/',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

