import * as React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import SkillsScreen from './src/screens/SkillsScreen'
import CelebrationsScreen from './src/screens/CelebrationsScreen'
import { createStackNavigator } from 'react-navigation'
import { I18nextProvider, translate } from 'react-i18next'
import i18n from './src/i18n'
import { View } from 'react-native'
import { ADMOB_BANNER_ID, S8_TEST_ID } from './src/Secrets'
import { AdMobBanner } from 'expo'
import { Asset } from 'expo'
Asset

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

const LocalizedStack = ({ t }: any) => {
  return <StackNav screenProps={{ t }} />
}

const options: any = {
  bindI18n: 'languageChanged',
  bindStore: false
}

const ReloadAppOnLanguageChange = translate('common', options)(LocalizedStack)

export default class App extends React.Component<{}> {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <View style={{ flex: 1, backgroundColor: '#303030' }}>
          <ReloadAppOnLanguageChange />
          <AdMobBanner style={{ alignSelf: 'center' }} adUnitID={ADMOB_BANNER_ID} bannerSize="banner" testDeviceID={S8_TEST_ID} />
        </View>
      </I18nextProvider>
    )
  }
}
