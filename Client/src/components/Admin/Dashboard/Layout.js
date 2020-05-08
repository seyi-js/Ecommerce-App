import React from 'react'
import clsx from 'clsx';
import {Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalance from '@material-ui/icons/AccountBalanceWallet';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import Orders from '@material-ui/icons/DirectionsBikeRounded';
import Add from '@material-ui/icons/AddBox';

const drawerWidth = 240;

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create( [ 'margin', 'width' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        } ),
    },
    appBarShift: {
        width: `calc(100% - ${ drawerWidth }px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create( [ 'margin', 'width' ], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        } ),
    },
    menuButton: {
        marginRight: theme.spacing( 2 ),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing( 0, 1 ),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing( 3 ),
        transition: theme.transitions.create( 'margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        } ),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create( 'margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        } ),
        marginLeft: 0,
    },
} ) );

const Layout = ( props ) => {

    const classes = useStyles();
    const theme = useTheme();
    const [ open, setOpen ] = React.useState( false );

    const handleDrawerOpen = () => {
        setOpen( true );
    };

    const handleDrawerClose = () => {
        setOpen( false );
    };
  
    return (
        <React.Fragment>
           
            <div className={ classes.root }>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={ clsx( classes.appBar, {
                        [ classes.appBarShift ]: open,
                    } ) }
               className="bg-info" >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={ handleDrawerOpen }
                            edge="start"
                            className={ clsx( classes.menuButton, open && classes.hide ) }
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                           <DashboardIcon/> {' '} Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    
                    className={ classes.drawer }
                    variant="persistent"
                    anchor="left"
                    open={ open }
                    classes={ {
                        paper: classes.drawerPaper,
                    } }
                >
                    <div className={ classes.drawerHeader } className="bg-info">
                        <IconButton onClick={ handleDrawerClose }>
                            { theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
                        </IconButton>
                    </div>
                    <Divider />
                    <List className="bg-info">
                        
                        <ListItem button >
                        <ListItemIcon> <HomeIcon /></ListItemIcon>
                            <ListItemText><Link to="/dashboard" style={{color: 'White', textDecoration: 'none'}}>Dashboard</Link></ListItemText>
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon> <Orders/></ListItemIcon>
                            <ListItemText><Link to="">Orders</Link></ListItemText>
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon> <AccountBalance /></ListItemIcon>
                            <ListItemText><Link to="">Account</Link></ListItemText>
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon> <Add/></ListItemIcon>
                            <ListItemText><Link to="">Post Product</Link></ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <List className="bg-info">
                        { [ 'Settings' ].map( ( text, index ) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>{ index  === 0 ? <SettingsIcon /> : '' }</ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        ) ) }
                    </List>
                </Drawer>
                <main
                    className={ clsx( classes.content, {
                        [ classes.contentShift ]: open,
                    } ) }
                >
                    <div className={ classes.drawerHeader } />
                    
                    <Typography >
                        
                        
                        
                    </Typography>
                   
                </main>
            </div>


        </React.Fragment>
    )
}


export default Layout