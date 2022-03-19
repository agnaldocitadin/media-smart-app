import { useState, useCallback, useEffect } from 'react'
import { Option } from './Option'
import { navigationAgent } from '../navigation/NavigationHook'
import { EVENT_CLICK } from '../navigation/NavigationAgent'
import { Sequencer } from '../navigation/Sequencer'
import { Utils } from '../utils/Utils';


export const useFloatMenuHook = (options, defaultOption, pathKey, onSelect) => {

    const [ open, setOpen ] = useState(false)
    const [ selectedOption, setSelectedOption ] = useState(Option)

    useEffect(() => {
        if (defaultOption) {
            const option = options.find(option => option.value == defaultOption.value)
            if (option) {
                setSelectedOption(option)
            }
        }
    }, [options])

    return {
        open,
        selectedOption,
        
        handleClick: useCallback(() => {
            Utils.sequencer().play([
                () => setOpen(true),
                100,
                () => {
                    const el = navigationAgent.findFocusable("pathKey", `${pathKey}_options`)[0]
                    navigationAgent.selectFocusable(el)
                }
            ])
        }, []),

        handleSelect: (option) => {
            setSelectedOption(option)
            onSelect(option)
            Utils.sequencer().play([
                () => {
                    const el = navigationAgent.findFocusable("pathKey", pathKey)[0]
                    navigationAgent.selectFocusable(el)
                },
                100,
                () => setOpen(false)
            ])
        },

        handleBack: useCallback(() => { 
            if (open) {
                Utils.sequencer().play([
                    () => {
                        const el = navigationAgent.findFocusable("pathKey", pathKey)[0]
                        navigationAgent.selectFocusable(el)
                    },
                    100,
                    () => setOpen(false)
                ])
            }
        }, [open])
    }
}