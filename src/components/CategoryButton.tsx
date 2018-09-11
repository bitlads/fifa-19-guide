import * as React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TranslationProps } from '../Const'

interface Props extends TranslationProps {
  category: string
  color: string
  image: any
  onPress(): void
}

export default class CategoryButton extends React.Component<Props> {
  render() {
    return (
      <TouchableOpacity style={[styles.container, { backgroundColor: this.props.color }]} onPress={this.props.onPress}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>{this.props.category.toUpperCase()}</Text>
          <Text style={styles.browse}>BROWSE</Text>
        </View>
        <Image style={{ height: 100, width: 100 }} resizeMode="contain" source={this.props.image} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 3,
    alignItems: 'center'
  },
  browse: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    margin: 10,
    fontWeight: 'bold'
  }
})
