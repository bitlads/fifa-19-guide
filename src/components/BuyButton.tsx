import * as React from 'react'
import { Linking, ScrollView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import HomeButton from '../components/HomeButton'
import CategoryButton from '../components/CategoryButton'
import { NavigationScreenProps } from 'react-navigation'
import { SKILLS_COLOR, CELEBRATIONS_COLOR } from '../Const'
import { FIFA_19_AMAZON_LINK } from '../Secrets'
import Toggle from '../components/Toggle'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from '../Secrets'
import Localizer from '../Localizer'
import { CONSOLE_XBOX, CONSOLE_PS } from '../Const'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../redux/Actions'

interface Props extends NavigationScreenProps {
  name: string
  image: any
  onPress(): void
}

export default class BuyButton extends React.Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View>
          <Text>Amazon</Text>
        </View>
      </TouchableOpacity>
    )
  }

  static navigationOptions = {
    title: 'Home'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  }
})
