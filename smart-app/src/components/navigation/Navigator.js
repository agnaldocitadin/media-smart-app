import React from 'react'
import Focusable from './Focusable'

export default () => {
    return (
        <React.Fragment>
            <div id="navigator"/>
            <Focusable id="_first_focusable" selectable={false}/>
        </React.Fragment>
    )
}