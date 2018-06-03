import * as TYPES from '../actions/types';

const hotels = (
  state = {
    isLoading: false,
    data: []
  },
  { type, data }
) => {
  switch (type) {
    case TYPES.REQUEST_HOTELS_DATA:
      return Object.assign({}, state, {
        isLoading: true
      });
    case TYPES.REQUEST_HOTELS_DATA_PRICES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case TYPES.GET_HOTELS_DATA:
      const hotelsData = data.reduce((hotelsObject, dataObject) => {
        const { id: hotelId } = dataObject;
        hotelsObject[hotelId] = { ...dataObject };
        return hotelsObject;
      }, {});
      return Object.assign({}, state, { isLoading: false }, { data: hotelsData });
    case TYPES.GET_HOTELS_DATA_PRICES:
      const hotelPrices = data.reduce((hotelsObject, dataObject) => {
        const { id, price } = dataObject;
        hotelsObject[id] = { ...state.data[id], price };
        return hotelsObject;
      }, {});
      return Object.assign({}, state, { isLoading: false }, { data: hotelPrices });
    default:
      return state;
  }
};

export default hotels;
