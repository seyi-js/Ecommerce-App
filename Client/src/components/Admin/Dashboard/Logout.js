import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Footer = ( props ) => {

    return (
        <React.Fragment>
        <footer class="footer">
            <div class="container text-center text-white">
                    <List>
                        
                    <ListItem >
                    <ListItemIcon><ExitToAppIcon /> </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </ListItem>
                    </List>
            </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;