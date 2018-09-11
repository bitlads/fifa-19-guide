import React from 'react'
import { Text, TextInput, TouchableOpacity, SectionList, StyleSheet, View, ActivityIndicator } from 'react-native'
import ControlsImage from '../components/ControlsImage'
import { TranslationProps } from '../Const'
import { Ionicons } from '@expo/vector-icons'
import { firestore } from 'firebase'

interface Props extends TranslationProps {
  isXboxSelected: boolean
  item: any
  firestore: firebase.firestore.Firestore
}

interface State {
  likes: number
  loading: boolean
}

export default class ListItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      likes: -1,
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.getLikes().then(item => {
      this.setState({ loading: false, likes: item.get('likes') })
    })
  }

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.info}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={{ fontSize: 20, color: '#fff' }}>{this.props.item.name}</Text>
            {this.props.item.new && <Text style={styles.new}>{this.props.t('list:new')}</Text>}
          </View>
          <TouchableOpacity onPress={() => this.setLiked()} style={[styles.likesButton, { backgroundColor: this.state.likes === -1 ? '#388E3C' : '#424242' }]}>
            {this.state.loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <View style={styles.likesContainer}>
                <Text style={{ fontSize: 18, color: '#fff' }}>{`+${this.state.likes} `}</Text>
                <Ionicons name="md-thumbs-up" size={24} color="#fff" style={{ margin: 5 }} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <ControlsImage controls={this.props.item.controls} isXb={this.props.isXboxSelected} t={this.props.t} />
      </View>
    )
  }

  private getLikes() {
    return this.props.firestore
      .collection('skills')
      .doc(this.props.item.id)
      .get()
  }

  private setLiked() {
    this.setState({ loading: true })
    this.getLikes().then(item => {
      const likes = item.get('likes') + 1
      this.props.firestore
        .collection('skills')
        .doc(item.id)
        .set({ ...item.data(), likes })
        .then(() => {
          this.setState({ loading: false, likes })
        })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  header: {
    padding: 5
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ffffff1f'
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likesButton: {
    borderRadius: 5,
    height: 35,
    width: 65,
    padding: 10,
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center'
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  new: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#d32f2f',
    borderRadius: 5,
    marginLeft: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  search: {
    height: 40,
    color: '#fff',
    margin: 5,
    textAlign: 'left',
    padding: 5,
    fontSize: 18
  }
})
