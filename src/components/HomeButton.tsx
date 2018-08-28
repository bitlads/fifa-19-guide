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
      <View style={styles.card}>
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
          <Text style={{ color: '#fff', alignSelf: 'center' }}>{this.props.actionText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#424242',
    borderRadius: 5
  },
  container: {
    flex: 1,
    padding: 10
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#616161',
    alignSelf: 'stretch',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
})
