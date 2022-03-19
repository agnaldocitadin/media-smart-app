import { useState, useCallback, useEffect } from 'react'
import { useMappedState } from 'redux-react-hook'
import { Aspect } from '../utils/Aspect'
import * as API from '../../lib/API'

export const useChannelHook = ({ media }) => {

    const [ logo, setLogo ] = useState({ source: null, stretch: null })

    useEffect(() => {
        API.loadResource(media, Aspect.resolution(), API.ResourceTypes.CHANNEL_LOGO).then(source => {
            
            new Promise((resolve) => {
                let virtualIMG = new Image()
                virtualIMG.src = source
                setTimeout(() => resolve(virtualIMG), 5);

            }).then((vi) => {
                setLogo({ source: source, stretch: vi.width > vi.height ? "X" : "Y" })
            })
        })
    }, [media])

    return {
        programName: media.info,
        source: logo.source,
        stretch: logo.stretch
    }
}