import React from 'react'
import { Text, TextInput, SectionList, StyleSheet, View } from 'react-native'
import ControlsImage from '../components/ControlsImage'
import { translate } from 'react-i18next'
import { NavigationScreenProps } from 'react-navigation'
import { TranslationProps } from '../Const'

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
  searchText: string
}

class ListScreen extends React.Component<Props, State> {
  private category: string
  private isXboxSelected: boolean

  constructor(props: Props) {
    super(props)
    this.state = {
      data: [],
      searchText: ''
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
        <TextInput
          style={styles.search}
          underlineColorAndroid="#fff"
          onChangeText={searchText => this.setState({ searchText })}
          value={this.state.searchText}
        />
        <SectionList
          style={{ flex: 1 }}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={sections}
          keyExtractor={(item, index) => item + index}
          removeClippedSubviews={true}
        />
      </View>
    )
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', '')
    }
  }

  private getJsonFromCategory() {
    let data
    if (this.category === 'Skills') {
      data = require('../../assets/skills.json')
    } else {
      data = require('../../assets/celebrations.json')
    }
    return data.map((item: any) => {
      return { ...item, id: this.category === 'Skills' ? this.props.t(`skills:${item.id}`) : this.props.t(`celebrations:${item.id}`) }
    })
  }

  private makeSections() {
    if (!this.state.data) return []
    if (this.category === 'Skills') {
      let sections = [
        { title: `1 ${this.props.t('list:star')}`, data: new Array<SkillMove>() },
        { title: `2 ${this.props.t('list:star')}`, data: new Array<SkillMove>() },
        { title: `3 ${this.props.t('list:star')}`, data: new Array<SkillMove>() },
        { title: `4 ${this.props.t('list:star')}`, data: new Array<SkillMove>() },
        { title: `5 ${this.props.t('list:star')}`, data: new Array<SkillMove>() }
      ]
      this.state.data.forEach((item: SkillMove) => {
        if (this.state.searchText === '' || item.id.toLowerCase().includes(this.state.searchText.toLowerCase())) {
          sections[item.stars - 1].data.push(item)
        }
      })
      return sections
    } else {
      let sections = [
        { title: this.props.t('celebrations:runningMoves'), data: new Array<Celebration>() },
        { title: this.props.t('celebrations:finishingMoves'), data: new Array<Celebration>() },
        { title: this.props.t('celebrations:proUnlockables'), data: new Array<Celebration>() },
        { title: this.props.t('celebrations:eaFcUnlockables'), data: new Array<Celebration>() }
      ]
      this.state.data.forEach((item: Celebration) => {
        if (this.state.searchText === '' || item.id.toLowerCase().includes(this.state.searchText.toLowerCase())) {
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
          <Text style={{ fontSize: 18, color: '#fff' }}>{item.id}</Text>
          {item.new && <Text style={styles.new}>{this.props.t('list:new')}</Text>}
        </View>

        <ControlsImage controls={item.controls} isXb={this.isXboxSelected} t={this.props.t} />
      </View>
    )
  }
}

export default translate(['list', 'skills', 'celebrations', 'common'], { wait: true })(ListScreen)

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
  },
  search: {
    height: 40,
    color: '#fff',
    margin: 5,
    textAlign: 'center',
    padding: 5,
    fontSize: 18
  }
})
