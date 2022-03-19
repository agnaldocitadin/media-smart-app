import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { Constants } from './Configuration'

//translations
import en_US from '../translations/en_US.json'
import pt_BR from '../translations/pt_BR.json'
//...

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en_US: { translation: en_US },
            pt_BR: { translation: pt_BR }
            //...
        },
        lng: navigator.language.replace("-", "_"),
        fallbackLng: Constants.DEFAULT_LANGUAGE,
        interpolation: { escapeValue: false },
        parseMissingKeyHandler: (key) => {
            return `!_${key}_!`
        }
    });

export default i18n