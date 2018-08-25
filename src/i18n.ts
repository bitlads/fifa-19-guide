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
          preorder_now: 'Preorder today for exclusive Ultimate Team content',
          hold: 'Hold',
          flick: 'Flick',
          roll: 'Roll',
          click: 'click',
          star: 'Star',
          new: 'New',
          //SKILLS
          stopAndTurnR: 'Stop and Turn Right (while running)',
          heelFlickTurn: 'Heel Flick Turn',
          heelChopL: 'Heel Chop Left (while running)',
          quickBallRolls: 'Quick Ball Rolls',
          bodyFeintR: 'Body Feint Right',
          inAirElasticoReverse: 'Reverse In Air Elastico',
          bodyFeintL: 'Body Feint Left',
          hocusPocus: 'Hocus Pocus',
          heelChopR: 'Heel Chop Right (while running)',
          laneChangeR: 'Lane Change Right',
          stopAndTurnL: 'Stop and Turn Left (while running)',
          ballRollFlickL: 'Ball Roll & Flick Left (while running)',
          openUpR: 'Open Up Fake Shot Left',
          dragBack: 'Drag Back (while standing)',
          reverseStepoverR: 'Reverse Stepover Right',
          threeTouchR: 'Three Touch Roulette Right',
          footFake: 'Foot Fake (while standing)',
          flickOver: 'Flick Over',
          sombreroFlickB: 'Sombrero Flick Backwards',
          spinLeft: 'Spin Left',
          reverseElastico: 'Reverse Elastico',
          fakeLeftGoRight: 'Fake Left & Go Right',
          turnAndSpinL: 'Turn & Spin Left',
          heelToHeelFlick: 'Heel to Heel Flick',
          threeTouchL: 'Three Touch Roulette Left',
          flickUpForVolley5: 'Flick Up for Volley',
          reverseStepoverL: 'Reverse Stepover Left',
          openUpL: 'Open Up Fake Shot Right',
          stepoverL: 'Stepover Left',
          ballRollFakeR: 'Ball Roll Fake Right (while standing)',
          dragBackSpinR: 'Drag Back Spin Right',
          fakePassExitR: 'Fake Pass Exit Right (while standing)',
          elastico: 'Elastico',
          feintRightExitLeft: 'Feint Right & Exit Left',
          inAirElastico: 'In Air Elastico',
          feintLeftExitRight: 'Feint Left & Exit Right',
          ballRollCutR: 'Ball Roll Cut Right',
          elasticoChopL: 'Elastico Chop Left',
          fakePass: 'Fake Pass (while standing)',
          sombreroFlick: 'Sombrero Flick (while standing)',
          spinFlickR: 'Spin Flick Right',
          spinFlickL: 'Spin Flick Left',
          chestFlick: 'Chest Flick',
          ballRollCutL: 'Ball Roll Cut Left',
          elasticoChopR: 'Elastico Chop Right',
          tAroundTheWorld: 'T. Around the World',
          sombreroFlickL: 'Sombrero Flick Left',
          ballRollFlickR: 'Ball Roll & Flick Right (while running)',
          dragBackSpinL: 'Drag Back Spin Left',
          fakePassExitL: 'Fake Pass Exit Left (while standing)',
          ballRollFakeL: 'Ball Roll Fake Left (while standing)',
          ballHop: 'Ball Hop (while standing)',
          tornadoSpinL: 'Tornado Spin Left',
          lacesFlickUp: 'Laces Flick Up',
          ballRollL: 'Ball Roll Left',
          ballRollR: 'Ball Roll Right',
          rouletteL: 'Roulette Left',
          spinRight: 'Spin Right',
          ballJuggle: 'Ball Juggle (while standing)',
          aroundTheWorld: 'Around the World',
          stepoverR: 'Stepover Right',
          rabonaFake: 'Rabona Fake (while jogging)',
          advRainbow: 'Advanced Rainbow',
          laneChangeL: 'Lane Change Left',
          tripleElastico: 'Triple Elastico',
          turnAndSpinR: 'Turn & Spin Right',
          sombreroFlickR: 'Sombrero Flick Right',
          fakeRightGoLeft: 'Fake Right & Go Left',
          heelFlick: 'Heel Flick',
          simpleRainbow: 'Simple Rainbow',
          FlickUpVolley: 'Flick Up for Volley',
          rouletteR: 'Roulette Right',
          tornadoSpinR: 'Tornado Spin Right'
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
          preorder_now: 'Reserva hoy para contenido especial de Ultimate Team',
          hold: 'Mantener',
          flick: 'Toque',
          roll: 'Rota',
          click: 'Mantener Pulsado',
          star: 'Estrella',
          new: 'Nuevo',
          //SKILLS
          stopAndTurnR: 'Parar y girar a la derecha(en carrera)',
          heelFlickTurn: 'Heel Flick Turn',
          heelChopL: 'Heel Chop Left (while running)',
          quickBallRolls: 'Arrastres de balón rápidos',
          bodyFeintR: 'Finta del cuerpo derecha',
          inAirElasticoReverse: 'Elástica aérea inversa',
          bodyFeintL: 'Finta del cuerpo izquierda',
          hocusPocus: 'Abracadabra',
          heelChopR: 'Heel Chop Right (while running)',
          laneChangeR: 'Lane Change Right',
          stopAndTurnL: 'Parar y girar a la izquierda (en carrera)',
          ballRollFlickL: 'Arrastre de balón y toque izquierdo (en carrera)',
          openUpR: 'Open Up Fake Shot Left',
          dragBack: 'Arrastrar atrás (estático)',
          reverseStepoverR: 'Bicicleta inversa derecha',
          threeTouchR: 'Three Touch Roulette Right',
          footFake: 'Amago de pie (estático)',
          flickOver: 'Flick Over',
          sombreroFlickB: 'Toque de sombrero atrás',
          spinLeft: 'Giro a la izquierda',
          reverseElastico: 'Elástica inversa',
          fakeLeftGoRight: 'Amagar a la izquierda y salir por la derecha',
          turnAndSpinL: 'Torcer y giro izquierda',
          heelToHeelFlick: 'Toque de tacón a tacón',
          threeTouchL: 'Three Touch Roulette Left',
          flickUpForVolley5: 'Toque arriba volea',
          reverseStepoverL: 'Bicicleta inversa izquierda',
          openUpL: 'Open Up Fake Shot Right',
          stepoverL: 'Bicicleta izquierda',
          ballRollFakeR: 'Amago de envío derecha (en estático)',
          dragBackSpinR: 'Drag Back Spin Right',
          fakePassExitR: 'Fake Pass Exit Right (while standing)',
          elastico: 'Elástica',
          feintRightExitLeft: 'Finta por la derecha y salir por la izquierda',
          inAirElastico: 'Elástica aérea',
          feintLeftExitRight: 'Finta por la izquierda y salir por la derecha',
          ballRollCutR: 'Arrastre de balón con recorte a la derecha',
          elasticoChopL: 'Toque elástico a la izquierda',
          fakePass: 'Fake Pass (while standing)',
          sombreroFlick: 'Toque de sombrero (estático)',
          spinFlickR: 'Spin Flick Right',
          spinFlickL: 'Spin Flick Left',
          chestFlick: 'Toque de pecho',
          ballRollCutL: 'Arrastre de balón con recorte a la izquierda',
          elasticoChopR: 'Toque elástico a la derecha',
          tAroundTheWorld: 'Doble vuelta al mundo',
          sombreroFlickL: 'Toque de sombrero izquierda',
          ballRollFlickR: 'Arrastre de balón y toque derecho (en carrera)',
          dragBackSpinL: 'Drag Back Spin Left',
          fakePassExitL: 'Fake Pass Exit Left (while standing)',
          ballRollFakeL: 'Amago de envío izquierda (en estático)',
          ballHop: 'Salto con balón (estático)',
          tornadoSpinL: 'Tornado Spin Left',
          lacesFlickUp: 'Toque con empeine',
          ballRollL: 'Arrastre de balón a la izquierda',
          ballRollR: 'Arrastre de balón a la derecha',
          rouletteL: 'Ruleta izquierda',
          spinRight: 'Giro a la derecha',
          ballJuggle: 'Malabarismo con balón (estático)',
          aroundTheWorld: 'Vuelta al mundo',
          stepoverR: 'Bicicleta derecha',
          rabonaFake: 'Amago de rabona (mientras se pulsa)',
          advRainbow: 'Sombrero de espuela avanzado',
          laneChangeL: 'Lane Change Left',
          tripleElastico: 'Triple elástica',
          turnAndSpinR: 'Torcer y giro derecha',
          sombreroFlickR: 'Toque de sombrero derecha',
          fakeRightGoLeft: 'Amagar a la derecha y salir por la izquierda',
          heelFlick: 'Toque de tacón',
          simpleRainbow: 'Sombrero de espuela sencillo',
          FlickUpVolley: 'Flick Up for Volley',
          rouletteR: 'Ruleta derecha',
          tornadoSpinR: 'Tornado Spin Right'
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
