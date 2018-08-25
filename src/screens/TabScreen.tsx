import * as React from 'react'
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native'
import { translate } from 'react-i18next'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import HomeTab from './tabs/HomeTab'

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
}

class TabScreen extends React.Component<IProps, IState> {
  state = {
    index: 0,
    routes: [{ key: 'home', title: 'Home' }, { key: 'skills', title: 'Skills' }, { key: 'celebrations', title: 'Celebrations' }]
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t('home:hello')
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
    home: () => <HomeTab />,
    skills: () => <HomeTab />,
    celebrations: () => <HomeTab />
  })
}

export default translate(['home', 'common'], { wait: true })(TabScreen)

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
