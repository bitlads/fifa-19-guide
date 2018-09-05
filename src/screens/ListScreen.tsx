import React from 'react'
import { Text, TextInput, TouchableOpacity, SectionList, StyleSheet, View, ActivityIndicator } from 'react-native'
import ControlsImage from '../components/ControlsImage'
import { TranslationProps } from '../Const'
import firebase from 'firebase'
require('firebase/firestore')
import { Ionicons } from '@expo/vector-icons'

interface Props extends TranslationProps {
  isXboxSelected: boolean
  sections: Array<Section>
  color: string
  setLiked(item: any): void
}

interface State {
  searchText: string
}

interface Section {
  title: string
  data: Array<any>
}

export default class ListScreen extends React.Component<Props, State> {
  private firestore: firebase.firestore.Firestore
  constructor(props: Props) {
    super(props)
    this.state = {
      searchText: ''
    }

    this.firestore = firebase.firestore()
    this.firestore.settings({ timestampsInSnapshots: true })
  }

  render() {
    const sections = this.filterList(this.props.sections)
    const isLoading = sections.length === 0
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          underlineColorAndroid="#fff"
          onChangeText={searchText => this.setState({ searchText })}
          value={this.state.searchText}
          placeholder={this.props.t('list:search')}
        />
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          {isLoading ? (
            <ActivityIndicator color="#fff" size="large" />
          ) : (
            <SectionList
              style={{ flex: 1 }}
              renderItem={this.renderItem}
              renderSectionHeader={this.renderSectionHeader}
              sections={sections}
              keyExtractor={(item, index) => item + index}
              removeClippedSubviews={true}
            />
          )}
        </View>
      </View>
    )
  }

  private filterList(sections: Array<Section>) {
    if (this.state.searchText === '') return sections
    return sections.map(section => {
      const filtered = section.data.filter((item: any) => item.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
      return { ...section, data: filtered }
    })
  }

  private renderSectionHeader = ({ section: { title } }: any) => {
    return (
      <View style={[styles.header, { backgroundColor: this.props.color }]}>
        <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#fff' }}>{title}</Text>
      </View>
    )
  }

  private renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.item}>
        <View style={styles.info} key={index}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Text style={{ fontSize: 18, color: '#fff' }}>{item.name}</Text>
            {item.new && <Text style={styles.new}>{this.props.t('list:new')}</Text>}
          </View>
          <ControlsImage controls={item.controls} isXb={this.props.isXboxSelected} t={this.props.t} />
        </View>
        <TouchableOpacity onPress={() => this.onPress(item)} style={styles.likes}>
          <Text style={{ fontSize: 18, color: '#fff' }}>{`+${item.likes} `}</Text>
          <Ionicons name="md-thumbs-up" size={24} color="#fff" style={{ margin: 5 }} />
        </TouchableOpacity>
      </View>
    )
  }

  private onPress(item: any) {
    this.props.setLiked(item)
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
    borderColor: '#ffffff1f',
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    flex: 1
  },
  likes: {
    borderRadius: 5,
    height: 35,
    padding: 10,
    backgroundColor: '#424242',
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
