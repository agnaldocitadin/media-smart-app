import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/Button';
import { Utils } from '../utils/Utils';

const ListOptions = ({
    id,
    title,
    defaultIcon,
    selectedIcon,
    options,
    selectedOption,
    disabledOption,
    handleSelectOption,
    handleCancelSelection,
    fontSize,
    margin,
    padding,
    routes,
    pathKey,
    background
}) => {
    return (
        <ul>
            { Utils.branch(<legend>{title}</legend>, title) }
            <Options
                id={id}
                defaultIcon={defaultIcon}
                selectedIcon={selectedIcon}
                options={options}
                selectedOption={selectedOption}
                disabledOption={disabledOption}
                handleSelectOption={handleSelectOption}
                handleCancelSelection={handleCancelSelection}
                fontSize={fontSize}
                routes={routes}
                pathKey={pathKey}
                margin={margin}
                padding={padding}
                background={background}/>
        </ul>
    )
}

const Options = ({ id, options, disabledOption, defaultIcon, selectedIcon, selectedOption, handleSelectOption, handleCancelSelection, fontSize, routes, pathKey, margin, padding, background }) => {
    return (
        <React.Fragment>
            { Utils.branch(<Button
                id={`${id}_disabled`}
                pathKey={pathKey}
                routes={routes}
                icon={selectedOption === "off" ? selectedIcon : defaultIcon } 
                text={disabledOption} 
                onAction={() => handleSelectOption("off")} 
                onBack={handleCancelSelection}
                fill={true}
                fontSize={fontSize}
                margin={margin}
                padding={padding}
                background={background}/>
            , disabledOption) }

            { options.map((option, key) => <Button
                id={`${id}_${key}`}
                key={key}
                pathKey={pathKey}
                routes={routes}
                icon={selectedOption === option.value ? selectedIcon : defaultIcon} 
                text={option.name} 
                onAction={() => handleSelectOption(option.value)} 
                onBack={handleCancelSelection}
                fill={true}
                fontSize={fontSize}
                margin={margin}
                padding={padding}
                background={background}/>
            ) }
        </React.Fragment>
    )
}

ListOptions.defaultProps = {
    handleSelectOption: () => {}
}

ListOptions.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    defaultIcon: PropTypes.object.isRequired,
    selectedIcon: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired, // [{ value, name }]
    disabledOption: PropTypes.string,
    selectedOption: PropTypes.string,
    routes: PropTypes.object,
    handleSelectOption: PropTypes.func,
    handleCancelSelection: PropTypes.func,
    fontSize: PropTypes.string,
    pathKey: PropTypes.string,
    routes: PropTypes.object,
    margin: PropTypes.string,
    padding: PropTypes.string,
    background: PropTypes.string
}

export default ListOptions