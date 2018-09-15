import * as React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import SkillsScreen from './src/screens/SkillsScreen'
import CelebrationsScreen from './src/screens/CelebrationsScreen'
import Store from './src/redux/Store';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation'
import { StatusBar, View } from 'react-native'
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

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1, backgroundColor: '#303030' }}>
          <StatusBar barStyle="light-content" />
          <StackNav />
          <AdMobBanner style={{ alignSelf: 'center' }} adUnitID={ADMOB_BANNER_ID} bannerSize="banner" testDeviceID={S8_TEST_ID} />
        </View>
      </Provider>
    )
  }
}
