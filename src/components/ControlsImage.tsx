import React from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

interface Props {
  t(key: string): string
  controls: string
  isXb: boolean
}

export default class ControlsImage extends React.Component<Props> {
  render() {
    const items = this.props.controls.split(' ')
    return <View style={styles.container}>{items.map(this.renderItem)}</View>
  }

  private renderItem = (item: string, index: number) => {
    if (item.substring(0, 1) === '@') {
      return <Image key={index} style={styles.image} resizeMode="contain" source={this.getImageFromButton(item.substr(1))} />
    } else {
      return (
        <Text key={index} style={styles.text}>
          {this.localize(item)}
        </Text>
      )
    }
  }

  private localize(item: string) {
    return item === '+' ? item : this.props.t(`main:${item}`)
  }

  private getImageFromButton(item: string) {
    return this.props.isXb ? this.getXb(item) : this.getPs(item)
  }

  private getPs(item: string) {
    switch (item) {
      case 'a':
        return require('../assets/images/ps/x.png')
      case 'b':
        return require('../assets/images/ps/circle.png')
      case 'x':
        return require('../assets/images/ps/square.png')
      case 'y':
        return require('../assets/images/ps/triangle.png')
      case 'lb':
        return require('../assets/images/ps/l1.png')
      case 'rb':
        return require('../assets/images/ps/r1.png')
      case 'lt':
        return require('../assets/images/ps/l2.png')
      case 'rt':
        return require('../assets/images/ps/r2.png')
      case 'ls':
        return require('../assets/images/ps/ls.png')
      case 'rs':
        return require('../assets/images/ps/rs.png')
      case 'l':
        return require('../assets/images/left.png')
      case 'r':
        return require('../assets/images/right.png')
      case 'u':
        return require('../assets/images/up.png')
      case 'd':
        return require('../assets/images/down.png')
      default:
        return require('../assets/images/ps/pad.png')
    }
  }

  private getXb(item: string) {
    switch (item) {
      case 'a':
        return require('../assets/images/xb/a.png')
      case 'b':
        return require('../assets/images/xb/b.png')
      case 'x':
        return require('../assets/images/xb/x.png')
      case 'y':
        return require('../assets/images/xb/y.png')
      case 'lb':
        return require('../assets/images/xb/lb.png')
      case 'rb':
        return require('../assets/images/xb/rb.png')
      case 'lt':
        return require('../assets/images/xb/lt.png')
      case 'rt':
        return require('../assets/images/xb/rt.png')
      case 'ls':
        return require('../assets/images/xb/ls.png')
      case 'rs':
        return require('../assets/images/xb/rs.png')
      case 'l':
        return require('../assets/images/left.png')
      case 'r':
        return require('../assets/images/right.png')
      case 'u':
        return require('../assets/images/up.png')
      case 'd':
        return require('../assets/images/down.png')
      default:
        return require('../assets/images/xb/menu.png')
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303030'
  },
  home: {
    flex: 1
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 5
  },
  text: {
    fontSize: 16,
    color: '#fff',
    paddingRight: 5
  }
})
