/**
 * Constants and other config variables
 */

export const STORE_KEY = 'root';

// ////////////////////////////////////////////////////////////

const BASE_URL = 'http://www.mocky.io/v2/';

const ENDPOINTS = [
  '5a7f23442e00005000b56873', // Hotels list
  '5a7f24f02e00005200b56875', // Hotel room prices
  '5a7f265b2e00005d00b56877' // Hotel policies, essentials
];

const generateApiUrl = index => BASE_URL + ENDPOINTS[index];

export const API_HOTELS_LIST = generateApiUrl(0);
export const API_HOTELS_PRICES = generateApiUrl(1);
export const API_HOTELS_META = generateApiUrl(2);

// ////////////////////////////////////////////////////////////

const HOTEL_ESSENTIALS_IMAGES = {
  'ac-room': 'https://images.treebohotels.com/images/facilities/ac-room.svg',
  breakfast: 'https://images.treebohotels.com/images/facilities/complimentary-tea-coffee.svg',
  toiletries: 'https://images.treebohotels.com/images/facilities/complimentary-toiletries.svg',
  tv: 'https://images.treebohotels.com/images/facilities/flat-screen-tv.svg',
  wifi: 'https://images.treebohotels.com/images/facilities/free-wifi.svg'
};

export const getEssentialsImageUrl = essential =>
  HOTEL_ESSENTIALS_IMAGES[essential.replace(/\s+/g, '-').toLowerCase()] ||
  HOTEL_ESSENTIALS_IMAGES.tv;

// ////////////////////////////////////////////////////////////
