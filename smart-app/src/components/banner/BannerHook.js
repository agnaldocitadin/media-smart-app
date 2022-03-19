import { useState, useEffect } from 'react'
import { Aspect } from '../utils/Aspect'
import * as API from '../../../../libstream/src/API'

export const useBannerHook = ({ imagePath }) => {
    
    const [ source, setSource ] = useState("")

    useEffect(() => {
        API.loadImageSource(imagePath, Aspect.resolution()).then(source => setSource(source))
    }, [imagePath])

    return { source }
}