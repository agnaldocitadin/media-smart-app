import * as API from '../../../../../libstream/src/API'
import { Aspect } from '../../utils/Aspect'

export const TVShowBehavior = {

    backMedia: (setStateDetail) => {
        setStateDetail(state => {
            return {
                ...state,
                MPDSource: null
            }
        })
    },

    playMedia: (stateDetail, setStateDetail) => {
        const manifest = stateDetail.loadedMediaClip.trailerManifest
        API.loadMPDSource(manifest.MPDFile).then(source => {
            setStateDetail(state => {
                return {
                    ...state,
                    MPDSource: source,
                    manifest: manifest
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
                if (mediaClip.trailerManifest) {
                    // API.loadMPDSource(tvShow.manifest.trailer.hash).then(source => setMPDSource(source))
                }
            })
    }

}