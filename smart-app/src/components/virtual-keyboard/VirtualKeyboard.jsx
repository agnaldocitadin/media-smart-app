import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useKeyboardHook } from './KeyboardHook'
import styles from './VirtualKeyboard.module.css'
import Focusable from '../navigation/Focusable'

const VirtualKeyboard = (props) => {
    
    const { 
        className = "", 
        buttonClass, 
        handleBack, 
        defaultRoutes, 
        spaceRoutes, 
        backspaceRoutes 
    } = props

    const {
        chars,
        handleKeyEvent,
        handleSpace,
        handleBackspace
    } = useKeyboardHook(props, false)

    return(
        <span className={`${styles.baseKeys} ${className}`}>
            { chars.map((char, key) => 
                <FocusableButton
                    key={key}
                    pathKey="keyboard"
                    routes={defaultRoutes}
                    text={char} 
                    handleClick={useCallback(() => handleKeyEvent(char))} 
                    handleBack={handleBack}
                    buttonClass={buttonClass}/>
                ) }
            
            <FocusableButton 
                text="Space"
                pathKey="space"
                routes={spaceRoutes}
                handleClick={handleSpace} 
                handleBack={handleBack}
                buttonClass={buttonClass}/>

            <FocusableButton 
                text="Backspace"
                pathKey="backspace"
                routes={backspaceRoutes}
                handleClick={handleBackspace} 
                handleBack={handleBack}
                buttonClass={buttonClass}/>
        </span>
    )
}

const FocusableButton = ({ text, handleClick, handleBack, buttonClass, pathKey, routes }) => {
    return (
        <Focusable
            pathKey={pathKey}
            routes={routes}
            onClick={handleClick}
            onBack={handleBack}
            className={buttonClass}>
            { text }
        </Focusable>
    )
}

VirtualKeyboard.propTypes = {
    buttonClass: PropTypes.string,
    overrideMemory: PropTypes.string,
    notifyMemoryChanges: PropTypes.func,
    handleBack: PropTypes.func,
    defaultRoutes: PropTypes.object,
    spaceRoutes: PropTypes.object,
    backspaceRoutes: PropTypes.object
}

export default VirtualKeyboard