import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { CELEBRATIONS_COLOR } from '../Const'
import ListScreen from './ListScreen'
//import firebase from 'firebase'
//require('firebase/firestore')
import Localizer from '../Localizer'

interface Celebration {
  id: string
  type: string
  controls: string
}

interface Props extends NavigationScreenProps {}

interface State {
  sections: Array<any>
}

export default class CelebrationsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      sections: []
    }
  }

  componentDidMount() {
    this.fetchOffline()
  }

  render() {
    return <ListScreen sections={this.state.sections} color={CELEBRATIONS_COLOR} />
  }

  private fetchOffline() {
    this.makeSections(require('../../assets/celebrations.json'))
  }

  private makeSections(data: any) {
    const sections = [
      { title: Localizer.t('basicMoves'), data: new Array<Celebration>() },
      { title: Localizer.t('runningMoves'), data: new Array<Celebration>() },
      { title: Localizer.t('finishingMoves'), data: new Array<Celebration>() },
      { title: Localizer.t('proUnlockables'), data: new Array<Celebration>() },
      { title: Localizer.t('eaFcUnlockables'), data: new Array<Celebration>() }
    ]
    data.forEach((item: Celebration) => {
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

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', '')
    }
  }
}
