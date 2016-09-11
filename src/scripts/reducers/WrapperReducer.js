import { INIT_FILTERS,
         CHANGE_FILTERS,
         FETCH_ANN_BY_ID,
         FETCH_ANN_BY_ID_SUCCESS,
         FETCH_ANN_BY_ID_FAILURE } from '../actions/WrapperAction'

import handleOnlyNumbers from '../helpers/partials/handleOnlyNumbers'

const INITIAL_STATE = {filters: {
  id: "",
  area: "",
  beds: "",
  baths: "",
  valMin: "",
  valMax: "",
  freeText: ""
}, annByID: { ann: [], loading: true, error: false }};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INIT_FILTERS:
      return { ...state, filters: {
        id: handleOnlyNumbers(action.initialFilters.id, ""),
        area: handleOnlyNumbers(action.initialFilters.area, ""),
        beds: handleOnlyNumbers(action.initialFilters.beds, ""),
        baths: handleOnlyNumbers(action.initialFilters.baths, ""),
        valMin: handleOnlyNumbers(action.initialFilters.valMin, ""),
        valMax: handleOnlyNumbers(action.initialFilters.valMax, ""),
        freeText: typeof action.initialFilters.freeText !== 'undefined' ?
                  action.initialFilters.freeText.replace(/`|'|"/gi, '') : ""
      } };
    case CHANGE_FILTERS:
      return {
        ...state, filters: action.currentFilters
      }
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
