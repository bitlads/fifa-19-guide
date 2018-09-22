import * as React from 'react'
import HomeScreen from './screens/HomeScreen'
import SkillsScreen from './screens/SkillsScreen'
import CelebrationsScreen from './screens/CelebrationsScreen'
import { createStackNavigator } from 'react-navigation'
import { StatusBar, View, ActivityIndicator } from 'react-native'
import { ADMOB_BANNER_ID, S8_TEST_ID } from './Secrets'
import { AdMobBanner } from 'expo'
import Expo from 'expo'
import Localizer from './Localizer'
const expo: any = Expo

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

interface State {
  loading: boolean
}

export default class Navigator extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      loading: true
    }
    this.loadLocale()
  }

  render() {
    return this.state.loading ? <ActivityIndicator /> : this.renderApp()
  }

  private renderApp() {
    return (
      <View style={{ flex: 1, backgroundColor: '#303030' }}>
        <StatusBar barStyle="light-content" />
        <StackNav />
        <AdMobBanner style={{ alignSelf: 'center' }} adUnitID={ADMOB_BANNER_ID} bannerSize="banner" testDeviceID={S8_TEST_ID} />
      </View>
    )
  }

  private loadLocale() {
    expo.DangerZone.Localization.getCurrentLocaleAsync().then((lng: string) => {
      const locale = lng.substr(0, 2)
      Localizer.init(locale)
      this.setState({ loading: false })
    })
  }
}
