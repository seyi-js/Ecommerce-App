import React from 'react'
import clsx from 'clsx';
import Edit from './ManageProduct/Edit'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditIcon from '@material-ui/icons/Edit';
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
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings';
import Orders from '@material-ui/icons/DirectionsBikeRounded';
import Add from '@material-ui/icons/AddBox';
import Footer from './Footer'
import Logout from './Logout'
import Home from './Home'
import AddProduct from './AddProduct'
import Delete from './ManageProduct/Delete'
import Order from './Order'
import Verification from './ManageAccount/Verification'
import ListTransactions from './ManageAccount/Transactions/ListTransactions';
import Refund from './ManageAccount/Refund'
import Customers from './ManageAccount/Customers'
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
    const [ anchorEl2, setAnchorEl2 ] = React.useState( null );
    const [ anchorEl, setAnchorEl ] = React.useState( null );
    
    const [ toggle, setToggle ] = React.useState( 1 )
    const handleDrawerOpen = () => {
        setOpen( true );
    };

    const handleDrawerClose = () => {
        setOpen( false );
    };
    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
    };

    const handleClickAccount = ( event ) => {
        setAnchorEl2( event.currentTarget );
    };

  

    const handleClose = () => {

        setAnchorEl( null );
        setAnchorEl2( null );
        setOpen( false );
    };


    const handleCloseD = ( num ) => {
        setAnchorEl2( null );
        setAnchorEl( null );
        setToggle( num )
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
                            <DashboardIcon /> { ' ' } Dashboard
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

                        <ListItem button onClick={ () => setToggle( 1 ) }>
                            <ListItemIcon> <HomeIcon /></ListItemIcon>
                            <ListItemText >Dashboard</ListItemText>
                        </ListItem>

                        <ListItem button onClick={ () => setToggle( 2 ) }>
                            <ListItemIcon> <Orders /></ListItemIcon>
                            <ListItemText>Orders</ListItemText>
                        </ListItem>
                        <ListItem button  >
                            <ListItemIcon> <AccountBalance /></ListItemIcon>
                            <ListItemText onClick={ handleClickAccount }>Manage Account</ListItemText>
                            <Menu
                                id="simple-menu"
                                anchorEl={ anchorEl2 }
                                keepMounted
                                open={ Boolean( anchorEl2 ) }
                                onClose={ handleClose }

                            >

                                <MenuItem onClick={e=> handleCloseD(7)  }>Vefifications</MenuItem>
                                <MenuItem onClick={ e=> handleCloseD(8) }>Transactions</MenuItem>
                                <MenuItem onClick={ e=> handleCloseD(9) }>Refund</MenuItem>
                                <MenuItem onClick={ e=> handleCloseD(10) }>Invoices</MenuItem>
                                <MenuItem onClick={ e=> handleCloseD(11) }>Customers</MenuItem>

                            </Menu>

                        </ListItem>

                        <ListItem button onClick={ () => setToggle( 4 ) }>
                            <ListItemIcon> <Add /></ListItemIcon>
                            <ListItemText>Add Product</ListItemText>
                        </ListItem>

                        <ListItem button >
                            <ListItemIcon> <EditIcon /></ListItemIcon>
                            <ListItemText onClick={ handleClick }>Manage Products</ListItemText>
                            <Menu
                                id="simple-menu"
                                anchorEl={ anchorEl }
                                keepMounted
                                open={ Boolean( anchorEl ) }
                                onClose={ handleClose }

                            >

                                <MenuItem onClick={e=> handleCloseD(5) }>Delete Product</MenuItem>
                                <MenuItem onClick={e=> handleCloseD(6) }>Edit Product</MenuItem>

                            </Menu>
                        </ListItem>

                    </List>
                    <Divider />
                    <List className="bg-info">
                        { [ 'Settings' ].map( ( text, index ) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>{ index === 0 ? <SettingsIcon /> : '' }</ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        ) ) }
                    </List>
                    <Logout />
                </Drawer>
                <main
                    className={ clsx( classes.content, {
                        [ classes.contentShift ]: open,
                    } ) }
                >
                    <div className={ classes.drawerHeader } />


                    { ( toggle === 1 ) ? <Home /> : ( toggle === 2 ) ? <Order /> : ( toggle === 4 ) ? <AddProduct /> : ( toggle === 5 ) ? <Delete /> : ( toggle === 6 ) ? <Edit /> : ( toggle === 7 ) ? <Verification /> :
                        (toggle === 8 ) ? <ListTransactions/>: (toggle === 9 ) ? <Refund/>: (toggle === 11 ) ? <Customers/>: null }
                </main>
            </div>


            <Footer />
        </React.Fragment>
    )
}

const getStyle = {

    color: 'White',
    textDecoration: 'none'

}
export default Layout