export const ReactUtils = {

    findComponentFromDOM: (node) => {
        for (let key in node) {
            if (key.startsWith("__reactInternalInstance$")) {
                const fiberNode = node[key]
                return fiberNode && fiberNode.return
            }
        }
    },

    findComponentFromDOMId: (id) => {
        return ReactUtils.findComponentFromDOM(document.getElementById(id))
    },

    getPropertyFromReactComponent: (component, property) => {
        return component.memoizedProps[property]
    },

    getDOMFrom: (reactComponent) => {
        
    }
}