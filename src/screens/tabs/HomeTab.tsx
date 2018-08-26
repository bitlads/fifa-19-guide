import * as React from 'react'
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import HomeButton from '../../components/HomeButton'

interface IProps {
  t(key: string): string
  isXboxSelected: boolean
  onToggleXb(): void
  onTogglePs(): void
}

export default class HomeTab extends React.Component<IProps> {
  private daysLeft: number
  constructor(props: IProps) {
    super(props)
    const today = new Date()
    const release = new Date('September 28, 2018 00:00:00')
    var timeDiff = Math.abs(release.getTime() - today.getTime())
    this.daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.home}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{this.props.t('main:dev_message')}</Text>
            <Text style={styles.cardText}>{this.props.t('main:thank_you')}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={{ color: '#fff', fontSize: 36, alignSelf: 'center' }}>{this.daysLeft}</Text>
              <Text style={{ color: '#fff', alignSelf: 'center' }}>{this.props.t('main:days_until')}</Text>
            </View>
            <HomeButton
              text={this.props.t('main:preorder_now')}
              actionText={this.props.t('main:preorder')}
              onPress={() => Linking.openURL('http://a.co/d/fJLqixe')}
            />
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{this.props.t('main:newInFifa19')}</Text>
            <Text style={styles.cardText}>{this.props.t('main:newStuff')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  card: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: '#424242',
    borderRadius: 5
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 5
  },
  cardText: {
    color: '#fff',
    fontSize: 16
  },
  home: {
    flex: 1
  }
})
