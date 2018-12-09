import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface IProps {
  text: string
  actionText: string
  onPress(): void
}

export default class HomeButton extends React.Component<IProps> {
  public render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.card}>
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <View style={styles.button}>
          <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>{this.props.actionText}</Text>
        </View>
      </TouchableOpacity>
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
    textAlign: 'center',
    fontSize: 16
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
