import React from 'react'
import { translate } from 'react-i18next'
import { NavigationScreenProps } from 'react-navigation'
import { TranslationProps } from '../Const'
import ListScreen from './ListScreen'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import firebase from 'firebase'
require('firebase/firestore')

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
    return <ListScreen t={this.props.t} isXboxSelected={this.isXboxSelected} sections={this.state.sections} color="#00796B" setLiked={this.setLiked} />
  }

  private fetchFirebase() {
    const data = new Array<any>()
    this.firestore
      .collection('skills')
      .get()
      .then(skills => {
        skills.forEach(skill => {
          data.push({ ...skill.data(), name: this.props.t(`skills:${skill.id}`) })
        })
        this.makeSections(data)
      })
  }

  private fetchOffline() {
    const data = require('../../assets/skills.json').map((item: any) => {
      return { ...item, name: this.props.t(`skills:${item.id}`) }
    })
    this.makeSections(data)
  }

  private makeSections(data: any) {
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

  private setLiked = (item: any) => {
    this.firestore
      .collection('skills')
      .doc(item.id)
      .get()
      .then(skill => {
        this.firestore
          .collection('skills')
          .doc(skill.id)
          .set({ ...skill.data(), likes: skill.get('likes') + 1 })
          .then(() => {
            this.fetchFirebase()
          })
      })
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', ''),
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={{ marginLeft: 20 }}
        >
          <Ionicons name="md-arrow-back" size={24} color="#fff" style={{ margin: 5 }} />
        </TouchableOpacity>
      )
    }
  }
}

export default translate(['list', 'skills', 'common'], { wait: true })(SkillsScreen)
