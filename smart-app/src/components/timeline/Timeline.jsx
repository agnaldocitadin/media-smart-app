import React from 'react'
import PropTypes from 'prop-types'
import i18n from '../../globals/i18n'
import Progress from '../progress/Progress'
import moment from 'moment'
import { Utils } from '../utils/Utils'
import CSS from './Timeline.module.css'

const Timeline = ({ events = [] }) => {
    const parsedEvents = events.map(event => {
        event.startTime = Utils.hourStrToMoment(event.startTime)
        event.endTime = Utils.hourStrToMoment(event.endTime)
        return event
    })
    return (
        <ul className={CSS.timeline}>
            <Events events={parsedEvents}/>
        </ul>
    )
}

const Events = ({ events }) => {
    events.sort((a, b) => a.startTime - b.startTime)
    return events.map((event, key) => <Event key={key} event={event}/>)
}

const Event = ({ event }) => {
    let time = event.startTime.format("HH:mm")
    const now = isNow(event)
    const progress = Utils.percentElapsedTime(event.startTime, event.endTime, moment(Date.now()))
    return (
        <li>
            <span className={now ? CSS.now : ""}>{now ? i18n.t("now") : time}</span>
            <p className={now ? CSS.now : ""}>{event.name}</p>
            { now ? <Progress progress={progress} color="red" height=".5vh"/> : null }
        </li>
    )
}

const isNow = (event) => {
    return moment(Date.now()).isBetween(event.startTime, event.endTime)
}

// const calcProgress = (event) => {
//     const eventDuration = moment.duration(event.endTime.diff(event.startTime))
//     const timeUntilNow = moment.duration(moment(Date.now()).diff(event.startTime))
//     return timeUntilNow.asMinutes() / eventDuration.asMinutes() * 100
// }

Timeline.propTypes = {
    // events: PropTypes.array.isRequired
}

export default Timeline