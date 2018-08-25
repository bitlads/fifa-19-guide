import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

interface Props {
  text: string
  actionText: string
  onPress(): void
}

export default class HomeButton extends React.Component<Props> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: '#fff', alignSelf: 'center' }}>{this.props.text}</Text>
        </View>
        <View style={{ backgroundColor: '#4CAF50', alignSelf: 'stretch', paddingTop: 5, paddingBottom: 5 }}>
          <Text style={{ color: '#fff', alignSelf: 'center' }}>{this.props.actionText}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#424242',
    borderRadius: 5
  }
})
