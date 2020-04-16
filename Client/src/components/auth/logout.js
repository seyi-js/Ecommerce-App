import React, { Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom'



export const Logout = (props)  =>{
    logout.ropTypes = {
        logout: PropTypes.func.isRequired
  }
  const history = useHistory()
  const onLogout = () => {
    props.logout()
    history.push('/')
    }
        return (
    <Fragment>
      <NavLink onClick={onLogout} href="#">
        Logout
      </NavLink>
    </Fragment>
  );
    
  
};

export default connect(null, { logout })(Logout);