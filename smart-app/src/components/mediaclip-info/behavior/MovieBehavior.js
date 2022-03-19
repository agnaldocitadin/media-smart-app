import * as API from '../../../../../libstream/src/API'
import { Aspect } from '../../utils/Aspect'

export const MovieBehavior = {

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
                loadedMediaClip: mediaClip,
                userProgress: mediaClip.releaseManifest.progress
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
                // if (mediaClip.trailerManifest) {
                    // API.loadMPDSource(movie.manifest.trailer.hash).then(source => setMPDSource(source))
                // }
                // API.loadMPDSource(mediaClip.releaseManifest.MPDFile).then(source => {
                //     setStateDetail(state => {
                //         return {
                //             ...state,
                //             MPDSource: source,
                //             manifest: mediaClip.releaseManifest
                //         }
                //     })
                // })
            })
    }
}