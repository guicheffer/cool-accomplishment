import { INIT_FILTERS,
         CHANGE_FILTERS } from '../actions/WrapperAction'

import handleOnlyNumbers from '../helpers/partials/handleOnlyNumbers'

const INITIAL_STATE = {filters: {
  id: "",
  area: "",
  beds: "",
  baths: "",
  valMin: "",
  valMax: ""
}};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INIT_FILTERS:
      return { ...state, filters: {
        id: handleOnlyNumbers(action.initialFilters.id, ""),
        area: handleOnlyNumbers(action.initialFilters.area, ""),
        beds: handleOnlyNumbers(action.initialFilters.beds, ""),
        baths: handleOnlyNumbers(action.initialFilters.baths, ""),
        valMin: handleOnlyNumbers(action.initialFilters.valMin, ""),
        valMax: handleOnlyNumbers(action.initialFilters.valMax, "")
      } };
    case CHANGE_FILTERS:
      return {
        ...state, filters: action.currentFilters
      }
    default:
      return state;
  }
};
