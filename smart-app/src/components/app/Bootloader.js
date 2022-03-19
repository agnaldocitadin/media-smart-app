import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import css from './Bootloader.module.css'

const Bootloader = ({ bindControls, close }) => {

    const[ module, setModule ] = useState()

     useEffect(() => {
        import("./ApplicationEntryPoint").then(module => {
            setModule(module)
        })
    }, [])

    if (module) {
        const ApplicationEntryPoint = module.default
        return <ApplicationEntryPoint bindControls={bindControls} close={close} />
    }

    return <h1 className={css.splash}>[ Splash + logomarca aqui ]</h1>
}

Bootloader.propTypes = {
    bindControls: PropTypes.func.isRequired,
    close: PropTypes.func
}

export default Bootloader