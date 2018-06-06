import * as TYPES from './types';
import * as CONFIG from '../config';

// ////////////////////////////////////////////////////////////

const createAction = (type, data = null) => ({
  type,
  data
});

const shouldFetchHotelsData = state => Object.keys(state.hotels.data).length === 0;

export const getHotelsData = () => dispatch => {
  dispatch(createAction(TYPES.REQUEST_HOTELS_DATA));

  fetch(CONFIG.APIS.HOTELS_LIST)
    .then(response => response.json())
    .then(json => dispatch(createAction(TYPES.GET_HOTELS_DATA, json.data)))
    .then(() => dispatch(createAction(TYPES.REQUEST_HOTELS_DATA_PRICES)))
    .then(() => fetch(CONFIG.APIS.HOTELS_PRICES))
    .then(response => response.json())
    .then(json => dispatch(createAction(TYPES.GET_HOTELS_DATA_PRICES, json.data)));
};

export const getHotelsDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchHotelsData(getState())) {
    return dispatch(getHotelsData());
  }
  return null;
};

export const getHotelsMeta = () => dispatch => {
  dispatch(createAction(TYPES.REQUEST_HOTELS_DATA_META));

  return fetch(CONFIG.APIS.HOTELS_META)
    .then(response => response.json())
    .then(json => dispatch(createAction(TYPES.GET_HOTELS_DATA_META, json.data)));
};
