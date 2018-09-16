import * as React from 'react'
import HomeScreen from './src/screens/HomeScreen'
//import SkillsScreen from './src/screens/SkillsScreen'
//import CelebrationsScreen from './src/screens/CelebrationsScreen'
import Store from './src/redux/Store';
import { Provider } from 'react-redux';
import Navigator from './src/Navigator'
import { Asset } from 'expo'
Asset

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    )
  }
}
