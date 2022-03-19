import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; 
import ListItemText from '@material-ui/core/ListItemText'; 
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import i18n from '../../globals/i18n'
import { useDashboardHook } from './DashboardHook';
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter, Route } from 'react-router-dom'
import Language from '../language/Language';
import css from './Dashboard.module.css'
import MenuDrawer from '../menu-drawer/MenuDrawer';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: 200
    },
    list: {
        width: 250
    },
})

const Dashboard = (props) => {
    const { classes } = props;
    const { drawerOpen, toggleDrawer } = useDashboardHook()
    return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                
                <Typography variant="h6" color="inherit" className={classes.grow}>Media Manager App</Typography>
                
                <IconButton color="inherit">
                    <Badge badgeContent={3} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <MenuDrawer open={drawerOpen} onClose={toggleDrawer}/>
                
            </Toolbar>
        </AppBar>

        <Snackbar open={false}/>

        <div className={css.content}>
            {/* Rotas */}
            <Route path='*/languages' component={Language} />
            {/* ... */}
        </div>

    </div>
    )
}

export default withRouter(withStyles(styles, { withTheme: true })(Dashboard))