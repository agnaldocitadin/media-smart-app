import React from 'react'
import { useBannerHook } from './BannerHook'
import Banner from './Banner'

export default (props) => {
    const hook = useBannerHook(props)
    return <Banner {...props} source={hook.source} name={props.name}/>
}