import { createStore, compose, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

import reducers from '../reducers';
const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
export default function configureStore() {
    const middleware = applyMiddleware(thunk, navMiddleware, createLogger());
    const createStoreWithMiddleware = compose(middleware, devTools());
    return createStoreWithMiddleware(createStore)(reducers);
}