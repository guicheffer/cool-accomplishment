import { INIT_FILTERS,
         CHANGE_FILTERS,
         DISABLE_CHANGED } from '../actions/WrapperAction'

const INITIAL_STATE = {filters: {
  id: "",
  area: "",
  beds: "",
  baths: "",
  valMin: "",
  valMax: "",
  changed: false
}};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INIT_FILTERS:
      return { ...state, filters: {
        id: action.initialFilters.id || "",
        area: action.initialFilters.area || "",
        beds: action.initialFilters.beds || "",
        baths: action.initialFilters.baths || "",
        valMin: action.initialFilters.valMin || "",
        valMax: action.initialFilters.valMax || "",
        changed: true
      } };
    case CHANGE_FILTERS:
      action.currentFilters.changed = true

      return {
        ...state, filters: action.currentFilters
      }
    case DISABLE_CHANGED:
      action.currentFilters.changed = false

      return {
        ...state, filters: action.currentFilters
      }
    default:
      return state;
  }
};
