
export class Sequencer {
    
    play(actions) {
        return new Promise(resolve => {

            let confs = { waiting: false, frameId: null, waitDuration: 0 }
            let index = 0

            const fn = (tick) => {
                if (!confs.waiting) {
                    let action = actions[index]
                    if (typeof action === "number") {
                        confs.waitDuration = tick + action
                        confs.waiting = true
                    }
                    else {
                        action(tick, confs)
                    }
                }
                else if (tick >= confs.waitDuration) {
                    confs.waiting = false
                    confs.waitDuration = 0
                }
               
                if (index < actions.length) {
                    if (!confs.waiting) {
                        index++
                    }

                    if (index == actions.length) {
                        cancelAnimationFrame(confs.frameId)
                        // console.log("terminou")
                        resolve()    
                    }
                    else {
                        confs.frameId = requestAnimationFrame(fn)
                    }
                }
            }

            confs.frameId = requestAnimationFrame(fn)
        })
    }

    wait(duration) {
        return (tick, confs) => {
            confs.waitDuration = tick + duration
            confs.waiting = true
        }
    }

}