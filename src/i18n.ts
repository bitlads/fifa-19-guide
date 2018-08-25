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
        main: {
          app_name: 'Ultimate Guide for FIFA 19',
          home: 'Home',
          skills: 'Skills',
          celebrations: 'Celebrations',
          dev_message: 'Message from the developer',
          thank_you: 'Thank you for downloading Ultimate Guide for FIFA 19. The app is constantly updated with new information so check back often!',
          days_until: 'days until FIFA 19',
          preorder: 'Preorder',
          preorder_now: 'Preorder today for exclusive Ultimate Team content'
        }
      },
      es: {
        main: {
          app_name: 'Guía Máxima de FIFA 19',
          home: 'Casa',
          skills: 'Filigranas',
          celebrations: 'Celebraciones',
          dev_message: 'Mensaje del desarrollador',
          thank_you:
            'Gracias por descargar Guía Máxima de FIFA 19. ¡La app es actualizada constantemente con información nuevo entonces vuelva pronto para ver mas contenido!',
          days_until: 'días hasta FIFA 19',
          preorder: 'Reserva',
          preorder_now: 'Reserva hoy para contenido especial de Ultimate Team'
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
