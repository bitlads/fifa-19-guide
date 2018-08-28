import * as React from 'react'
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
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
          <Toggle
            isXbSelected={this.state.isXboxSelected}
            onToggleXb={() => this.setState({ isXboxSelected: true })}
            onTogglePs={() => this.setState({ isXboxSelected: false })}
          />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{this.props.t('home:dev_message')}</Text>
            <Text style={styles.cardText}>{this.props.t('home:thank_you')}</Text>
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
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{this.props.t('home:newInFifa19')}</Text>
            <Text style={styles.cardText}>{this.props.t('home:newStuff')}</Text>
          </View>
          <View style={styles.row}>
            <HomeButton
              text={this.props.t('common:skills')}
              actionText={this.props.t('common:skills')}
              onPress={() => this.navigate('Skills', this.props.t('common:skills'))}
            />
            <HomeButton
              text={this.props.t('common:celebrations')}
              actionText={this.props.t('common:celebrations')}
              onPress={() => this.navigate('Celebrations', this.props.t('common:celebrations'))}
            />
          </View>
        </ScrollView>
      </View>
    )
  }

  static navigationOptions = {
    title: 'Home'
  }

  private navigate(category: string, title: string) {
    this.props.navigation.navigate('List', {
      category,
      title,
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
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 5
  },
  cardText: {
    color: '#fff',
    fontSize: 16
  },
  home: {
    flex: 1
  }
})
