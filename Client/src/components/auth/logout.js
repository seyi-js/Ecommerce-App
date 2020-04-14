import React, { Fragment, Component } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types'



export const Logout = (props)  =>{
    logout.ropTypes = {
        logout: PropTypes.func.isRequired
    }
    
        return (
    <Fragment>
      <NavLink onClick={props.logout} href="#">
        Logout
      </NavLink>
    </Fragment>
  );
    
  
};

export default connect(null, { logout })(Logout);