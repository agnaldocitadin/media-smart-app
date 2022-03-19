import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useKeyboardHook } from './KeyboardHook'
import styles from './VirtualKeyboard.css'

const VirtualKeyboard = (props) => {

    const { className, buttonClass } = props

    const {
        chars,
        shift,
        specialChars,
        handleKeyEvent,
        handleSpace,
        handleBackspace,
        handleSpecialChars
    } = useKeyboardHook(props, true)

    return(
        <div className={`${styles.qwertKeys} ${className}`}>
            { chars.map((char, key) => <button key={key} value={char} onClick={useCallback(() => handleKeyEvent(char))} className={buttonClass}>{ shift ? char.toUpperCase() : char }</button>) }
            <button className={buttonClass} onClick={handleSpecialChars}>{ specialChars ? shift ? "ABC" : "abc" : "!$%"}</button>
            <button className={buttonClass} onClick={useCallback(() => handleKeyEvent("@"))}>@</button>
            <button className={buttonClass} onClick={useCallback(() => handleKeyEvent(".com"))}>.com</button>
            <button className={buttonClass} onClick={useCallback(() => handleKeyEvent("."))}>.</button>
            <button className={buttonClass} onClick={useCallback(() => handleKeyEvent("!"))}>!</button>
            <button className={buttonClass} onClick={handleSpace}>{"Space"}</button>
            <button className={buttonClass} onClick={handleBackspace}>{"Backspace"}</button>
        </div>
    )
}

VirtualKeyboard.propTypes = {
    buttonClass: PropTypes.string,
    overrideMemory: PropTypes.string,
    notifyMemoryChanges: PropTypes.func
}

export default VirtualKeyboard