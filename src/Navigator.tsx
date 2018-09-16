import * as React from 'react'
import HomeScreen from './screens/HomeScreen'
//import SkillsScreen from './src/screens/SkillsScreen'
//import CelebrationsScreen from './src/screens/CelebrationsScreen'
import { createStackNavigator } from 'react-navigation'
import { StatusBar, View, ActivityIndicator } from 'react-native'
import { ADMOB_BANNER_ID, S8_TEST_ID } from './Secrets'
import { AdMobBanner } from 'expo'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './redux/Actions';

const StackNav = createStackNavigator(
    {
        Home: HomeScreen,
        //Skills: SkillsScreen,
        //Celebrations: CelebrationsScreen
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#212121',
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
)

class Navigator extends React.Component<{}> {
    constructor(props: any) {
        super(props)
        this.props.getLocale()
    }

    render() {
        return this.props.loading ? <ActivityIndicator /> : this.renderApp()
    }

    private renderApp() {
        return (
            <View style={{ flex: 1, backgroundColor: '#303030' }}>
                <StatusBar barStyle="light-content" />
                <StackNav />
                <AdMobBanner style={{ alignSelf: 'center' }} adUnitID={ADMOB_BANNER_ID} bannerSize="banner" testDeviceID={S8_TEST_ID} />
            </View>
        )
    }
}

function mapStateToProps(state: any, props: any) {
    return {
        loading: state.dataReducer.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
