import * as React from 'react'
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
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
import BuyButton from '../components/BuyButton'

interface Props extends NavigationScreenProps {
  console: string
  setConsole(console: string): void
}

export default class BuyScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.home}>
          <BuyButton />
        </ScrollView>
      </View>
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
  },
  home: {
    flex: 1
  }
})
