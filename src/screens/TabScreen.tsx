/*import * as React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native'
import { translate } from 'react-i18next'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { AdMobBanner } from 'expo'
import { ADMOB_BANNER_ID } from '../Secrets'
import HomeTab from './tabs/HomeTab'
import ListTab from './ListScreen'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width
}

interface IProps {
  t(key: string): string
}

interface IState {
  index: Number
  routes: { key: string; title: string }[]
  isXbox: boolean
}

class TabScreen extends React.Component<IProps, IState> {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: this.props.t('main:home') },
      { key: 'skills', title: this.props.t('main:skills') },
      { key: 'celebrations', title: this.props.t('main:celebrations') }
    ],
    isXbox: true
  }

  static navigationOptions = ({ navigation, screenProps }: any) => ({
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <View style={{ height: 20, width: 20, backgroundColor: '#fff' }} />
  })

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#303030' }}>
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
          initialLayout={initialLayout}
        />
        <AdMobBanner style={{ alignSelf: 'center' }} adUnitID={ADMOB_BANNER_ID} bannerSize="fullBanner" testDeviceID="EMULATOR" />
      </SafeAreaView>
    )
  }

  private handleIndexChange = (index: Number) => this.setState({ index })

  private renderTabBar = (props: any) => <TabBar {...props} style={styles.tabBar} labelStyle={styles.label} indicatorStyle={styles.indicator} scrollEnabled />

  private renderScene = SceneMap({
    home: () => (
      <HomeTab
        t={this.props.t}
        isXboxSelected={this.state.isXbox}
        onToggleXb={() => this.setState({ isXbox: true })}
        onTogglePs={() => this.setState({ isXbox: false })}
      />
    ),
    skills: () => <ListTab t={this.props.t} category="Skills" />,
    celebrations: () => <ListTab t={this.props.t} category="Celbrations" />
  })
}

export default translate(['main', 'common'], { wait: true })(TabScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBar: {
    backgroundColor: '#212121'
  },
  label: {},
  indicator: {
    backgroundColor: '#fff'
  }
})*/
