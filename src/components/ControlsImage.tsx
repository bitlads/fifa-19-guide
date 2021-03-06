import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Localizer from '../Localizer'
import ControllerButton from './ControllerButton'

interface IProps {
  controls: string
  isXb: boolean
}

export default class ControlsImage extends React.Component<IProps> {
  public render() {
    const items = this.props.controls.split(' ')
    return <View style={styles.container}>{items.map(this.renderItem)}</View>
  }

  private renderItem = (item: string, index: number) => {
    if (item.substring(0, 1) === '@') {
      return <ControllerButton key={index} id={item} isXbox={this.props.isXb} />
    } else {
      return (
        <Text key={index} style={styles.text}>
          {this.localize(item)}
        </Text>
      )
    }
  }

  private localize(item: string) {
    if (item === '+' || item === 'x3' || item === 'x2') {
      return item
    } else {
      return Localizer.t(item)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#424242',
    flexWrap: 'wrap',
    marginTop: 5,
    padding: 10,
    borderRadius: 3
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginRight: 5
  }
})
