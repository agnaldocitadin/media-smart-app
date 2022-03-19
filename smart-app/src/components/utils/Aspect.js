
const RESOLUTION_4K = 2160
const RESOLUTION_1440P = 1440
const RESOLUTION_FULLHD = 1080
const RESOLUTION_900P = 900
const RESOLUTION_768P = 768
const RESOLUTION_HD = 720

const _4K = "4K"
const _1440P = "1440p"
const _FULLHD = "1080p"
const _900P = "900p"
const _768P = "768p"
const _HD = "720p"

export const Aspect = {

    resolution: () => {
        const height = window.innerHeight
        if (height >= RESOLUTION_4K) {
            return _4K
        }
        if (height >= RESOLUTION_1440P) {
            return _1440P
        }
        if (height >= RESOLUTION_FULLHD) {
            return _FULLHD
        }
        if (height >= RESOLUTION_900P) {
            return _900P
        }
        if (height >= RESOLUTION_768P) {
            return _768P
        }
        if (height >= RESOLUTION_HD) {
            return _HD
        }
    },

    unit: (value) => {
        return value ? value.replace(/\d/g, "").replace(".", "") : undefined
    },

    unitValue: (value) => {
        return value ? value.replace(/\D/g, "") : undefined
    },

    toPixel: (strValue) => {
        let unit = Aspect.unit(strValue).toLowerCase()
        switch(unit) {
            case "vh":
                return window.innerHeight * (Aspect.unitValue(strValue) / 100)

            case "vw":
                return window.innerWidth * (Aspect.unitValue(strValue) / 100)
            
            case "px":
                return Aspect.unitValue(strValue)
        }
    }

}