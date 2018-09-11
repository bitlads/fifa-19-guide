import * as React from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HomeButton from '../components/HomeButton'
import CategoryButton from '../components/CategoryButton'
import { translate } from 'react-i18next'
import { NavigationScreenProps } from 'react-navigation'
import { TranslationProps } from '../Const'
import { FIFA_19_AMAZON_LINK } from '../Secrets'
import Toggle from '../components/Toggle'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from '../Secrets'

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
    firebase.initializeApp(FIREBASE_CONFIG)

    const today = new Date()
    const release = new Date('September 28, 2018 00:00:00')
    var timeDiff = Math.abs(release.getTime() - today.getTime())
    this.daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.home}>
          <Text style={styles.header}>{this.props.t('home:categories')}</Text>
          <View style={styles.row}>
            <CategoryButton
              category={this.props.t('common:skills')}
              color="#03A9F4"
              image={require('../../assets/skills.png')}
              t={this.props.t}
              onPress={() => this.navigateSkills()}
            />
          </View>
          <View style={styles.row}>
            <CategoryButton
              category={this.props.t('common:celebrations')}
              color="#d32f2f"
              image={require('../../assets/celebrations.png')}
              t={this.props.t}
              onPress={() => this.navigateCelebrations()}
            />
          </View>
          <Text style={styles.header}>{this.props.t('home:settings')}</Text>
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

  static navigationOptions = {
    title: 'FIFA 19'
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
