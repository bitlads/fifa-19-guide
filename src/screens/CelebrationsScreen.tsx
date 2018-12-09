import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { CELEBRATIONS_COLOR } from '../Const'
import Localizer from '../Localizer'
import ListScreen from './ListScreen'

interface ICelebration {
  id: string
  type: string
  controls: string
}

interface IState {
  sections: any[]
}

export default class CelebrationsScreen extends React.Component<NavigationScreenProps, IState> {
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
    return <ListScreen sections={this.state.sections} color={CELEBRATIONS_COLOR} />
  }

  private fetchOffline() {
    this.makeSections(require('../../assets/celebrations.json'))
  }

  private makeSections(data: any) {
    const sections = [
      { title: Localizer.t('basicMoves'), data: new Array<ICelebration>() },
      { title: Localizer.t('runningMoves'), data: new Array<ICelebration>() },
      { title: Localizer.t('finishingMoves'), data: new Array<ICelebration>() },
      { title: Localizer.t('proUnlockables'), data: new Array<ICelebration>() },
      { title: Localizer.t('eaFcUnlockables'), data: new Array<ICelebration>() }
    ]
    data.forEach((item: ICelebration) => {
      switch (item.type) {
        case 'basicMoves':
          sections[0].data.push(item)
          break
        case 'runningMoves':
          sections[1].data.push(item)
          break
        case 'finishingMoves':
          sections[2].data.push(item)
          break
        case 'proUnlockables':
          sections[3].data.push(item)
          break
        case 'eaFcUnlockables':
          sections[4].data.push(item)
          break
      }
    })
    this.setState({ sections })
  }
}
