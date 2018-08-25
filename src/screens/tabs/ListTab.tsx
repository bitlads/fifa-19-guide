import React from 'react'
import { Text, SectionList, StyleSheet, View } from 'react-native'
import Toggle from '../../components/Toggle'
import ControlsImage from '../../components/ControlsImage'

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

interface Props {
  t(key: string): string
  category: string
  isXboxSelected: boolean
}

interface State {
  data: Array<any>
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
    if (this.props.category === 'Skills') {
      return require('../../assets/data/skills.json')
    } else {
      return require('../../assets/data/celebrations.json')
    }
  }

  private makeSections() {
    if (!this.state.data) return []
    if (this.props.category === 'Skills') {
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
        { title: 'Running', data: new Array<Celebration>() },
        { title: 'Finishing', data: new Array<Celebration>() },
        { title: 'Pro Unlockables', data: new Array<Celebration>() },
        { title: 'EA FC Unlockables', data: new Array<Celebration>() }
      ]
      this.state.data.map((item: Celebration) => {
        switch (item.type) {
          case 'Running':
            sections[0].data.push(item)
            break
          case 'Finishing':
            sections[1].data.push(item)
            break
          case 'Pro Unlockables':
            sections[2].data.push(item)
            break
          case 'EA FC Unlockables':
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
