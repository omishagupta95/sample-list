import React from 'react';
// import styled from 'styled-components';
// import Button from 'leaf-ui/Button/web';

import { ListCard } from '../elements';

// ////////////////////////////////////////////////////////////

const HotelCard = ({ hotel, lowestPrice, navigateToDetailsPage }) => (
  <ListCard elevated>
    <p>{hotel.name} </p>
    <p>{lowestPrice} </p>
    <button onClick={() => navigateToDetailsPage(hotel)}>Check</button>
  </ListCard>
);

export default HotelCard;
