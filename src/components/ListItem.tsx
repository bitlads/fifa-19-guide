import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View, ActivityIndicator } from 'react-native'
import ControlsImage from '../components/ControlsImage'
import { Ionicons } from '@expo/vector-icons'
import Localizer from '../Localizer'

interface Props {
  isXboxSelected: boolean
  item: any
  firestore: firebase.firestore.Firestore
}

interface State {
  likes: number
  loading: boolean
  liked: boolean
}

export default class ListItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      likes: -1,
      loading: false,
      liked: false
    }
  }

  componentDidMount() {
    /*if (this.state.likes === -1) {
      this.setState({ loading: true })
      this.getLikes().promise.then((item: any) => {
        this.setState({ loading: false, likes: item.get('likes') })
      })
    }*/
  }

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.info}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={{ fontSize: 20, color: '#fff' }}>{Localizer.locale === 'es' ? this.props.item.name_es : this.props.item.name_en}</Text>
            {this.props.item.new && <Text style={styles.new}>{Localizer.t('new')}</Text>}
          </View>
        </View>
        <ControlsImage controls={this.props.item.controls} isXb={this.props.isXboxSelected} />
      </View>
    )
  }

  private renderLikes() {
    return (
      <TouchableOpacity
        onPress={() => this.toggleLiked()}
        style={[styles.likesButton, { backgroundColor: this.state.liked ? '#388E3C' : '#424242' }]}
        disabled={this.state.loading}
      >
        {this.state.loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
            <View style={styles.likesContainer}>
              <Text style={{ fontSize: 18, color: '#fff' }}>{`+${this.state.likes} `}</Text>
              <Ionicons name="md-thumbs-up" size={24} color="#fff" style={{ margin: 5 }} />
            </View>
          )}
      </TouchableOpacity>
    )
  }

  private getLikes() {
    return this.makeCancelable(
      this.props.firestore
        .collection('skills')
        .doc(this.props.item.id)
        .get()
    )
  }

  private setLikes(item: any, likes: number) {
    return this.makeCancelable(
      this.props.firestore
        .collection('skills')
        .doc(item.id)
        .set({ ...item.data(), likes })
    )
  }

  private toggleLiked() {
    this.setState({ loading: true })
    this.getLikes().promise.then((item: any) => {
      const added = this.state.liked ? -1 : 1
      const likes = item.get('likes') + added
      this.setLikes(item, likes).promise.then(() => {
        this.setState({ loading: false, likes, liked: !this.state.liked })
      })
    })
  }

  private makeCancelable = (promise: Promise<any>) => {
    let hasCanceled_ = false

    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then(val => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)), error => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error)))
    })

    return {
      promise: wrappedPromise,
      cancel() {
        hasCanceled_ = true
      }
    }
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
