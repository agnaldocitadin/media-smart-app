import { useCallback, useState, useEffect } from 'react'
import * as API from '../../lib/API'

export const useMediaFilterHook = ({ onSelectCategory, onSelectRelease, onSelectOrdenation }) => {

    const [ categories, setCategories ] = useState([])
    const [ releases, setReleases ] = useState([])
    const [ ordenation, setOrdenation ] = useState([])

    const handleSelectCategory = (option) => onSelectCategory(option)
    const handleSelectRelease = (option) => onSelectRelease(option)
    const handleSelectOrder = (option) => onSelectOrdenation(option)

    useEffect(() => {
        
        API.loadCategories().then(categories => {
            categories.unshift({ value: null, description: "Todas" }) //TODO bundle
            setCategories(categories)
        })

        API.loadMediasYearRelease().then(years => {
            years.unshift({ value: null, description: "Todos" })//TODO bundle
            setReleases(years)
        })

        API.loadMediaOrdenations().then(orders => {
            setOrdenation(orders)
        })

    }, [])

    return {
        categories,
        releases,
        ordenation,
        handleSelectCategory,
        handleSelectOrder,
        handleSelectRelease,
        defaultCategory: categories[0],
        defaultRelease: releases[0],
        defaultOrdenation: ordenation[0]
    }
}