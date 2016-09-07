import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import ListAnnouncements from './ListAnnouncementsReducer';
import Wrapper from './WrapperReducer';

const rootReducer = combineReducers({
  ListAnnouncements,
  Wrapper,
  routing: routerReducer
});

export default rootReducer;
