import Expo from 'expo'
import Localizer from '../Localizer';
const expo: any = Expo

export const GET_LOCALE = 'GET_LOCALE'

export function getLocale() {
    return (dispatch: any) => {
        expo.DangerZone.Localization.getCurrentLocaleAsync().then((lng: string) => {
            const locale = lng.substr(0, 2)
            const localizer = new Localizer(locale)
            dispatch({ type: GET_LOCALE, localizer })
        })
    };
}