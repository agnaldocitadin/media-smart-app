import React, { useCallback } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import i18n from '../../globals/i18n'
import { HomeRounded, MovieRounded, TvRounded, LiveTvRounded, LanguageRounded, CategoryRounded, Group, SentimentSatisfied } from '@material-ui/icons'

const styles = theme => ({
    list: {
        width: 250
    }
})

const mainOptions = [
    { name: "movies",  path: "/dashboard/movies", icon: <MovieRounded/> },
    { name: "tv-shows",  path: "/dashboard/tv-shows", icon: <TvRounded/> },
    { name: "channels",  path: "/dashboard/channels", icon: <LiveTvRounded/> },
]

const otherOptions = [
    { name: "languages",  path: "/dashboard/languages", icon: <LanguageRounded/> },
    { name: "genres",  path: "/dashboard/genres", icon: <CategoryRounded/> },
    { name: "users",  path: "/dashboard/users", icon: <Group/> },
]

const customerOptions = [
    { name: "customers",  path: "/dashboard/customers", icon: <SentimentSatisfied/> },
]

const MenuDrawer = ({ open, onClose, history, classes }) => {

    const handleItemClick = useCallback((option) => {
        history.push({ pathname: option.path })
    }, [])

    return (
        <Drawer open={open} onClose={onClose}>
            <div tabIndex={0} role="button" onClick={onClose} onKeyDown={onClose}>
                <div className={classes.list}>
                    
                    <ListItem button>
                        <ListItemIcon><HomeRounded/></ListItemIcon>
                        <ListItemText primary={i18n.t("home")}/>
                    </ListItem>

                    <Divider/>

                    <List>
                        { mainOptions.map((option, key) => (
                            <ListItem button key={key} onClick={() => handleItemClick(option)}>
                                <ListItemIcon>{option.icon}</ListItemIcon>
                                <ListItemText primary={i18n.t(option.name)}/>
                            </ListItem>
                        )) }
                    </List>

                    <Divider/>

                    <List>
                        { otherOptions.map((option, key) => (
                            <ListItem button key={key} onClick={() => handleItemClick(option)}>
                                <ListItemIcon>{option.icon}</ListItemIcon>
                                <ListItemText primary={i18n.t(option.name)}/>
                            </ListItem>
                        )) }
                    </List>

                    <Divider/>
                    
                    <List>
                        { customerOptions.map((option, key) => (
                            <ListItem button key={key} onClick={() => handleItemClick(option)}>
                                <ListItemIcon>{option.icon}</ListItemIcon>
                                <ListItemText primary={i18n.t(option.name)}/>
                            </ListItem>
                        )) }
                    </List>

                </div>
            </div>
        </Drawer>
    )
}

export default withRouter(withStyles(styles, { withTheme: true })(MenuDrawer))