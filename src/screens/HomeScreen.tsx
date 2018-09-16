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
import { connect } from 'react-redux';
import Localizer from '../Localizer';

interface Props extends NavigationScreenProps {
  localizer: Localizer
}

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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.home}>
          <Text style={styles.header}>{this.props.localizer.t('categories')}</Text>
          <View style={styles.row}>
            <CategoryButton
              category={this.props.localizer.t('skills')}
              color={SKILLS_COLOR}
              image={require('../../assets/skills.png')}
              onPress={() => this.navigateSkills()}
            />
          </View>
          <View style={styles.row}>
            <CategoryButton
              category={this.props.localizer.t('celebrations')}
              color={CELEBRATIONS_COLOR}
              image={require('../../assets/celebrations.png')}
              onPress={() => this.navigateCelebrations()}
            />
          </View>
          <Text style={styles.header}>{this.props.localizer.t('settings')}</Text>
          <Toggle
            isXbSelected={this.state.isXboxSelected}
            onToggleXb={() => this.setState({ isXboxSelected: true })}
            onTogglePs={() => this.setState({ isXboxSelected: false })}
          />
          <Text style={styles.header}>{this.props.localizer.t('newInFifa19')}</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>{this.props.localizer.t('newStuff')}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={{ color: '#fff', fontSize: 36, alignSelf: 'center' }}>{this.daysLeft}</Text>
              <Text style={{ color: '#fff', alignSelf: 'center' }}>{this.props.localizer.t('days_until')}</Text>
            </View>
            <HomeButton
              text={this.props.localizer.t('preorder_now')}
              actionText={this.props.localizer.t('preorder')}
              onPress={() => Linking.openURL(FIFA_19_AMAZON_LINK)}
            />
          </View>
          <Text style={styles.header}>{this.props.localizer.t('dev_message')}</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>{this.props.localizer.t('thank_you')}</Text>
          </View>
          <View style={styles.row}>
            <HomeButton
              text={this.props.localizer.t('likeTheApp')}
              actionText={this.props.localizer.t('playStore')}
              onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=io.bitlads.fifa19')}
            />
          </View>
        </ScrollView>
      </View>
    )
  }

  private navigateSkills() {
    this.props.navigation.navigate('Skills', {
      title: this.props.localizer.t('skills'),
      isXboxSelected: this.state.isXboxSelected
    })
  }

  private navigateCelebrations() {
    this.props.navigation.navigate('Celebrations', {
      title: this.props.localizer.t('celebrations'),
      isXboxSelected: this.state.isXboxSelected
    })
  }

  static navigationOptions = {
    title: 'FIFA 19'
  }
}

function mapStateToProps(state: any, props: any) {
  return {
    localizer: state.dataReducer.localizer
  }
}

export default connect(mapStateToProps)(HomeScreen);

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
