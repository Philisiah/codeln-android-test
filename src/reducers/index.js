import { combineReducers } from 'redux';
import navReducer from './nav';
import loadingModalRedcuer from './loadingModal';
import storeReducer from './data';

export default combineReducers({
    nav: navReducer,
    loadingModal: loadingModalRedcuer,
    store: storeReducer
});

