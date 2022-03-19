import React from 'react'
import Carousel from '../carousel/Carousel'
import Mainframe from '../mainframe/Mainframe'
import MediaClipInfo from '../mediaclip-info/MediaClipInfo'
import QuickSearch from '../quicksearch/QuickSearch'
import { Utils } from '../utils/Utils'
import { useApplicationHook } from './ApplicationHook'
import Settings from '../settings/Settings'
import Options from '../options/Options'
import Focusable from '../navigation/Focusable'

const routes = {
    EVENT_LEFT: ["mesmo"],
    EVENT_RIGHT: ["mesmo"],
}

const Application = () => {

    const { 

        renderCarousel, 
        hiddenCarousel, 
        renderQuickSearch, 
        renderSettings 

    } = useApplicationHook()

    return (
        <React.Fragment>
            <Mainframe/>
            {/* { Utils.branch(<QuickSearch/>, renderQuickSearch) } */}
            {/* { Utils.branch(<Settings/>, renderSettings)} */}
            <MediaClipInfo/>
            <Carousel/>

            {/* <Focusable 
                pathKey="mesmo"
                id="_fc1"
                routes={routes} 
                onClick={(a, b) => console.log(a, b)} value={"agyag"}>Teste</Focusable>
            <Focusable 
                pathKey="mesmo" 
                id="_fc2"
                routes={routes} 
                onClick={(a, b) => console.log(a, b)} value={"agyag 5555"}>Teste</Focusable>
            <Focusable 
                pathKey="mesmo" 
                id="_fc3"
                routes={routes} 
                onClick={(a, b) => console.log(a, b)} value={"agyag 5555 sds"}>Teste ssd</Focusable> */}

            {/* <DashPlayer
                audios={[
                    { idx: 0, language: "Português", quality: "5.1"},
                    { idx: 1, language: "Inglês", quality: "5.1"}
                    ]}
                subtitles={[
                    { idx: 0, language: "Português" },
                    { idx: 1, language: "Inglês" }
                ]}/> */}

        </React.Fragment>
    )
}

export default Application