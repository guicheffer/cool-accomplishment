import {
  FETCH_ANNS,
  FETCH_ANNS_SUCCESS, FETCH_ANNS_FAILURE,
  FETCH_ANN_BY_ID,
  FETCH_ANN_BY_ID_SUCCESS,
  FETCH_ANN_BY_ID_FAILURE } from '../actions/ListAnnouncementsAction'

const INITIAL_STATE = {
  annsList: { anns: [], loading: true, error: false },
  annByID: { ann: [], loading: true, error: false }
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ANNS:
      return {
        ...state,
        annsList: { anns: [], loading: true }
      };
    case FETCH_ANNS_SUCCESS:
      return {
        ...state,
        annsList: { anns: action.payload.data.properties, loading: false }
      };
    case FETCH_ANNS_FAILURE:
      return {
        ...state,
        annsList: { anns: [], loading: false, error: true }
      };
    case FETCH_ANN_BY_ID:
      return {
        ...state,
        annByID: { ann: [], loading: true }
      };
    case FETCH_ANN_BY_ID_SUCCESS:
      return {
        ...state,
        annByID: { ann: action.payload.data, loading: false }
      };
    case FETCH_ANN_BY_ID_FAILURE:
      return {
        ...state,
        annByID: { ann: [], loading: false, error: true }
      };
    default:
      return state;
  }
};
