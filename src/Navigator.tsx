import { AdMobBanner } from 'expo'
import { Localization } from 'expo-localization'
import * as React from 'react'
import { Platform, StatusBar } from 'react-native'
import { createStackNavigator, SafeAreaView } from 'react-navigation'
import Localizer from './Localizer'
import CelebrationsScreen from './screens/CelebrationsScreen'
import HomeScreen from './screens/HomeScreen'
import SkillsScreen from './screens/SkillsScreen'
import { ADMOB_BANNER_ANDROID, ADMOB_BANNER_IOS, S8_TEST_ID } from './Secrets'

const StackNav = createStackNavigator(
  {
    Home: HomeScreen,
    Skills: SkillsScreen,
    Celebrations: CelebrationsScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#212121',
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

interface IState {
  loading: boolean
}

export default class Navigator extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      loading: true
    }
    this.loadLocale()
  }

  public render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#212121' }} forceInset={{ top: 'never' }}>
        <StatusBar barStyle="light-content" />
        <StackNav />
        <AdMobBanner
          style={{ alignSelf: 'center' }}
          adUnitID={Platform.OS === 'ios' ? ADMOB_BANNER_IOS : ADMOB_BANNER_ANDROID}
          bannerSize="banner"
          testDeviceID={S8_TEST_ID}
        />
      </SafeAreaView>
    )
  }

  private loadLocale() {
    const lng = Localization.locale
    const locale = lng.substr(0, 2)
    Localizer.init(locale)
  }
}
