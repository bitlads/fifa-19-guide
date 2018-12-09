import React from 'react'
import { ActivityIndicator, SectionList, StyleSheet, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import ListItem from '../components/ListItem'
import { CONSOLE_XBOX } from '../Const'
import Localizer from '../Localizer'

interface IProps {
  isXboxSelected: boolean
  sections: ISection[]
  color: string
  console: string
}

interface IState {
  searchText: string
}

interface ISection {
  title: string
  data: any[]
}

class ListScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      searchText: ''
    }
  }

  public render() {
    const sections = this.filterList(this.props.sections)
    const isLoading = sections.length === 0
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          underlineColorAndroid="#fff"
          onChangeText={searchText => this.setState({ searchText })}
          value={this.state.searchText}
          placeholder={Localizer.t('search')}
          placeholderTextColor="#BDBDBD"
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

  private filterList(sections: ISection[]) {
    if (this.state.searchText === '') {
      return sections
    }
    return sections.map(section => {
      const filtered = section.data.filter((item: any) => {
        const name = Localizer.locale === 'es' ? item.name_es : item.name_en
        return name.toLowerCase().includes(this.state.searchText.toLowerCase())
      })
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
    return <ListItem item={item} key={index} isXboxSelected={this.props.console === CONSOLE_XBOX} />
  }
}

function mapStateToProps(state: any, props: any) {
  return {
    console: state.dataReducer.console
  }
}

export default connect(mapStateToProps)(ListScreen)

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
    width: 50,
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
