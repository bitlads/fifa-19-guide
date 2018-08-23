import * as React from 'react'
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import HomeScreen from './src/HomeScreen'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width
}

interface IState {
  index: Number
  routes: { key: string; title: string }[]
}

export default class App extends React.Component<{}, IState> {
  state = {
    index: 0,
    routes: [{ key: 'home', title: 'Home' }, { key: 'skills', title: 'Skills' }, { key: 'celebrations', title: 'Celebrations' }]
  }

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
    home: () => <HomeScreen />,
    skills: () => <HomeScreen />,
    celebrations: () => <HomeScreen />
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBar: {
    backgroundColor: '#000'
  },
  indicator: {
    backgroundColor: '#fff'
  }
})
