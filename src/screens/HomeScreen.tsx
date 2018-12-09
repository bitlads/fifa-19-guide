import * as React from 'react'
import { Linking, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CategoryButton from '../components/CategoryButton'
import HomeButton from '../components/HomeButton'
import Toggle from '../components/Toggle'
import { CELEBRATIONS_COLOR, CONSOLE_PS, CONSOLE_XBOX, SKILLS_COLOR } from '../Const'
import Localizer from '../Localizer'
import * as Actions from '../redux/Actions'

interface IProps extends NavigationScreenProps {
  console: string
  setConsole(console: string): void
}

class HomeScreen extends React.Component<IProps> {
  public static navigationOptions = {
    title: 'Home'
  }
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.home}>
          <Text style={styles.header}>{Localizer.t('categories')}</Text>
          <View style={styles.row}>
            <CategoryButton
              category={Localizer.t('skills')}
              color={SKILLS_COLOR}
              image={require('../../assets/skills_white.png')}
              onPress={() => this.navigateSkills()}
            />
          </View>
          <View style={styles.row}>
            <CategoryButton
              category={Localizer.t('celebrations')}
              color={CELEBRATIONS_COLOR}
              image={require('../../assets/celebrations_white.png')}
              onPress={() => this.navigateCelebrations()}
            />
          </View>
          <Text style={styles.header}>{Localizer.t('settings')}</Text>
          <Toggle
            isXbSelected={this.props.console === CONSOLE_XBOX}
            onToggleXb={() => this.props.setConsole(CONSOLE_XBOX)}
            onTogglePs={() => this.props.setConsole(CONSOLE_PS)}
          />
          <Text style={styles.header}>{Localizer.t('newInFifa19')}</Text>
          <View style={styles.row}>
            <HomeButton
              text={Localizer.t('newStuff')}
              actionText={Localizer.t('preorder')}
              onPress={() =>
                Linking.openURL(
                  'https://www.amazon.com/gp/product/B07DL2SY2B/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DL2SY2B&linkCode=as2&tag=fifa19-ios-20&linkId=ce9f5ee97422550ec4741d5996f5961a'
                )
              }
            />
          </View>
          <Text style={styles.header}>{Localizer.t('dev_message')}</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>{Localizer.t('thank_you')}</Text>
          </View>
          {Platform.OS !== 'ios' && (
            <View style={styles.row}>
              <HomeButton
                text={Localizer.t('likeTheApp')}
                actionText={'Play Store'}
                onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=io.bitlads.fifa19')}
              />
            </View>
          )}
        </ScrollView>
      </View>
    )
  }

  private navigateSkills() {
    this.props.navigation.navigate('Skills', {
      title: Localizer.t('skills')
    })
  }

  private navigateCelebrations() {
    this.props.navigation.navigate('Celebrations', {
      title: Localizer.t('celebrations')
    })
  }
}

function mapStateToProps(state: any, props: any) {
  return {
    console: state.dataReducer.console
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(Actions as any, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

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
