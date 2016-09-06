import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import ListAnnouncements from './ListAnnouncementsReducer';

const rootReducer = combineReducers({
  ListAnnouncements,
  routing: routerReducer
});

export default rootReducer;
