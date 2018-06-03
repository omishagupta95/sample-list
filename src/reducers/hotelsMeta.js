import * as TYPES from '../actions/types';

const hotels = (
  state = {
    isLoading: false,
    data: []
  },
  { type, data }
) => {
  switch (type) {
    case TYPES.REQUEST_HOTELS_DATA_META:
      return Object.assign({}, state, {
        isLoading: true
      });
    case TYPES.GET_HOTELS_DATA_META:
      return Object.assign({}, state, { isLoading: false }, { data });
    default:
      return state;
  }
};

export default hotels;
