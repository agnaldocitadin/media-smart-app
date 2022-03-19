import { combineReducers } from 'redux'

// Importar todos os reducers aqui
// ...
import { applicationReducer } from './applicationReducer'
import { mediaDetailReducer } from './mediaDetailReducer'
import { carouselReducer } from './carouselReducer'
import { quickSearchReducer } from './quickSearchReducer'
import { settingsReducer } from './settingsReducer'
import { dashPlayerReducer  } from './dashPlayerReducer'

export const Reducers = combineReducers({
    
    // Incluir aqui todos os reducers ativos
    // ...
    applicationReducer,
    carouselReducer,
    mediaDetailReducer,
    quickSearchReducer,
    settingsReducer,
    dashPlayerReducer
    
})

export default Reducers