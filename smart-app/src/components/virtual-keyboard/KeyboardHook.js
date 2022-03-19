import { useState, useCallback, useEffect } from 'react'

const numbers =           ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const baseChars =         ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const qwertChars =        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-", "Shift", "z", "x", "c", "v", "b", "n", "m", "_"]
const qwertSpecialChars = ["\"", "'", "!", "#", "$", "%", "¨", "&", "*", "(", ")", "+", "=", "{", "}", "[", "]", "~", ",", "-", "Shift", "<", ">", ";", ":", "/", "?", "^", "_"]

export const useKeyboardHook = ({ overrideMemory, notifyMemoryChanges }, isQwert) => {

    const [ specialChars, setSpecialChars ] = useState(false)
    const [ shift, setShift ] = useState(false)
    const [ memory, setMemory ] = useState("")
    const qwert = specialChars ? qwertSpecialChars : qwertChars

    const handleKeyEvent = (char) => {
        if (char.toLowerCase() == "shift") {
            setShift(!shift)
            return
        }
        const newMemory = memory.concat(char)
        notifyChanges(newMemory)
    }

    const handleSpecialChars = useCallback(() => { 
        setSpecialChars(!specialChars)
    }, [specialChars])

    const handleSpace = useCallback(() => {
        const newMemory = memory.concat(" ")
        notifyChanges(newMemory)
    })

    const handleBackspace = useCallback(() => {
        const newMemory = memory.slice(0, -1)
        notifyChanges(newMemory)
    })

    const notifyChanges = (memory) => {
        setMemory(memory)
        if (notifyMemoryChanges) notifyMemoryChanges(memory)
    }

    useEffect(() => { 
        setMemory(overrideMemory)
    }, [overrideMemory])

    return {
        chars: isQwert ? numbers.concat(qwert) : baseChars.concat(numbers),
        shift,
        specialChars,
        handleKeyEvent,
        handleSpace,
        handleBackspace,
        handleSpecialChars
    }
}