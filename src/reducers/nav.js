import { MainNavigation } from '../containers/MainNavigation';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer(MainNavigation);

export default navReducer;