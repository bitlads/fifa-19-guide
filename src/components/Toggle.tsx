import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface IProps {
  isXbSelected: boolean
  onToggleXb(): void
  onTogglePs(): void
}

export default class Toggle extends React.Component<IProps> {
  public render() {
    return (
      <View style={styles.toggle}>
        <TouchableOpacity onPress={this.props.onToggleXb} style={this.props.isXbSelected ? styles.xbButton : styles.disabledButton}>
          <Text style={styles.text}>Xbox</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.onTogglePs} style={this.props.isXbSelected ? styles.disabledButton : styles.psButton}>
          <Text style={styles.text}>Playstation</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toggle: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: '#424242'
  },
  xbButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  psButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  disabledButton: {
    flex: 1,
    backgroundColor: '#9E9E9E',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  text: {
    color: '#fff'
  }
})
