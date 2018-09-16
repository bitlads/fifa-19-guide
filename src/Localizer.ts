import { LOCALE_ES } from './Const'

export default class Localizer {
    private data: any
    constructor(locale: string) {
        if (locale === LOCALE_ES) {
            this.data = require('../assets/locales/es.json')
        } else {
            this.data = require('../assets/locales/es.json')
        }
    }

    public t(key: string) {
        return this.data[key]
    }
}