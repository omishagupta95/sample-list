import * as TYPES from '../actions/types';

const hotels = (
  state = {
    isLoading: false,
    isLoadingPrices: false,
    data: {}
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
        isLoadingPrices: true
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
        let prices = [];

        Object.keys(price).forEach(roomType => {
          if (price[roomType]) prices.push([roomType, price[roomType]]);
        });

        prices = prices.sort((a, b) => a[1] - b[1]);

        hotelsObject[id] = { ...state.data[id], prices };

        return hotelsObject;
      }, {});

      return Object.assign({}, state, { isLoadingPrices: false }, { data: hotelPrices });

    default:
      return state;
  }
};

export default hotels;
