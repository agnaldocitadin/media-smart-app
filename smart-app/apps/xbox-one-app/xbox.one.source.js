import React from 'react'
import ReactDOM from 'react-dom'
import Gamepad from '../../src/lib/gamepad-0.0.5'
import Bootloader from '../../src/components/app/Bootloader'

const gamepad = new Gamepad()
const bindGamepadControls = ({ up, down, left, right, enter, back }) => {
    
    const padMapping = { 
        UP: "d_pad_up", 
        DOWN: "d_pad_down", 
        LEFT: "d_pad_left", 
        RIGHT: "d_pad_right", 
        ENTER: "button_1", 
        BACK: "button_2" 
    }

    gamepad.on("press", padMapping.UP, up)
    gamepad.on("press", padMapping.DOWN, down)
    gamepad.on("press", padMapping.LEFT, left)
    gamepad.on("press", padMapping.RIGHT, right)
    gamepad.on("press", padMapping.ENTER, enter)
    gamepad.on("press", padMapping.BACK, back)
    
    return () => {
        gamepad.off("press", padMapping.UP)
        gamepad.off("press", padMapping.DOWN)
        gamepad.off("press", padMapping.LEFT)
        gamepad.off("press", padMapping.RIGHT)
        gamepad.off("press", padMapping.ENTER)
        gamepad.off("press", padMapping.BACK)
    }
}

const handleClose = () => {
    console.log("close")
}

ReactDOM.render(<Bootloader bindControls={bindGamepadControls} close={handleClose} />, document.getElementById("root"))