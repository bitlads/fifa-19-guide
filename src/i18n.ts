import i18n from 'i18next'
import Expo from 'expo'
import { reactI18nextModule } from 'react-i18next'

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback: any) => {
    return /*'en'; */ Expo.DangerZone.Localization.getCurrentLocaleAsync().then((lng: any) => {
      callback(lng.replace('_', '-'))
    })
  },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    resources: {
      en: {
        home: {
          hello: 'Hello'
        }
      },
      es: {
        home: {
          hello: 'Hola'
        }
      }
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false // not needed for react as it does escape per default to prevent xss!
    }
  })
export default i18n
