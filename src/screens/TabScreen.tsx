import * as React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native'
import { translate } from 'react-i18next'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import HomeTab from './tabs/HomeTab'
import ListTab from './tabs/ListTab'

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
    title: screenProps.t('main:app_name')
  })

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
          initialLayout={initialLayout}
          tabBarPosition="bottom"
        />
      </SafeAreaView>
    )
  }

  private handleIndexChange = (index: Number) => this.setState({ index })

  private renderTabBar = (props: any) => <TabBar {...props} style={styles.tabBar} indicatorStyle={styles.indicator} />

  private renderScene = SceneMap({
    home: () => (
      <HomeTab
        t={this.props.t}
        isXboxSelected={this.state.isXbox}
        onToggleXb={() => this.setState({ isXbox: true })}
        onTogglePs={() => this.setState({ isXbox: false })}
      />
    ),
    skills: () => <ListTab t={this.props.t} category="Skills" isXboxSelected={this.state.isXbox} />,
    celebrations: () => <View />
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
  indicator: {
    backgroundColor: '#fff'
  }
})
