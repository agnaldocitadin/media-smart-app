import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../button/Button'
import { navigationAgent } from '../navigation/NavigationHook'
import { faTimes, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import i18n from '../../globals/i18n'
import CSS from './ViewError.module.css'

const routes = {
    EVENT_LEFT: ["viewErrorButton"],
    EVENT_RIGHT: ["viewErrorButton"],
}

const ViewError = ({ message, handleTry, handleClose }) => {
    
    useEffect(() => {
        navigationAgent.selectFocusable("_bt_tryagain")
        return () => navigationAgent.getCursor().opacity(0)
    }, [])

    return (
        <div className={CSS.content}>
            <span>
                <h1>{message}</h1>
                <p>
                    <Button
                        id="_bt_tryagain"
                        pathKey="viewErrorButton"
                        routes={routes}
                        text={i18n.t("try-again")}
                        icon={faRedoAlt}
                        margin="0 .5vw 0 0"
                        onAction={handleTry}
                        fontSize="2.5vh"/>

                    <Button
                        id="_bt_closeapp"
                        pathKey="viewErrorButton"
                        routes={routes}
                        text={i18n.t("application-exit")}
                        icon={faTimes}
                        margin="0 0 0 .5vw"
                        onAction={handleClose}
                        fontSize="2.5vh"/>
                </p>
            </span>
        </div>
    )
}

ViewError.defaultProps = {
    message: ""
}

ViewError.propTypes = {
    message: PropTypes.string,
    handleTry: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default ViewError