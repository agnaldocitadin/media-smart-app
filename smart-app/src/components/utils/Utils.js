import moment from 'moment'
import { Sequencer } from './Sequencer';

export const Utils = {

    delayedAction: () => new DelayedAction(),

    sequencer: () => new Sequencer(),

    delayedPromise: (fn, delay = 0) => {
        return new Promise(resolve => {
            setTimeout(() => {
                fn()
                resolve()
            }, delay);
        })
    },

    timedPromise: (fn, time = 0) => {
        return new Promise(resolve => {
            fn()
            setTimeout(() => resolve(), time);
        })
    },

    copyStyle: (from, to) => {
        let toRect = to.getBoundingClientRect()
        let fromRect = from.getBoundingClientRect()
        const styles = {
            transform: `translate(${fromRect.left}px, ${fromRect.top}px)`,
            ...( fromRect.width != toRect.width ? { width: `${fromRect.width}px` } : {} ),
            ...( fromRect.height != toRect.height ? { height: `${fromRect.height}px` } : {} )
        }

        const { style } = to
        if (styles.width) style.width = styles.width
        if (styles.height) style.height = styles.height
        style.transform = styles.transform
    },

    percentElapsedTime(startTime, endTime, elapsed) {
        // Vai chegar assim do DB: "2019-04-12T19:34:57.650Z"
        // Ou assim, se for apenas horario: "14:05:42"
        const start = Utils.momentToMinutes(startTime)
        const end = Utils.momentToMinutes(endTime)
        const elap = Utils.momentToMinutes(elapsed)
        return (elap - start) / (end - start) * 100
    },

    momentToMinutes(date) {
        return moment.duration(date.format("HH:mm:ss")).asMinutes()
    },

    momentZero() {
        return moment("0", "s")
    },

    branch(component, rendered) {
        if (!rendered) return null
        return component
    },

    hourStrToMoment(hour) {
        return moment(hour, "HH:mm")
    }
    
}

const DelayedAction = class {
    constructor() {
        this.id
    }

    run(func, delay) {
        if (this.id) {
            this.clear()
        }
        this.id = setTimeout(() => func(), delay);
    }

    clear() {
        clearTimeout(this.id)
    }
}