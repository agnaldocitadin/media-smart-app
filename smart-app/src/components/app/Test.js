import React, { useRef } from 'react'
// import PropTypes from 'prop-types'
import Dashjs from '../../lib/dash.all.debug'
import shaka from 'shaka-player'

const Test = () => {

    const ref = useRef()
    // const url = "http://dash.edgesuite.net/envivio/Envivio-dash2/manifest.mpd"
    // const url = "http://localhost:8700/stream/feelings_vp9-20130806-manifest.mpd"
    const url = "http://192.168.1.194:3002/stream/test/manifest.mpd"

    const player = () => {
        console.log("player")
        const player = dashjs.MediaPlayer().create();
        player.initialize()
        player.setAutoPlay(false)
        player.setFastSwitchEnabled(true)
        player.attachView(ref.current)
        player.attachSource(url)
        console.log("adicionou!!")
    }

    const playerShaka = () => {
        
        shaka.polyfill.installAll();

        var player = new shaka.Player(ref.current)
        window.player = player


        if (shaka.Player.isBrowserSupported()) {
            player.load(url).then(() => {
                console.log('The video has now been loaded!');
            }).catch(error => {
                console.log(error)
            });

            player.addEventListener('error', (event) =>{
                console.error('Error code', event.detail.code, 'object', event.detail);
            })

        } else {
            console.error('Browser not supported!');
        }
    }

    const requisicao = () => {
        // fetch("http://dash.edgesuite.net/envivio/Envivio-dash2/manifest.mpd").then(r => {
        fetch("http://192.168.1.194:3002/stream/test/manifest.mpd").then(r => {
            console.log(r)
        })

        // 1. Create a new XMLHttpRequest object
        // let xhr = new XMLHttpRequest();

        // // 2. Configure it: GET-request for the URL /article/.../load
        // xhr.open('GET', 'http://192.168.1.194:8700/stream/conv/manifest.mpd');

        // // 3. Send the request over the network
        // xhr.send();

        // // 4. This will be called after the response is received
        // xhr.onload = function() {
        // if (xhr.status != 200) { // analyze HTTP status of the response
        //     alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        // } else { // show the result
        //     alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
        // }
        // };

        // xhr.onprogress = function(event) {
        // if (event.lengthComputable) {
        //     alert(`Received ${event.loaded} of ${event.total} bytes`);
        // } else {
        //     alert(`Received ${event.loaded} bytes`); // no Content-Length
        // }

        // };

        // xhr.onerror = function() {
        // alert("Request failed");
        // };
    }


    return (
        <React.Fragment>
            <div>
                <ul>
                    {/* <li><button onClick={player}>Cria player</button></li> */}
                    <li><button onClick={playerShaka}>Cria player Shaka</button></li>
                    {/* <li><button onClick={requisicao}>REQUEST</button></li> */}
                </ul>
            </div>
            <video ref={ref} controls width="100%" height="100%" style={{ marginTop: "10vh" }}/>
        </React.Fragment>    
    )
}

export default Test