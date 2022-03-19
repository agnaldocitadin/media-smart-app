import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

const styles = theme => {}

const Login = (props) => {
    return (
        <span><a href="#" onClick={() => {
            props.history.push({ pathname: "/dashboard"})
        }}>Login</a></span>
    )
}

export default withRouter(withStyles(styles, { withTheme: true})(Login))