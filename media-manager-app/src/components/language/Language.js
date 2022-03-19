import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

const styles = theme => {}

const Language = () => {
    return (
        <span>Idiomas</span>
    )
}

export default withRouter(withStyles(styles, { withTheme: true})(Language))