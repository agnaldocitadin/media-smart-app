import React, { useCallback } from 'react'
import { useMappedState } from 'redux-react-hook'
import CSS from './Mainframe.module.css'

const Mainframe = () => {
    const { playingMedia } = useMappedState(useCallback(state => ({ playingMedia: state.mediaDetailReducer.playingMedia })))
    return <div className={CSS.mainframe} style={{ opacity: playingMedia ? 0 : 1 }}/>
}

export default Mainframe