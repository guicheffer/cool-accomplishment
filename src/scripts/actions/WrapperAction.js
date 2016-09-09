import get from '../helpers/response'

export const INIT_FILTERS = 'INIT_FILTERS';
export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export const DISABLE_CHANGED = 'DISABLE_CHANGED';
export const FETCH_ANN_BY_ID = 'FETCH_ANN_BY_ID';
export const FETCH_ANN_BY_ID_SUCCESS = 'FETCH_ANN_BY_ID_SUCCESS';
export const FETCH_ANN_BY_ID_FAILURE = 'FETCH_ANN_BY_ID_FAILURE';

export function initFilters(queryFilters) {
  return {
    type: INIT_FILTERS,
    initialFilters: queryFilters
  };
}

export function changeFilters(currentFilters) {
  return {
    type: CHANGE_FILTERS,
    currentFilters: currentFilters
  };
}

export function fetchAnnByID(id) {
  const getAnn = get(`/${id}`);

  return {
    type: FETCH_ANN_BY_ID,
    payload: getAnn
  };
}

export function fetchAnnByIDSuccess(payload) {
  return {
    type: FETCH_ANN_BY_ID_SUCCESS,
    payload: payload
  };
}

export function fetchAnnByIDFailure(details) {
  return {
    type: FETCH_ANN_BY_ID_FAILURE,
    payload: details
  };
}
