import { LOCALE_EN, LOCALE_ES } from './Const'

export function t(key: string, locale: string) {
    return locale === LOCALE_ES ? 'Hola' : 'Hello'
}