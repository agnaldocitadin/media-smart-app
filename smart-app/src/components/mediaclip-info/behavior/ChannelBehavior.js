import * as API from '../../../../../libstream/src/API'
import { Aspect } from '../../utils/Aspect'

export const ChannelBehavior = {

    backMedia: (setStateDetail) => {
        setStateDetail(state => {
            return {
                ...state,
                MPDSource: null
            }
        })
    },

    playMedia: (stateDetail, setStateDetail) => {
        API.loadMPDSource(stateDetail.loadedMediaClip.releaseManifest.MPDFile).then(source => {
            setStateDetail(state => {
                return {
                    ...state,
                    MPDSource: source,
                    manifest: stateDetail.loadedMediaClip.releaseManifest
                }
            })
        })
    },

    changeSelectedMedia: (mediaClip, setStateDetail) => {
        setStateDetail(state => {
            return {
                ...state,
                MPDSource: null,
                loadedMediaClip: mediaClip
            }
        })

        API.loadImageSource(mediaClip.poster, Aspect.resolution())
            .then(source => {
                setStateDetail(state => {
                    return {
                        ...state,
                        previewSource: source
                    }
                })
            })
            .then(() => {
                // API.loadMPDSource(channel.manifest.release.hash).then(source => setMPDSource(source))
            })
    }
}