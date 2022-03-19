import React from 'react'
import PropTypes from 'prop-types'
import i18n from '../../globals/i18n'
import { useMediaFilterHook } from './MediaFilterHook'
import FloatMenu from '../float-menu/FloatMenu'
import styles from './MediaFilter.css'

const MediaFilter = (props) => {
    
    const {
        categories,
        releases,
        ordenation,
        handleSelectCategory,
        handleSelectRelease,
        handleSelectOrder,
        defaultCategory,
        defaultRelease,
        defaultOrdenation
    } = useMediaFilterHook(props)

    const { categoryRoutes, releaseYearRoutes, orderByRoutes, translateY } = props

    return(
        <div className={styles.filter}>
            <FloatMenu 
                pathKey="fm_category"
                routes={categoryRoutes}
                label={i18n.t("category")} 
                defaultOption={defaultCategory} 
                translateY={translateY}
                options={categories} 
                onSelect={handleSelectCategory}/>

            <FloatMenu
                pathKey="fm_release_year"
                routes={releaseYearRoutes}
                label={i18n.t("release-year")} 
                translateY={translateY}
                defaultOption={defaultRelease} 
                options={releases} 
                onSelect={handleSelectRelease}/>

            <FloatMenu
                pathKey="fm_order_by"
                routes={orderByRoutes}
                label={i18n.t("order-by")} 
                translateY={translateY}
                defaultOption={defaultOrdenation} 
                options={ordenation} 
                onSelect={handleSelectOrder}/>
        </div>
    )
}

MediaFilter.propTypes = {
    onSelectCategory: PropTypes.func.isRequired,
    onSelectRelease: PropTypes.func.isRequired,
    onSelectOrdenation: PropTypes.func.isRequired,
    categoryRoutes: PropTypes.object,
    releaseYearRoutes: PropTypes.object,
    orderByRoutes: PropTypes.object,
    translateY: PropTypes.number
}

export default MediaFilter