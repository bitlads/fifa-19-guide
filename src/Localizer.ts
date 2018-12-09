import { LOCALE_ES } from './Const'

export default class Localizer {
  public static locale: string
  public static init(locale: string) {
    this.locale = locale
    this.data = locale === LOCALE_ES ? require('../assets/locales/es.json') : require('../assets/locales/en.json')
  }

  public static t(key: string) {
    return this.data[key]
  }
  private static data: any
}
