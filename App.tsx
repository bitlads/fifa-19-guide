import * as React from 'react'
import { store, persistor } from './src/redux/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Navigator from './src/Navigator'
import { Asset } from 'expo'
Asset

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}
