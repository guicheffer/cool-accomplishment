import get from '../helpers/response'

export const FETCH_ANNS = 'FETCH_ANNS';
export const FETCH_ANNS_SUCCESS = 'FETCH_ANNS_SUCCESS';
export const FETCH_ANNS_FAILURE = 'FETCH_ANNS_FAILURE';
export const FETCH_ANN_BY_ID = 'FETCH_ANN_BY_ID';
export const FETCH_ANN_BY_ID_SUCCESS = 'FETCH_ANN_BY_ID_SUCCESS';
export const FETCH_ANN_BY_ID_FAILURE = 'FETCH_ANN_BY_ID_FAILURE';

export function fetchAnns() {
  const getAnns = get(`?ax=1&ay=1&bx=100&by=100`);

  return {
    type: FETCH_ANNS,
    payload: getAnns
  };
}

export function fetchAnnsSuccess(payload) {
  return {
    type: FETCH_ANNS_SUCCESS,
    payload: payload
  };
}

export function fetchAnnsFailure(details) {
  return {
    type: FETCH_ANNS_FAILURE,
    payload: details
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
