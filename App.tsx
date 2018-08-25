import * as React from 'react'
import TabScreen from './src/screens/TabScreen'
import { createStackNavigator } from 'react-navigation'
import { I18nextProvider, translate } from 'react-i18next'
import i18n from './src/i18n'

const Stack = createStackNavigator(
  {
    Tabs: TabScreen
  },
  {
    initialRouteName: 'Tabs',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#212121'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const LocalizedStack = ({ t }: any) => {
  return <Stack screenProps={{ t }} />
}

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false
})(LocalizedStack)

export default class App extends React.Component<{}> {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <ReloadAppOnLanguageChange />
      </I18nextProvider>
    )
  }
}
