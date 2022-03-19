import { useState, useCallback } from 'react';

export const useDashboardHook = () => {

    const [ drawerOpen, setDrawerOpen ] = useState(false)

    const toggleDrawer = useCallback(() => {
        setDrawerOpen(!drawerOpen)
    })

    return {   
        drawerOpen,
        toggleDrawer
    }
}