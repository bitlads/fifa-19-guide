import * as React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Navigator from './src/Navigator'
import { persistor, store } from './src/redux/Store'

export default class App extends React.Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}
