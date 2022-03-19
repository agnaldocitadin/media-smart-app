import { useState, useCallback, useEffect } from 'react'
import * as API from '../../lib/API'

export const useMoviesBrowserHook = () => {

    const [ filters ] = useState({ category: null, releaseYear: null, ordenation: null })
    const [ movies, setMovies ] = useState([])
    const [ selectedMovie, setSelectedMovie ] = useState()

    const handleCategory = (option) => {
        filters.category = option.value
        API.searchByFilter(filters, API.MediaTypes.MOVIE).then(movies => setMovies(movies))
    }

    const handleRelease = (option) => {
        filters.releaseYear = option.value
        API.searchByFilter(filters, API.MediaTypes.MOVIE).then(movies => setMovies(movies))
    }

    const handleOrdenation = (option) => {
        filters.ordenation = option.value
        API.searchByFilter(filters, API.MediaTypes.MOVIE).then(movies => setMovies(movies))
    }

    const handleMovieClick = useCallback((movie) => {
        console.log("-----------", movie)
        setSelectedMovie(movie)
    })

    useEffect(() => {
        console.log("Renderizou movies!")
        handleCategory({})
        return () => console.log("Destruiu movies!")
    }, [])

    return {
        handleCategory,
        handleRelease,
        handleOrdenation,
        handleMovieClick,
        movies,
        selectedMovie
    }
}