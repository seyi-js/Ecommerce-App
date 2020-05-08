import React, { useState } from 'react'
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'
export const Side = ( props ) => {

    const [ activeTab, setActiveTab ] = useState( '1' );
    //Toggler
    const toggle = ( tab ) => {
        if ( activeTab !== tab ) {
            setActiveTab( tab )
        }
    }
    return (
        <React.Fragment>
            <Nav tabs>
                <NavItem>
                    <NavLink className={ classNames( { active:activeTab === '1' } ) }
                        onClick={ () => {
                            toggle( '1' );
                        } }>
                        <i className="icon-list"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={ classNames( { active:activeTab === '2' } ) }
                        onClick={ () => {
                            toggle( '2' );
                        } }>
                        <i className="icon-speech"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={ classNames( { active: activeTab === '3' } ) }
                        onClick={ () => {
                            toggle( '3' );
                        } }>
                        <i className="icon-settings"></i>
                    </NavLink>
                </NavItem>
            </Nav>
        </React.Fragment>
    )
}

export default Side