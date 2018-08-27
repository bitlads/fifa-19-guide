import React from 'react'
import { Text, SectionList, StyleSheet, View } from 'react-native'
import ControlsImage from '../components/ControlsImage'
import { translate } from 'react-i18next'
import { NavigationScreenProps } from 'react-navigation'
import { TranslationProps } from '../Const'
import { ADMOB_BANNER_ID } from '../Secrets'
import { AdMobBanner } from 'expo'

interface SkillMove {
  id: string
  stars: number
  controls: string
}

interface Celebration {
  id: string
  type: string
  controls: string
}

interface Props extends NavigationScreenProps, TranslationProps {}

interface State {
  data: Array<any>
}

class ListScreen extends React.Component<Props, State> {
  private category: string
  private isXboxSelected: boolean

  constructor(props: Props) {
    super(props)
    this.state = {
      data: []
    }
    const { navigation } = this.props
    this.category = navigation.getParam('category', '')
    this.isXboxSelected = navigation.getParam('isXboxSelected', true)
  }

  componentDidMount() {
    this.setState({ data: this.getJsonFromCategory() })
  }

  render() {
    const sections = this.makeSections()
    return (
      <View style={styles.container}>
        <SectionList
          style={{ flex: 1 }}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={sections}
          keyExtractor={(item, index) => item + index}
          removeClippedSubviews={true}
        />
        <AdMobBanner style={{ alignSelf: 'center' }} adUnitID={ADMOB_BANNER_ID} bannerSize="fullBanner" testDeviceID="EMULATOR" />
      </View>
    )
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', '')
    }
  }

  private getJsonFromCategory() {
    if (this.category === 'Skills') {
      return require('../../assets/skills.json')
    } else {
      return require('../../assets/celebrations.json')
    }
  }

  private makeSections() {
    if (!this.state.data) return []
    if (this.category === 'Skills') {
      let sections = [
        { title: `1 ${this.props.t('main:star')}`, data: new Array<SkillMove>() },
        { title: `2 ${this.props.t('main:star')}`, data: new Array<SkillMove>() },
        { title: `3 ${this.props.t('main:star')}`, data: new Array<SkillMove>() },
        { title: `4 ${this.props.t('main:star')}`, data: new Array<SkillMove>() },
        { title: `5 ${this.props.t('main:star')}`, data: new Array<SkillMove>() }
      ]
      this.state.data.map((item: SkillMove) => {
        sections[item.stars - 1].data.push(item)
      })
      return sections
    } else {
      let sections = [
        { title: this.props.t('runningMoves'), data: new Array<Celebration>() },
        { title: this.props.t('finishingMoves'), data: new Array<Celebration>() },
        { title: this.props.t('proUnlockables'), data: new Array<Celebration>() },
        { title: this.props.t('eaFcUnlockables'), data: new Array<Celebration>() }
      ]
      this.state.data.map((item: Celebration) => {
        switch (item.type) {
          case 'runningMoves':
            sections[0].data.push(item)
            break
          case 'finishingMoves':
            sections[1].data.push(item)
            break
          case 'proUnlockables':
            sections[2].data.push(item)
            break
          case 'eaFcUnlockables':
            sections[3].data.push(item)
            break
        }
      })
      return sections
    }
  }

  private renderSectionHeader = ({ section: { title } }: any) => {
    return (
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#fff' }}>{title}</Text>
      </View>
    )
  }

  private renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.item} key={index}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <Text style={{ fontSize: 18, color: '#fff' }}>{this.props.t(`main:${item.id}`)}</Text>
          {item.new && <Text style={styles.new}>{this.props.t('main:new')}</Text>}
        </View>

        <ControlsImage controls={item.controls} isXb={this.isXboxSelected} t={this.props.t} />
      </View>
    )
  }
}

export default translate(['main', 'common'], { wait: true })(ListScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  header: {
    padding: 5,
    backgroundColor: '#FFAB00'
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ffffff1f'
  },
  new: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#d32f2f',
    borderRadius: 5,
    marginLeft: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
})
