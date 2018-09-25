import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { SKILLS_COLOR } from '../Const'
import ListScreen from './ListScreen'
import firebase from 'firebase'
//require('firebase/firestore')
import Localizer from '../Localizer'

interface SkillMove {
  id: string
  stars: number
  controls: string
}

interface Props extends NavigationScreenProps {}

interface State {
  sections: Array<any>
}

export default class SkillsScreen extends React.Component<Props, State> {
  //private firestore: firebase.firestore.Firestore
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
    return <ListScreen sections={this.state.sections} color={SKILLS_COLOR} />
  }

  /*private fetchFirebase() {
    const data = new Array<any>()
    this.firestore
      .collection('skills')
      .get()
      .then(skills => {
        skills.forEach(skill => {
          data.push({ ...skill.data(), name: Localizer.t(`skills:${skill.id}`) })
        })
        this.makeSections(data)
      })
  }*/

  private fetchOffline() {
    this.makeSections(require('../../assets/skills.json'))
  }

  private makeSections(data: any) {
    const sections = [
      { title: `1 ${Localizer.t('star')}`, data: new Array<SkillMove>() },
      { title: `2 ${Localizer.t('star')}`, data: new Array<SkillMove>() },
      { title: `3 ${Localizer.t('star')}`, data: new Array<SkillMove>() },
      { title: `4 ${Localizer.t('star')}`, data: new Array<SkillMove>() },
      { title: `5 ${Localizer.t('star')}`, data: new Array<SkillMove>() }
    ]
    data.forEach((item: SkillMove) => {
      sections[item.stars - 1].data.push(item)
    })
    this.setState({ sections })
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', '')
    }
  }
}
