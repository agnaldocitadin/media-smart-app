import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Bootloader from '../../src/components/app/Bootloader'

const bindRemoteControls = ({ up, down, left, right, enter, back }) => {
    const fn = e => {
        const keyMapping = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, ENTER: 13, BACK: 10009 }
        
        if (e.keyCode === keyMapping.DOWN) {
            down()
        }
        if (e.keyCode === keyMapping.UP) {
            up()
        }
        if (e.keyCode === keyMapping.LEFT) {
            left()
        }
        if (e.keyCode === keyMapping.RIGHT) {
            right()
        }
        if (e.keyCode === keyMapping.ENTER) {
            enter()
        }
        if (e.keyCode === keyMapping.BACK) {
            back()
        }
    }

    document.addEventListener("keydown", fn)
    return () => document.removeEventListener("keydown", fn)
}

const handleClose = () => {
    tizen.application.getCurrentApplication().exit()
}

ReactDOM.render(<Bootloader bindControls={bindRemoteControls} close={handleClose}/>, document.getElementById("root"))