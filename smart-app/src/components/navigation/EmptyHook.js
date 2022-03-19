import { useCallback } from 'react';

export const useEmptyHook = () => {
    return {
        onBuild: useCallback(() => {}, []),
        onDestroy: useCallback(() => {}, []),
        onSelect: useCallback(() => Promise.resolve(), []),
        onLeave: useCallback(() => Promise.resolve(), [])
    }
}