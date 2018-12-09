import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { SKILLS_COLOR } from '../Const'
import Localizer from '../Localizer'
import ListScreen from './ListScreen'

interface ISkillMove {
  id: string
  stars: number
  controls: string
}

interface IState {
  sections: any[]
}

export default class SkillsScreen extends React.Component<NavigationScreenProps, IState> {
  public static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', '')
    }
  }
  constructor(props: NavigationScreenProps) {
    super(props)
    this.state = {
      sections: []
    }
  }

  public componentDidMount() {
    this.fetchOffline()
  }

  public render() {
    return <ListScreen sections={this.state.sections} color={SKILLS_COLOR} />
  }

  private fetchOffline() {
    this.makeSections(require('../../assets/skills.json'))
  }

  private makeSections(data: any) {
    const sections = [
      { title: `1 ${Localizer.t('star')}`, data: new Array<ISkillMove>() },
      { title: `2 ${Localizer.t('star')}`, data: new Array<ISkillMove>() },
      { title: `3 ${Localizer.t('star')}`, data: new Array<ISkillMove>() },
      { title: `4 ${Localizer.t('star')}`, data: new Array<ISkillMove>() },
      { title: `5 ${Localizer.t('star')}`, data: new Array<ISkillMove>() }
    ]
    data.forEach((item: ISkillMove) => {
      sections[item.stars - 1].data.push(item)
    })
    this.setState({ sections })
  }
}
