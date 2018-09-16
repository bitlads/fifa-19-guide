import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { SKILLS_COLOR } from '../Const'
import ListScreen from './ListScreen'
import firebase from 'firebase'
require('firebase/firestore')
import { t } from '../Localizer'
import { connect } from 'react-redux';

interface SkillMove {
  id: string
  stars: number
  controls: string
}

interface Props extends NavigationScreenProps { }

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
    return <ListScreen isXboxSelected={this.isXboxSelected} sections={this.state.sections} color={SKILLS_COLOR} />
  }

  private fetchFirebase() {
    const data = new Array<any>()
    this.firestore
      .collection('skills')
      .get()
      .then(skills => {
        skills.forEach(skill => {
          data.push({ ...skill.data(), name: this.t(`skills:${skill.id}`) })
        })
        this.makeSections(data)
      })
  }

  private fetchOffline() {
    this.makeSections(require('../../assets/skills.json'))
  }

  private makeSections(data: any) {
    const sections = [
      { title: `1 ${this.t('list:star')}`, data: new Array<SkillMove>() },
      { title: `2 ${this.t('list:star')}`, data: new Array<SkillMove>() },
      { title: `3 ${this.t('list:star')}`, data: new Array<SkillMove>() },
      { title: `4 ${this.t('list:star')}`, data: new Array<SkillMove>() },
      { title: `5 ${this.t('list:star')}`, data: new Array<SkillMove>() }
    ]
    data.forEach((item: SkillMove) => {
      sections[item.stars - 1].data.push(item)
    })
    this.setState({ sections })
  }

  private t(key: string) {
    return t(key, this.props.locale)
  }

  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: navigation.getParam('title', ''),
    }
  }
}

function mapStateToProps(state: any, props: any) {
  return {
    locale: state.dataReducer.locale
  }
}

export default connect(mapStateToProps)(SkillsScreen);
