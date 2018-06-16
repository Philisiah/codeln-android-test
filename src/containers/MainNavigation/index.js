import React, { Component } from 'react';
import { View, BackHandler, Dimensions } from 'react-native';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {
    createNavigationPropConstructor,       // handles #1 above
    createNavigationReducer,               // handles #2 above
    createReactNavigationReduxMiddleware,  // handles #4 above
    initializeListeners,                   // handles #4 above
  } from 'react-navigation-redux-helpers';
import PropTypes from 'prop-types';


import configureStore from '../../store';
import Home from '../../containers/Home';
import Details from '../../containers/Details';
import LoadingModal from '../../components/LoadingModal';
import * as loadingModalActions from '../../actions/loadingModal';

export const MainNavigation = StackNavigator(
    {
        Home: { screen: Home },
        Details: { screen: Details }
    },
    {
        headerMode: 'none'
    }
)

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
const navigationPropConstructor = createNavigationPropConstructor("root");

class MainNavigationWithState extends Component {
    componentDidMount() {
        initializeListeners("root", this.props.nav);
    }

    render() {
        const navigation = navigationPropConstructor(
            this.props.dispatch,
            this.props.nav,
          );
        return (
            <View style={{ height: Dimensions.get('window').height * 2 }}>
                <MainNavigation navigation={navigation}
                />
                <LoadingModal visible={this.props.loadingModal.visible}
                    message={this.props.loadingModal.message}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav,
        loadingModal: state.loadingModal,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigationWithState);