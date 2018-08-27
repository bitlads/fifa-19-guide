import * as React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from './src/screens/ListScreen'
import { createStackNavigator } from 'react-navigation'
import { I18nextProvider, translate } from 'react-i18next'
import i18n from './src/i18n'

const StackNav = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen
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
        <ReloadAppOnLanguageChange />
      </I18nextProvider>
    )
  }
}
