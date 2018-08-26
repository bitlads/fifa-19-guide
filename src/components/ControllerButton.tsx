import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

interface Props {
  isXbox: boolean
  id: string
}

const BACKGROUND = '#424242'
const GREEN = '#4CAF50'
const RED = '#f44336'
const BLUE = '#2196F3'
const YELLOW = '#FFEB3B'
const PINK = '#E91E63'

export default class ControllerButton extends React.Component<Props> {
  render() {
    switch (this.props.id) {
      case '@a':
        return this.props.isXbox ? this.renderRoundButton('A', GREEN) : this.renderRoundButton('X', BLUE)
      case '@b':
        return this.props.isXbox ? this.renderRoundButton('B', RED) : this.renderCircleButton()
      case '@x':
        return this.props.isXbox ? this.renderRoundButton('X', BLUE) : this.renderSquareButton()
      case '@y':
        return this.props.isXbox ? this.renderRoundButton('Y', YELLOW) : this.renderTriangleButton()
      case '@ls':
        return this.renderRoundButton('LS', '#fff')
      case '@rs':
        return this.renderRoundButton('RS', '#fff')
      case '@l3':
        return this.renderRoundButton('L3', '#fff')
      case '@r3':
        return this.renderRoundButton('R3', '#fff')
      case '@lb':
        return this.props.isXbox ? this.renderBumperButton('LB') : this.renderBumperButton('L1')
      case '@rb':
        return this.props.isXbox ? this.renderBumperButton('RB') : this.renderBumperButton('R1')
      case '@lt':
        return this.props.isXbox ? this.renderBumperButton('LT') : this.renderBumperButton('L2')
      case '@rt':
        return this.props.isXbox ? this.renderBumperButton('RT') : this.renderBumperButton('R2')
      case '@l':
        return this.renderArrowButton(180)
      case '@r':
        return this.renderArrowButton(0)
      case '@u':
        return this.renderArrowButton(270)
      case '@d':
        return this.renderArrowButton(90)
      default:
        return this.renderUnknown()
    }
  }

  private renderArrowButton(rotation: number) {
    return (
      <View style={[styles.arrowButton, { transform: [{ rotate: `${rotation} deg` }] }]}>
        <View style={styles.arrowHead} />
        <View style={styles.arrowBase} />
      </View>
    )
  }

  private renderBumperButton(text: string) {
    return (
      <View style={styles.bumperButton}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{text}</Text>
      </View>
    )
  }

  private renderRoundButton(text: string, color: string) {
    return (
      <View style={styles.roundButton}>
        <Text style={{ color, fontWeight: 'bold' }}>{text}</Text>
      </View>
    )
  }

  private renderTriangleButton() {
    return (
      <View style={styles.roundButton}>
        <View style={styles.triangle} />
      </View>
    )
  }

  private renderSquareButton() {
    return (
      <View style={styles.roundButton}>
        <View style={styles.square} />
      </View>
    )
  }

  private renderCircleButton() {
    return (
      <View style={styles.roundButton}>
        <View style={styles.circle} />
      </View>
    )
  }

  private renderUnknown() {
    return (
      <View style={styles.roundButton}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  arrowButton: {
    backgroundColor: BACKGROUND,
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  bumperButton: {
    backgroundColor: BACKGROUND,
    width: 45,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  roundButton: {
    backgroundColor: BACKGROUND,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 12,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: GREEN
  },
  arrowHead: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 8,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff'
  },
  arrowBase: {
    width: 6,
    height: 6,
    backgroundColor: '#fff'
  },
  square: {
    width: 14,
    height: 14,
    backgroundColor: BACKGROUND,
    borderWidth: 2,
    borderColor: PINK
  },
  circle: {
    backgroundColor: BACKGROUND,
    width: 16,
    height: 16,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: RED
  }
})
