import { LOCALE_EN, LOCALE_ES } from '../Const'
import Expo from 'expo'
const expo: any = Expo

export const GET_LOCALE = 'GET_LOCALE'

export function getLocale() {
    return (dispatch: any) => {
        expo.DangerZone.Localization.getCurrentLocaleAsync().then((lng: string) => {
            const locale = lng.substr(0, 2)
            dispatch({ type: GET_LOCALE, locale: locale === LOCALE_ES ? locale : LOCALE_EN })
        })
    };
}