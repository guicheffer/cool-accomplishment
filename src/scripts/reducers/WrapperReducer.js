import { INIT_FILTERS } from '../actions/WrapperAction'

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
        id: action.initialFilters.id || "",
        area: action.initialFilters.area || "",
        beds: action.initialFilters.beds || "",
        baths: action.initialFilters.baths || "",
        valMin: action.initialFilters.valMin || "",
        valMax: action.initialFilters.valMax || ""
      } };
    default:
      return state;
  }
};
