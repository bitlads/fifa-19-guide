import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface IProps extends NavigationScreenProps {
  name: string
  image: any
  onPress(): void
}

export default class BuyButton extends React.Component<IProps> {
  public static navigationOptions = {
    title: 'Home'
  }
  public render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View>
          <Text>Amazon</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  }
})
