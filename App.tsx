import * as React from 'react'
import TabScreen from './src/TabScreen'
import { createStackNavigator } from 'react-navigation'

const RootStack = createStackNavigator(
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

export default class App extends React.Component<{}> {
  render() {
    return <RootStack />
  }
}
