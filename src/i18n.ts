import i18n from 'i18next'
import Expo from 'expo'
import { reactI18nextModule } from 'react-i18next'

const expo: any = Expo

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback: any) => {
    return /*'en'; */ expo.DangerZone.Localization.getCurrentLocaleAsync().then((lng: any) => {
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
        common: {
          app_name: 'Ultimate Guide for FIFA 19',
          skills: 'Skills',
          celebrations: 'Celebrations'
        },
        home: {
          home: 'Home',
          dev_message: 'Message from the developer',
          thank_you: 'Thank you for downloading Ultimate Guide for FIFA 19. The app is constantly updated with new information so check back often!',
          days_until: 'days until FIFA 19',
          preorder: 'Preorder',
          preorder_now: 'Preorder today for exclusive Ultimate Team content',
          newInFifa19: 'New in FIFA 19',
          newStuff: '- 20 new skill moves\n- 11 new celebrations\n- Champions League Mode\n- Survival Mode'
        },
        list: {
          hold: 'Hold',
          flick: 'Flick',
          roll: 'Roll',
          click: 'click',
          tap: 'Tap',
          press: 'Press',
          then: 'Then',
          star: 'Star',
          new: 'New',
          or: 'or'
        },
        skills: {
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
        },
        celebrations: {
          runningMoves: 'Running Moves',
          finishingMoves: 'Finishing Moves',
          proUnlockables: 'Pro Unlockables',
          eaFcUnlockables: 'EA FC Unlockables',
          pardon: 'Pardon',
          dance: 'Dance',
          kneeWalk: 'Knee Walk',
          crocodile: 'Crocodile',
          handSpring: 'Hand spring',
          doubleSIII: 'Double SIII',
          thumbSuck: 'Thumb Suck',
          praiseOnKnees: 'Praise on Knees',
          fallToKneesBeg: 'Fall To Knees & Beg',
          kissTheGround: 'Kiss The Ground',
          handsOut: 'Hand Out',
          canYouHearMe: 'Can You Hear Me?',
          scorpion: 'Scorpion',
          backflips: 'Backflips',
          littleBrother: 'Little Brother',
          backwardsWorm: 'Backwards Worm',
          iCantHearYou: 'I Can’t Hear You',
          doubleArmSwing: 'Double Arm Swing',
          armsOut: 'Arms Out',
          workout: 'Workout',
          theBear: 'The Bear',
          golfSwing: 'Golf Swing',
          rowingOnKnees: 'Rowing on Knees',
          standTall: 'Stand Tall',
          brickFall: 'Brick Fall',
          x: 'X',
          handstand: 'Handstand',
          comeOn: 'Come On!',
          phoneItIn: 'Phone It In',
          numberOne: 'Number One',
          uncontrolledBackflip: 'Uncontrolled Backflip',
          jumpKicks: 'Jump Kicks',
          giddyUp: 'Giddy Up',
          neighbourhood: 'Neighbourhood',
          bigMan: 'Big Man',
          gallopDance: 'Gallop Dance',
          cradleSwing: 'Cradle Swing',
          timber: 'Timber',
          showRespect: 'Show Respect',
          waddle: 'Waddle',
          cockroach: 'Cockroach',
          signatureMove: 'Signature Finishing Move',
          muevelo: 'Muevelo',
          bellyFlop: 'Belly Flop',
          theSalute: 'The Salute',
          babyGirl: 'Baby Girl',
          rugby: 'Rugby',
          pushItDown: 'Push It Down',
          armsPointingUp: 'Arms Pointing Up',
          calmDown: 'Calm Down',
          hypnosis: 'Hypnosis',
          muscleFlex: 'Muscle Flex',
          hangLoose: 'Hang Loose',
          heartSymbol: 'Heart Symbol',
          spinAndFall: 'Spin & Fall',
          oneArmRaised: 'One Arm Raised',
          theWorm: 'The Worm',
          handOnHead: 'Hand on Head',
          chestThump: 'Chest Thump',
          motorbike: 'Motorbike',
          shhhh: 'Shhhhh!',
          walkLikeMe: 'Walk Like Me',
          wristFlick: 'Wrist Flick',
          matador: 'Matador',
          pointToSkyFinish: 'Point to the Sky',
          iceSkating: 'Ice Skating',
          twistFlip: 'Twist Flip (agile players) or Cartwheel Roll',
          dance1: 'Dance 1',
          spanishDance: 'Spanish Dance',
          dance2: 'Dance 2',
          mannequin: 'Mannequin',
          baby: 'Baby',
          blowKisses: 'Blow Kisses',
          slideOnBack: 'Slide on Back',
          flyingBird: 'Flying Bird',
          aeroplane: 'Aeroplane',
          bailandoRobot: 'Bailando Robot',
          elbow: 'Elbow',
          kneeSlideFail: 'Knee Slide Fail',
          whoAmI: 'Who Am I',
          heart: 'Heart',
          breakDance: 'Break Dance',
          ko: 'KO',
          fingerPoints: 'Finger Points',
          floorSpin: 'Floor Spin',
          stirThePot: 'Stir the Pot',
          telephone: 'Telephone',
          glamourSlide: 'Glamour Slide',
          ridingWave: 'Riding the Wave',
          karateKicks: 'Karate Kicks',
          pointToSky: 'Points to Sky',
          rightHereRightNow: 'Right Here Right Now',
          dance3: 'Dance 3',
          dance4: 'Dance 4',
          chestSlide: 'Chest Slide',
          flyingDive: 'Flying Dive',
          handBite: 'Hand Bite',
          riverDance: 'River Dance',
          prancingBird: 'Prancing Bird',
          manyBows: 'Many Bows',
          windmill: 'Windmill',
          cellPhone: 'Cell Phone',
          millyRock: 'Milly Rock',
          pushUps: 'Push Ups',
          oldMan: 'Old Man',
          kneeSlideToSit: 'Knee Slide to Sit',
          kissTheRing: 'Kiss the Ring',
          earTwist: 'Ear Twist',
          pattyCake: 'Patty Cake',
          seatedRowing: 'Seated Rowing',
          mask: 'Mask',
          pipe: 'Pipe',
          kissTheWrist: 'Kiss the Wrist'
        }
      },
      es: {
        common: {
          app_name: 'Guía Máxima de FIFA 19',
          skills: 'Filigranas',
          celebrations: 'Celebraciones'
        },
        home: {
          home: 'Inicio',
          dev_message: 'Mensaje del desarrollador',
          thank_you:
            'Gracias por descargar Guía Máxima de FIFA 19. ¡La app es actualizada constantemente con información nuevo entonces vuelva pronto para ver mas contenido!',
          days_until: 'días hasta FIFA 19',
          preorder: 'Reserva',
          preorder_now: 'Reserva hoy para contenido especial de Ultimate Team',
          newInFifa19: 'Nuevo en FIFA 19',
          newStuff: '- 20 filigranas nuevas\n- 11 celebraciones nuevas\n- Modo Liga de Campeones\n- Modo Supervivencia'
        },
        list: {
          hold: 'Mantener',
          flick: 'Toque',
          roll: 'Rota',
          click: 'Mantener Pulsado',
          tap: 'Pulsar',
          press: 'Pulsar',
          then: 'Luego',
          star: 'Estrella',
          new: 'Nuevo',
          or: 'o'
        },
        skills: {
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
        },
        celebrations: {
          runningMoves: 'Movimietos en Carrera',
          finishingMoves: 'Movimientos de Finalización',
          proUnlockables: 'Desbloqueables Pro',
          eaFcUnlockables: 'Desbloqueables de EAS FC',
          pardon: '¿Disculpa?',
          dance: 'Baile',
          kneeWalk: 'Andar de rodillas',
          crocodile: 'Crocodile',
          handSpring: 'Voltereta frontal',
          doubleSIII: 'Double SIII',
          thumbSuck: 'Chuparse el pulgar',
          praiseOnKnees: 'Rezar de rodillas',
          fallToKneesBeg: 'Caer de rodillas y suplicar',
          kissTheGround: 'Kiss The Ground',
          handsOut: 'Manos abiertas',
          canYouHearMe: '¿Me oyes?',
          scorpion: 'Escorpión',
          backflips: 'Saltos hacia atrás',
          littleBrother: 'Little Brother',
          backwardsWorm: 'Gusano hacia atrás',
          iCantHearYou: 'No te oigo',
          doubleArmSwing: 'Doble giro de brazo',
          armsOut: 'Con los brazos abiertos',
          workout: 'Entrenamiento',
          theBear: 'Garras de oso',
          golfSwing: 'Palo de golf',
          rowingOnKnees: 'Remar de rodillas',
          standTall: 'Mirar al cielo',
          brickFall: 'Desplomarse ',
          x: 'X',
          handstand: 'Hacer el pino',
          comeOn: '¡Vamos!',
          phoneItIn: 'Phone It In',
          numberOne: 'Number One',
          uncontrolledBackflip: 'Salto hacia atrás descontrolado',
          jumpKicks: 'Patada voladora',
          giddyUp: 'Giddy Up',
          neighbourhood: 'Neighbourhood',
          bigMan: 'Tío grande',
          gallopDance: 'Baile del caballo',
          cradleSwing: 'Acunar al bebé',
          timber: '¡Tronco va!',
          showRespect: 'Un poco de respeto',
          waddle: 'Andar como un pato',
          cockroach: 'La cucaracha',
          signatureMove: 'Movimiento de definición personal',
          muevelo: 'Muévelo',
          bellyFlop: 'Planchazo',
          theSalute: 'A la orden',
          babyGirl: 'La niña',
          rugby: 'Rugby',
          pushItDown: 'Presiónalo',
          armsPointingUp: 'Brazos hacia arriba',
          calmDown: 'Tranquilo todo el mundo',
          hypnosis: 'Hipnosis',
          muscleFlex: 'Marcar músculo',
          hangLoose: 'Hang Loose',
          heartSymbol: 'Símbolo del corazón',
          spinAndFall: 'Giro y caída',
          oneArmRaised: 'Dedo al cielo',
          theWorm: 'El gusano',
          handOnHead: 'Mano sobre la cabeza',
          chestThump: 'Golpes al pecho',
          motorbike: 'La moto',
          shhhh: 'Apuntando al cielo',
          walkLikeMe: 'Imítame',
          wristFlick: 'Giro de muñeca',
          matador: 'Matador',
          pointToSkyFinish: 'Señalando al cielo',
          iceSkating: 'Patinaje sobre hielo',
          twistFlip: 'Voltereta en el aire (jugador ágil) o rodar',
          dance1: 'Baile 1',
          spanishDance: 'Bailecito',
          dance2: 'Baile 2',
          mannequin: 'Mannequin',
          baby: 'El bebé',
          blowKisses: 'Enviar besos',
          slideOnBack: 'Deslizarse de espaldas',
          flyingBird: 'El pájaro',
          aeroplane: 'Avión',
          bailandoRobot: 'Baile del robot',
          elbow: 'Codo / El Dab',
          kneeSlideFail: 'Deslizamiento de rodillas fallido',
          whoAmI: '¿Quién soy?',
          heart: 'Corazón',
          breakDance: 'Break Dance',
          ko: 'K.O.',
          fingerPoints: 'Señalar haciendo las pistolas',
          floorSpin: 'Giro en el suelo',
          stirThePot: 'Flexión con pelota',
          telephone: 'Teléfono',
          glamourSlide: 'Deslizamiento elegante',
          ridingWave: 'Montando la ola',
          karateKicks: 'Patadas de kárate',
          pointToSky: 'Apuntando al cielo',
          rightHereRightNow: 'Aquí y ahora',
          dance3: 'Baile 3',
          dance4: 'Baile 4',
          chestSlide: 'Deslizarse sobre el pecho',
          flyingDive: 'Zambullida',
          handBite: 'Morderse la mano',
          riverDance: 'Danza irlandesa',
          prancingBird: 'Pájaro rampante',
          manyBows: 'Muchas reverencias',
          windmill: 'Hacer el molinillo',
          cellPhone: 'Teléfono móvil',
          millyRock: 'Milly Rock',
          pushUps: 'Hacer flexiones',
          oldMan: 'El viejo',
          kneeSlideToSit: 'Deslizarse de rodillas y sentarse',
          kissTheRing: 'Besar el anillo',
          earTwist: 'Gesto de oreja',
          pattyCake: 'Palmas palmitas',
          seatedRowing: 'Remar sentado',
          mask: 'Máscara',
          pipe: 'Pipa',
          kissTheWrist: 'Besarse la muñeca'
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
