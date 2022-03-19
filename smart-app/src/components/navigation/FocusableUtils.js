import { ReactUtils } from "../utils/ReactUtils";

export const FocusableUtils = {

    from: (focusable) => {
        return {
            getID: () => ReactUtils.getPropertyFromReactComponent(focusable, "id"),
            onBack: (event) => ReactUtils.getPropertyFromReactComponent(focusable, "onBack")(event),
            getPathKey: () => ReactUtils.getPropertyFromReactComponent(focusable, "pathKey"),
            getValue: () => ReactUtils.getPropertyFromReactComponent(focusable, "value"),
        }
    }
}