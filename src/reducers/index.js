import { combineReducers } from 'redux';

import hotels from './hotels';
import hotelsMeta from './hotelsMeta';

// ////////////////////////////////////////////////////////////

export default combineReducers({
  hotels,
  hotelsMeta
});
