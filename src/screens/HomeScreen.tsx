import * as React from 'react'
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HomeButton from '../components/HomeButton'
import { translate } from 'react-i18next'
import { NavigationScreenProps } from 'react-navigation'
import { TranslationProps } from '../Const'
import { FIFA_19_AMAZON_LINK } from '../Secrets'
import Toggle from '../components/Toggle'

interface Props extends NavigationScreenProps, TranslationProps {}

interface State {
  isXboxSelected: boolean
}

class HomeScreen extends React.Component<Props, State> {
  private daysLeft: number
  constructor(props: Props) {
    super(props)
    this.state = {
      isXboxSelected: true
    }
    const today = new Date()
    const release = new Date('September 28, 2018 00:00:00')
    var timeDiff = Math.abs(release.getTime() - today.getTime())
    this.daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.home}>
          <Text style={styles.header}>Categories</Text>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.section, { backgroundColor: '#00796B' }]} onPress={() => this.navigateSkills()}>
              <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>{this.props.t('common:skills')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.section, { backgroundColor: '#d32f2f' }]} onPress={() => this.navigateCelebrations()}>
              <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 18 }}>{this.props.t('common:celebrations')}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.header}>Settings</Text>
          <Toggle
            isXbSelected={this.state.isXboxSelected}
            onToggleXb={() => this.setState({ isXboxSelected: true })}
            onTogglePs={() => this.setState({ isXboxSelected: false })}
          />
          <Text style={styles.header}>{this.props.t('home:newInFifa19')}</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>{this.props.t('home:newStuff')}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={{ color: '#fff', fontSize: 36, alignSelf: 'center' }}>{this.daysLeft}</Text>
              <Text style={{ color: '#fff', alignSelf: 'center' }}>{this.props.t('home:days_until')}</Text>
            </View>
            <HomeButton
              text={this.props.t('home:preorder_now')}
              actionText={this.props.t('home:preorder')}
              onPress={() => Linking.openURL(FIFA_19_AMAZON_LINK)}
            />
          </View>
          <Text style={styles.header}>{this.props.t('home:dev_message')}</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>{this.props.t('home:thank_you')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }

  static navigationOptions = {
    title: 'Home'
  }

  private navigateSkills() {
    this.props.navigation.navigate('Skills', {
      title: this.props.t('common:skills'),
      isXboxSelected: this.state.isXboxSelected
    })
  }

  private navigateCelebrations() {
    this.props.navigation.navigate('Celebrations', {
      title: this.props.t('common:celebrations'),
      isXboxSelected: this.state.isXboxSelected
    })
  }
}

export default translate(['home', 'common'], { wait: true })(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  card: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#424242',
    borderRadius: 5
  },
  header: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5
  },
  cardText: {
    color: '#fff',
    fontSize: 16
  },
  home: {
    flex: 1
  },
  section: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    height: 75,
    justifyContent: 'center'
  }
})
