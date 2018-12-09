import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface IProps extends NavigationScreenProps {
  console: string
  setConsole(console: string): void
}

export default class BuyScreen extends React.Component<IProps> {
  public static navigationOptions = {
    title: 'Home'
  }
  public render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.home} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  home: {
    flex: 1
  }
})
