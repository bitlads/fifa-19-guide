import { LOCALE_ES } from './Const'

export default class Localizer {
  private static data: any
  public static locale: string
  public static init(locale: string) {
    this.locale = locale
    if (locale === LOCALE_ES) {
      this.data = require('../assets/locales/es.json')
    } else {
      this.data = require('../assets/locales/en.json')
    }
  }

  public static t(key: string) {
    return this.data[key]
  }
}
