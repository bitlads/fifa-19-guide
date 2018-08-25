import React from 'react'
import { Text, SectionList, StyleSheet, View } from 'react-native'
import Toggle from '../../components/Toggle'
import ControlsImage from '../../components/ControlsImage'

interface SkillMove {
  id: string
  stars: number
  controls: string
}

interface Props {
  t(key: string): string
  category: string
  isXboxSelected: boolean
}

interface State {
  data: Array<SkillMove>
}

export default class ListTab extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: this.getJsonFromCategory() })
  }

  render() {
    const sections = this.makeSections()
    return (
      <View style={styles.container}>
        <Toggle isXbSelected={this.props.isXboxSelected} onToggleXb={() => {}} onTogglePs={() => {}} />
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

  private getJsonFromCategory() {
    return require('../../assets/data/skills.json')
  }

  private makeSections() {
    if (!this.state.data) return []
    let sections = [
      { title: `1 ${this.props.t('main:star')}`, data: new Array<SkillMove>() },
      { title: `2 ${this.props.t('main:star')}`, data: new Array<SkillMove>() },
      { title: `3 ${this.props.t('main:star')}`, data: new Array<SkillMove>() },
      { title: `4 ${this.props.t('main:star')}`, data: new Array<SkillMove>() },
      { title: `5 ${this.props.t('main:star')}`, data: new Array<SkillMove>() }
    ]
    this.state.data.map(item => {
      sections[item.stars - 1].data.push(item)
    })
    return sections
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
        <Text style={{ fontSize: 18, color: '#fff' }}>{item.id}</Text>
        <ControlsImage controls={item.controls} isXb={this.props.isXboxSelected} t={this.props.t} />
      </View>
    )
  }
}

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
  }
})
