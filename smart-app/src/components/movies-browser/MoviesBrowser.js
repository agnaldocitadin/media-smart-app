import React, { useState } from 'react'
import { useMoviesBrowserHook } from './MoviesBrowserHook'
import BaseContent from '../layout/BaseContent'
import MediaFilter from '../media-filter/MediaFilter'
import ScrollableGrid from '../scrollable/ScrollableGrid'
import Banner from '../banner/MediaBanner'
import styleBanner from '../banner/Banner.css'
import MoviesDetail from '../movies-detail/MoviesDetail';

const routes = {
    EVENT_UP: ["movies_banner", "fm_category", "fm_release_year", "fm_order_by"],
    EVENT_DOWN: ["movies_banner"],
    EVENT_LEFT: ["movies_banner", "menu_option_selected"],
    EVENT_RIGHT: ["movies_banner"]
}

const categoryRoutes = {
    EVENT_LEFT: ["menu_option_selected"],
    EVENT_RIGHT: ["fm_release_year"],
    EVENT_DOWN: ["movies_banner"]
}

const releaseYearRoutes = {
    EVENT_LEFT: ["fm_category"],
    EVENT_RIGHT: ["fm_order_by"],
    EVENT_DOWN: ["movies_banner"]
}

const orderByRoutes = {
    EVENT_LEFT: ["fm_release_year"],
    EVENT_DOWN: ["movies_banner"]
}

const MoviesBrowser = () => {

    const [ translate, setTranslate ] = useState(0)
    const { 
        handleCategory,
        handleRelease,
        handleOrdenation,
        handleMovieClick,
        movies,
        selectedMovie
    } = useMoviesBrowserHook()

    return (
        <React.Fragment>
            <BaseContent withPadding={true}>
                <MediaFilter
                    onSelectCategory={handleCategory}
                    onSelectRelease={handleRelease}
                    onSelectOrdenation={handleOrdenation}
                    categoryRoutes={categoryRoutes}
                    releaseYearRoutes={releaseYearRoutes}
                    orderByRoutes={orderByRoutes}
                    translateY={translate}/>
                
                <ScrollableGrid
                    pathKey="movies_banner"
                    routes={routes}
                    data={movies}
                    coluns={6}
                    template={movieTemplate}
                    childHeight="38vh"
                    initOffset="90vh"
                    endOffset="90vh"
                    focusableClassName={styleBanner.boxBanner}
                    onTranslate={translate => setTranslate(translate)}
                    onClick={handleMovieClick}/>
            </BaseContent>

            <MoviesDetail movie={selectedMovie}/>    
        </React.Fragment>
    )
}

const movieTemplate = (media, rendered) => {
    if (!rendered) {
        return null
    }
    return <Banner media={media}/>
}

export default MoviesBrowser