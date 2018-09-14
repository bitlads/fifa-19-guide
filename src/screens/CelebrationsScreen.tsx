import React from 'react'
import { translate } from 'react-i18next'
import { NavigationScreenProps } from 'react-navigation'
import { CELEBRATIONS_COLOR, TranslationProps } from '../Const'
import ListScreen from './ListScreen'
import firebase from 'firebase'
require('firebase/firestore')

interface Celebration {
  id: string
  type: string
  controls: string
}

interface Props extends NavigationScreenProps, TranslationProps { }

interface State {
  sections: Array<any>
}

class CelebrationsScreen extends React.Component<Props, State> {
  private isXboxSelected: boolean
  private firestore: firebase.firestore.Firestore

  constructor(props: Props) {
    super(props)
    this.state = {
      sections: []
    }
    this.isXboxSelected = this.props.navigation.getParam('isXboxSelected', true)

    this.firestore = firebase.firestore()
    this.firestore.settings({ timestampsInSnapshots: true })
  }

  componentDidMount() {
    this.fetchOffline()
  }

  render() {
    return <ListScreen t={this.props.t} isXboxSelected={this.isXboxSelected} sections={this.state.sections} color={CELEBRATIONS_COLOR} />
  }

  private fetchFirebase() {
    const data = new Array<any>()
    this.firestore
      .collection('celebrations')
      .get()
      .then(celebrations => {
        celebrations.forEach(celebration => {
          data.push({ ...celebration.data(), name: this.props.t(`celebrations:${celebration.id}`) })
        })
        this.makeSections(data)
      })
  }

  private fetchOffline() {
    const data = require('../../assets/celebrations.json').map((item: any) => {
      return { ...item, name: this.props.t(`celebrations:${item.id}`) }
    })
    this.makeSections(data)
  }

  private makeSections(data: any) {
    const sections = [
      { title: this.props.t('celebrations:basicMoves'), data: new Array<Celebration>() },
      { title: this.props.t('celebrations:runningMoves'), data: new Array<Celebration>() },
      { title: this.props.t('celebrations:finishingMoves'), data: new Array<Celebration>() },
      { title: this.props.t('celebrations:proUnlockables'), data: new Array<Celebration>() },
      { title: this.props.t('celebrations:eaFcUnlockables'), data: new Array<Celebration>() }
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
      title: navigation.getParam('title', ''),
    }
  }
}

export default translate(['list', 'celebrations', 'common'], { wait: true })(CelebrationsScreen)
