import React from 'react'
import { translate } from 'react-i18next'
import { NavigationScreenProps } from 'react-navigation'
import { TranslationProps } from '../Const'
import ListScreen from './ListScreen'

interface SkillMove {
  id: string
  stars: number
  controls: string
}

interface Props extends NavigationScreenProps, TranslationProps {}

interface State {
  sections: Array<any>
}

class SkillsScreen extends React.Component<Props, State> {
  private isXboxSelected: boolean

  constructor(props: Props) {
    super(props)
    this.state = {
      sections: []
    }
    this.isXboxSelected = this.props.navigation.getParam('isXboxSelected', true)
  }

  componentDidMount() {
    const data = require('../../assets/skills.json').map((item: any) => {
      return { ...item, id: this.props.t(`skills:${item.id}`) }
    })
    const sections = [
      { title: `1 ${this.props.t('list:star')}`, data: new Array<SkillMove>() },
      { title: `2 ${this.props.t('list:star')}`, data: new Array<SkillMove>() },
      { title: `3 ${this.props.t('list:star')}`, data: new Array<SkillMove>() },
      { title: `4 ${this.props.t('list:star')}`, data: new Array<SkillMove>() },
      { title: `5 ${this.props.t('list:star')}`, data: new Array<SkillMove>() }
    ]
    data.forEach((item: SkillMove) => {
      sections[item.stars - 1].data.push(item)
    })
    this.setState({ sections })
  }

  render() {
    return this.state.sections.length > 0 && <ListScreen t={this.props.t} isXboxSelected={this.isXboxSelected} sections={this.state.sections} />
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', '')
    }
  }
}

export default translate(['list', 'skills', 'common'], { wait: true })(SkillsScreen)
