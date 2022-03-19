import i18n from 'i18next'

//translations
import en_US from '../translations/en_US.json'
import pt_BR from '../translations/pt_BR.json'
//...

i18n
    .init({
        resources: {
            en_US: { translation: en_US },
            pt_BR: { translation: pt_BR }
            //...
        },
        debug: true,
        lng: "pt_BR",
        fallbackLng: "pt_BR",
        interpolation: { escapeValue: false },
        parseMissingKeyHandler: (key) => {
            return `!_${key}_!`
        }
    });

export default i18n