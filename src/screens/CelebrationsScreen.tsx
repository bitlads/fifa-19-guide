import React from 'react'
import { translate } from 'react-i18next'
import { NavigationScreenProps } from 'react-navigation'
import { TranslationProps } from '../Const'
import ListScreen from './ListScreen'

interface Celebration {
  id: string
  type: string
  controls: string
}

interface Props extends NavigationScreenProps, TranslationProps {}

interface State {
  sections: Array<any>
}

class CelebrationsScreen extends React.Component<Props, State> {
  private isXboxSelected: boolean

  constructor(props: Props) {
    super(props)
    this.state = {
      sections: []
    }
    this.isXboxSelected = this.props.navigation.getParam('isXboxSelected', true)
  }

  componentDidMount() {
    const data = require('../../assets/celebrations.json').map((item: any) => {
      return { ...item, id: this.props.t(`celebrations:${item.id}`) }
    })
    const sections = [
      { title: this.props.t('celebrations:runningMoves'), data: new Array<Celebration>() },
      { title: this.props.t('celebrations:finishingMoves'), data: new Array<Celebration>() },
      { title: this.props.t('celebrations:proUnlockables'), data: new Array<Celebration>() },
      { title: this.props.t('celebrations:eaFcUnlockables'), data: new Array<Celebration>() }
    ]
    data.forEach((item: Celebration) => {
      switch (item.type) {
        case 'runningMoves':
          sections[0].data.push(item)
          break
        case 'finishingMoves':
          sections[1].data.push(item)
          break
        case 'proUnlockables':
          sections[2].data.push(item)
          break
        case 'eaFcUnlockables':
          sections[3].data.push(item)
          break
      }
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

export default translate(['list', 'celebrations', 'common'], { wait: true })(CelebrationsScreen)
