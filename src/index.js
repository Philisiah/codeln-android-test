import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

import configureStore from './store';
import MainNavigationWithState from './containers/MainNavigation';

const store = configureStore();

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
            <Root>
                <MainNavigationWithState />
                </Root>
            </Provider>
        );
    }
}