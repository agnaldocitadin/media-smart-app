import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Constants } from '../../globals/Constants'
import { useFloatMenuHook } from './FloatMenuHook'
import styles from './FloatMenu.css'
import Focusable from '../navigation/FocusableAnim'
import Scrollable from '../scrollable/Scrollable'

const optionRoutes = (path) => {
    return {
        EVENT_UP: [path],
        EVENT_DOWN: [path],
    }
}

const FloatMenu = ({ 
    pathKey, 
    routes,
    options, 
    label,
    translateY,
    defaultOption,
    onSelect
}) => {

    const { 
        open, 
        selectedOption, 
        handleClick, 
        handleSelect, 
        handleBack 
    } = useFloatMenuHook(options, defaultOption, pathKey, onSelect)

    const OptionsContainer = useCallback(() => {
        if (!open) {
            return null
        }
        const path = `${pathKey}_options`
        return (
            <React.Fragment>
                <div className={styles.options}>
                    <h3 className={styles.optionsTitle}>{label}</h3>
                    <Scrollable
                        pathKey={path}
                        routes={optionRoutes(path)}
                        data={options}
                        vertical={true}
                        template={optionTemplate}
                        initOffset="10vh"
                        endOffset="90vh"
                        childHeight="7vh"
                        childWidth="100%"
                        onClick={handleSelect}
                        onBack={handleBack}
                        focusableClassName={styles.option}>
                    </Scrollable>
                </div>
                <div className={styles.overlay}/>
            </React.Fragment>
        )
    }, [open])

    const optionTemplate = useCallback((option, rendered) => {
        if (!rendered) return null
        return option.description
    }, [])

    return (
        <div>
            <div style={{ transform: `translateY(${-translateY}px)`}}>
                <h2 className={styles.menuTitle}>{label}</h2>
                <Focusable
                    pathKey={pathKey}
                    routes={routes}
                    onClick={handleClick}
                    className={styles.selection}>
                    { selectedOption.description }
                </Focusable>
            </div>
            <OptionsContainer/>
        </div>
    )
}

FloatMenu.defaultProps = {
    onSelect: () => {}
}

FloatMenu.propTypes = {
    pathKey: PropTypes.string,
    routes: PropTypes.object,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    defaultOption: PropTypes.object,
    onSelect: PropTypes.func,
    translateY: PropTypes.number
}

export default FloatMenu